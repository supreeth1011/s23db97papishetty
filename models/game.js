const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
game_name: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
version: {
    type:Number,
    min: 1,
    max: 10000 } ,
price: String
})
module.exports = mongoose.model("game",
gameSchema)