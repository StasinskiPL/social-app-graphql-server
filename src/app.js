const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { sequelize, User, Follows } = require("./models");
const cors = require("cors");
const schema = require("./schema");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen({ port: 5000 }, async () => {
  try {
    await sequelize.authenticate();
    // console.log("listening on  http://localhost:5000");
    const user = await User.findAll({
      include: ["userFollowers"],
    });
    console.log(user);
    // const follow = await Follows.findAll();

    // console.log(follow);
  } catch (error) {
    console.log(error);
  }
});
