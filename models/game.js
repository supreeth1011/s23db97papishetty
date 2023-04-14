const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
game_name: String,
version: Number,
price: String
})
module.exports = mongoose.model("game",
gameSchema)