require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twittwer',(req, res) => {
    res.send('<a href="https://www.google.com/">')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})