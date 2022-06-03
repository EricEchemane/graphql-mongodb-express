const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
    type Query {
        hello: String!
        coffees: [Coffee!]!
    }

    type Mutation {
        createCoffee(input: CreateCoffeeInput!): Coffee!
    }

    type Coffee {
        id: ID!
        name: String!
        price: Float!
        imageUrl: String!
    }

    # =============== Inputs
    input CreateCoffeeInput {
        name: String!
        imageUrl: String!
        price: Float!
    }
`;