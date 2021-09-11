const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Product {
    _id: ID!
    image: String
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  type Category {
    categoryId: Int
    name: String!
  }

  input ProductInput {
    _id: ID!
    image: String
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  input CategoryInput {
    categoryId: Int
    name: String!
  }


  type Query {
    products:[Product!],
    categories: [Category!]
  }

  type Mutation {
    createProduct(product:ProductInput): Product,
    createCategory(category:CategoryInput): Category
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
