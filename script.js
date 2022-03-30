console.log('Det funkar')

const express = require('express')
const app = express()
const PORT = 1337

app.listen(PORT, () => {
  console.log(`Porten ${PORT} funkar`)
})

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
})
