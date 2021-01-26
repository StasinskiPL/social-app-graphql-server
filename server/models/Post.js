const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./Comment");

const schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", schema);
