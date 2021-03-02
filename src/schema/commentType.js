const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require("graphql");
const Post = require("../models/Post");
const User = require("../models/User");
const userType = require("./userType");

const commentType = new GraphQLObjectType({
  name: "comment",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: userType,
      resolve(parent, args) {
        return User.findById(parent.authorId);
      },
    },
    post: {
      type: postType,
      resolve(parent, args) {
        return Post.findById(parent.postId);
      },
    },
  }),
});

module.exports = commentType;

const postType = require("./postType");
