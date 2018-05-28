import Querystring from "querystring";

export default class CloudfrontLogTransformation {
  constructor(opts) {
  }

  async transform(pipelineData) {
    let data = pipelineData.getData()
    let parsedData = this.create_payloads_from_piwik(data);

    await pipelineData.putData(parsedData)
    return pipelineData
  }

  create_payloads_from_piwik(data) {
    let fields = []

    const mapped = data.split(/\r?\n/).map((line) =>{
      if (line.startsWith('#Fields: ')) {
        fields = line.split(/#Fields: /)[1].split(/ /)
      }

      if (line.startsWith('#')) {
        return null
      }
      
      let line_final = {}
      const line_data = line.split(/\t/)
      
      for (let index in line_data) {
        line_final[fields[index]] = Querystring.unescape(line_data[index])
      }

      return line_final
    }).filter((entry) => { return entry != null })

    const payloads = mapped.map((entry) => {
      const params = Querystring.parse(entry['cs-uri-query'])
      const fetched_at = new Date(Date.parse(entry['date'] + ' ' + entry['time']))
      
      params.source_ip = entry['c-ip']
      params.fetched_at = fetched_at.getTime() / 1000
      params.user_agent = Querystring.unescape(entry['cs(User-Agent)'])
      params.edge_location = entry['x-edge-location']

      return params
    }).filter((entry) => { return entry.idsite != null })

    return payloads;
  }
}