const express = require('express')
const app = express()

//moddelewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(require('./routes/index.js'))
app.listen(3000)
console.log("server en el puerto 3000")