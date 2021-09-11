const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const cors = require('cors');
const mongoose = require("mongoose");
const Product = require("./graphql/model/models");
const Category = require("./graphql/model/models");



const app = express()

app.use(cors())
app.use(
    '/graphql',
    graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.listen(3000, () => console.log("Server is running on localhost:3000 🚀"))
