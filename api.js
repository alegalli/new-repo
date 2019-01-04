const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

var courses_offered = [{id: 21, name: 'HCI'}, {is: 28, name: 'seii'}]

app.get('/', (req, res) => res.send('Hellooooo  oo World!'))

app.get('/courses', (req, res) => {
    res.json(courses_offered)
})

app.listen(PORT, () =>
  console.log('Example app listening in port'+PORT)
)

module.exports = app
