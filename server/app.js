const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const mongoose = require("mongoose")
const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://dawid:dawid@catbook.ubsvl.mongodb.net/catbook?retryWrites=true&w=majority",{
  useUnifiedTopology:true,
  useNewUrlParser:true
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    
  })
);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
