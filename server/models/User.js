const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    nick:{
        type:String,
        required:true,
    },
    bio:String,
    photo:String,
    age: Number,
    country: String,
    city:String,
    friends: [String],
})

module.exports = mongoose.model("User",schema);