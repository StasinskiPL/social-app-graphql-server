const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { resolver } = require("graphql-sequelize");
const { User, Post } = require("../models");
const userType = require("./userType");

const RootQuery = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    // user: {
    //   type: User,
    //   args: {
    //     id: { type: new GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, { id }) {
    //     return User.find(id);
    //   },
    // },
    users: {
      type: GraphQLList(userType),
      resolve: resolver(User),
    },
    // post: {
    //   type: Post,
    //   args: {
    //     id: { type: new GraphQLNonNull(GraphQLID) },
    //   },
    // },
    // posts: {
    //   type: GraphQLList(postType),
    //   args: {
    //     authorId: { type: GraphQLID },
    //   },
    //   resolve(parent, { authorId }) {
    //     if (authorId) {
    //       return Post.find({ authorId: authorId });
    //     } else {
    //       return Post.find();
    //     }
    //   },
    // },
  }),
});

module.exports = RootQuery;
