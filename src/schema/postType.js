const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} = require("graphql");
// const Comment = require("../models/Comment");

const postType = new GraphQLObjectType({
  name: "post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    // likes: { type: new GraphQLNonNull(GraphQLInt) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = postType;

// const commentType = require("./commentType");
