const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("array babu ye index page hai api ")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})