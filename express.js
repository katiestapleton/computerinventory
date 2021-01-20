const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 8089

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// inventory API
app.get('/inventory', (req, res) => {
  res.send('GET the inventory')
})

app.get('/inventory/:component_id', (req, res) => {
  res.send({'GET the component': req.params.component_id})
})

app.post('/inventory', (req, res) => {
  res.send('POST/add the inventory')
})

app.put('/inventory/:component_id', (req, res) => {
  res.send({'UPDATE the component': req.params.component_id})
})

app.delete('/inventory/:component_id', (req, res) => {
  res.send({'DELETE the component': req.params.component_id})
})


//users API

app.get('/users', (req, res) => {
  res.send('GET all users')
})

app.get('/users/:user_id', (req, res) => {
  res.send({'GET user': req.params.user_id})
})

//login alt to get: send username/passwords/information without exposing 
app.post('/users', (req, res) => {
  res.send('POST/add user')
})

app.post('/users/login', (req, res) => {
  res.send(' with username and password')
})


app.put('/users/:user_id', (req, res) => {
  res.send({'UPDATE user': req.params.user_id})
})

app.delete('/users/:user_id', (req, res) => {
  res.send({'DELETE user': req.params.user_id})
})



// listen on port
app.listen(port, () => {
    console.log(`Hello World from Express server listening at http://localhost:${port}`)
  })