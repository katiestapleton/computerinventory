const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8089

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('Hello World from Express')
})

app.get('/hello/:hello_id', (req, res) => {
    res.json({"id": req.params.hello_id})
})

app.get('/object', (req, res) => {
  const myObj = { "id": "1"}
  res.json(myObj)
})

app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
  })