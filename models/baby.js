const mongoose = require('mongoose')
const Schema = mongoose.Schema

const babiesSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required:true},
    sex: {type: String, required: true},
    race: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Baby', babiesSchema)