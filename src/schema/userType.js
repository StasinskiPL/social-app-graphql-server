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
    id: { type: GraphQLID },
    uuid: { type: GraphQLID },
    nick: { type: GraphQLString },
    followers: { type: new GraphQLList(followerType) },
  }),
});

module.exports = userType;

const followerType = require("./followerType");
