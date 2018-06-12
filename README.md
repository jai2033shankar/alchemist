![Alchemist](./alchemist.png)

# Alchemist
Alchemy is a philosophical and protoscientific tradition practiced throughout Europe, Africa and Asia. It aimed to purify, mature, and perfect certain objects.

Data is the most important asset you have. Analyzing it can give you priceless insights into your customers, product and a sense of direction with any decision. But, Data manipulation and analysis comes with a predefined set of problems:

1. Loading the data from different sources and with different triggers
2. Cleaning and Transforming the data to suitable formats
3. Writing this data in a format that is suitable for the next stage or engine

And then with big data comes the problem of cost...


## Another ETL engine?

Alchemist was built with 2 main things in mind:
1. Being lightweight: include in any JavaScript code and use.
2. Being Flexible: Use the provided adapters or create your own.

## Simple concepts:
1. An ETL job consists of Input, Transformation(s) and Output.
2. An object of Valid and Invalid data is passed between steps so you can:
  - access the data
  - manipulate it

## How to define an ETL Job
To see a more detailed implementation please check the example [job](example/app/services/pintpoint_service.js)
### 1. Define an input


### 2. Define transformation(s)
TODO

### 3. Define Output
TODO

## How to deploy an ETL job
TODO


**If you are interested in a suggested structure of usage please check the example folder**

## Development
```
yarn install
```
### Running tests
```
docker-compose run --rm test
```

## Disclaimer
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
