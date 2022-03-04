const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Event {
    id: ID!
    title: String!
    description: String
    date: String
    attendants: [Person!]
  }

  type Person {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    events: [Event!]!
    event(id: Int!): Event!
  }
`;

module.export = typeDefs;
