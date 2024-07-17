const express = require('express')
const path = require('path')
const app = express()
const port = 2001

app.use(express.static(path.join(__dirname,"static")))

app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening on ${port}`)
})