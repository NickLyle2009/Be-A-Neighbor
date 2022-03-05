const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Post {
    _id: ID
    postAuthor: String
    requestType: Boolean
    postDescription: String
  }

  type UserStory {
    _id: ID
    username: String
    message: String
  }

  type Query {
    users: [User]
    posts: [Post]
    userstories: [UserStory]
    users(username: String!): User
    post(postId: ID!): Post
    userstory(userstortyID: ID!): UserStory
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postId: ID!): Post
    addUserStory(userstortyID: ID!): UserStory
  }
`;

module.export = typeDefs;
