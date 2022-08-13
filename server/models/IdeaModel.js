const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  title:{
    type:String,
  },
  domain: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  founders: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
  valuation: {
    type: Number,
  },
  plans: {
    type: String,
  },
  extra: {
    type: String,
  },
})

const Idea = mongoose.model("Idea", IdeaSchema)

module.exports = Idea
