const { GraphQLSchema } = require("graphql");
const RootMutation = require("./mutation");
const RootQuery = require("./query");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
