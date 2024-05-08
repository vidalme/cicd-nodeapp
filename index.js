const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World, bom dia a todos, boa tarde, boa noite.</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`eu sou uma ci/cd`)
})
