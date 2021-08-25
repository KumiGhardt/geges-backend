const express = require("express");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} = require("graphql");
const { resolve } = require("path");


//query product
const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "this is a product with a description and price",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    category: {
      type: CategoryType,
      resolve: (product) => {
        return category.find((category) => category.id === product.categoryId);
      },
    },
  }),
});

//query categories
const CategoryType = new GraphQLObjectType({
  name: "Category",
  description:
    "this is a list of catgories with the product names that belong to the categories",
  fields: () => ({
    categoryId: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    product: {
      type: GraphQLList(ProductType),
      resolve: (category) => {
        return products.filter((product) => product.categoryId === category.id);
      },
    },
  }),
});

//root query type for searching
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    //all products
    products: {
      type: new GraphQLList(ProductType),
      description: "List of all products",
      resolve: () => products,
    },
    //all categories
    categories: {
      type: new GraphQLList(CategoryType),
      description: "Types of all catgories",
      resolve: () => categories,
    },
    //one product
    oneProduct: {
      type: ProductType,
      description: "One product",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        products.find((product) => product.id === args.id),
    },
    //one category
    oneCategory: {
      type: CategoryType,
      description: "One category",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        categories.find((category) => category.id === args.id),
    },
  }),
});

//RootMutationType for adding

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addProduct: {
      type: ProductType,
      description: "add a new product",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLFloat) },
        categoryId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const product = {
          id: products.length + 1,
          name: args.name,
          description: args.description,
          price: args.price,
          categoryId: args.categoryId,
        };
        products.push(product);
        return product;
      }
    },
    addCategory: {
        type: CategoryType,
        description: 'Add a category',
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: (parent, args) => {
          const category = { 
              id: categories.length + 1, 
              name: args.name 
            }
          categories.push(category)
          return category
        },
    }
  }),
});

//schema to query
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("server running"));
