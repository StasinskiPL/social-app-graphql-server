const { GraphQLObjectType } = require("graphql");

const followerType = new GraphQLObjectType({
  name: "follower",
  fields: () => ({
    following: { type: userType },
  }),
});

module.exports = followerType;

const userType = require("./userType");
