const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://mongo:27017/mernapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const ItemSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
})
const Item = mongoose.model('Item', ItemSchema)

app.get('/api/items', async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

app.post('/api/items', async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    completed: req.body.completed || false,
  })
  await newItem.save()
  res.json(newItem)
})

app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params
  const { completed } = req.body
  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { completed },
    { new: true }
  )
  res.json(updatedItem)
})

app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params
  await Item.findByIdAndDelete(id)
  res.json({ success: true })
})

app.listen(5000, () => {
  console.log('Backend running on port 5000')
})
