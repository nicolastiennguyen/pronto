import express from 'express'
const app = express()

app.use(express.json())

app.get('/nick', (req, res) => {
  res.send('hello world')
})

app.post('/nick/:id', (req, res) => {
  const { id } = req.params
  const { message } = req.body
  res.send(`here is your id: ${id} and message: ${message}`)
})

const PORT = 8000
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))