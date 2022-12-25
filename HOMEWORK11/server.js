const port = 5000;
const os = require ('os');
const path = require ('path');
const express = require('express');
const personal = require('./personalmodule.js');
const cors = require('cors')
const app = express() 



app.use(cors())

// app.get('/', (req, res) => {
//     res.json('This is a server page')
// })

app.get('/', (req, res) => {res.json(personal())})

app.listen(port, () => {console.log(`Server has started on port: ${port}`)})