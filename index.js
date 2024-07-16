const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    // res.send('About World!')
    res.sendFile(path.join(__dirname,'index.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})