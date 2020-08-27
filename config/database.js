const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/babies', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('connected', () => {
  console.log(`Connect to MongoDB at ${db.host}:${db.port}`)
})