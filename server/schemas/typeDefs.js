const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Post {
    _id: ID
    username: String
    email: String
  }

  type UserStories {
    _id: ID
    username: String
    email: String
  }

  type Query {
    events: [Event!]!
    event(id: Int!): Event!
  }
`;

module.export = typeDefs;
