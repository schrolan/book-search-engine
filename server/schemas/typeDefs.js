const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
  }

  type Query {
  }

  type Mutation {
  }
`;

module.exports = typeDefs;