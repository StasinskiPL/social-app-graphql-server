const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  text: { type: String, required: true },
  authorId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
},{timestamps:true});

module.exports = mongoose.model("Comment", schema);
