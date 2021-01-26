const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} = require("graphql");
const Comment = require("../models/Comment");

const postType = new GraphQLObjectType({
  name: "post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID)},
    text: { type: new GraphQLNonNull(GraphQLString) },
    likes: { type: new GraphQLNonNull(GraphQLInt) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    comments: {
         type: new GraphQLList(commentType),
         resolve(parent, args) {
             return Comment.find({_id:[...parent.comments]})
         }},
  }),
});

module.exports = postType;


const commentType = require("./commentType");
