const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express()
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pabg0.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
One Time:
1. nodemon globally installed
2. mongodb atlas access, user
3. Network Access (ip address allow)
Connect

Every Projects
1. install mongodb
2. import (require), mongodb
3. copy uri (connection string)
4. create the client (copy code from atlas)
5. create or get database access credentials (username, password)
6. create .env file and add DB_USER and DB_PASS as environment variable
7. make sure you require (import) dotenv
8. Convert URI string to a template string. 
9. Add DB_USER and DB_PASS in the connection URI string
10. Check URI string by using console.log()
*/