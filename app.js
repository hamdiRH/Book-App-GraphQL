const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect("mongodb://127.0.0.1:27017/gql-ninja", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
