
# MONGODB Basic Training


## Requirements

 - [NODEJS](https://nodejs.org/en)
 - [MONGO ATLAS](https://www.mongodb.com/cloud/atlas/register)

 

## Installation

Install NODEJS and Create Account on Mongo Atlas

Perform Below Steps 


```bash
  npm install
  node server
```
If dotenv error occurs . then add below in cmd


```bash
  npm install --save dotenv
```
Perform above steps. Add all value inside  ```.env``` file. Keys are defined in the file


# API

Create Customer

```bash
http://localhost:5001/create/customer/profile?<email>&mobile=<mobile number>
```


