const express = require('express')
const app = express()
const port = 3000

//request
app.get('/', (req, res) => {
//responding actions. send message  
  res.send('Hello World! root')
})

//request on the hello endpoint
app.get('/hello', (req, res) => {
  res.send('get- Hello World!')
})

app.post('/hello', (req, res) => {
  res.send('POST- Hello World!')
})

app.put('/hello', (req, res) => {
  res.send('PUT- Hello World!')
})

app.delete('/hello', (req, res) => {
  res.send('DELETE- Hello World!')
})

app.('/hello', (req, res) => {
  res.send(' Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
