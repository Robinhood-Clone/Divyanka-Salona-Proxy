const express = require('express')

var bodyParser = require('body-parser')
var cors = require('cors')
             
const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'))
app.use('/stocks/:id',express.static(__dirname + '/../client/dist'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))