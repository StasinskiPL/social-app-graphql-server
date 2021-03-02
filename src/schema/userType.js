const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
} = require("graphql");
const { resolver } = require("graphql-sequelize");
const { User } = require("../models");

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    uuid: { type: new GraphQLNonNull(GraphQLID) },
    nick: { type: new GraphQLNonNull(GraphQLString) },
    followers: { type: new GraphQLList(userType) },
  }),
});

module.exports = userType;
