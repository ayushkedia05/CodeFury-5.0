const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  revenue: {
    type: Number,
  },
})

const Idea = mongoose.model("Idea", IdeaSchema)

module.exports = Idea
