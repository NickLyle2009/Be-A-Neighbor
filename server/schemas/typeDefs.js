const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }

  type Post {
    _id: ID
    postDescription: String
    postType: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type UserStory {
    _id : ID
    userStoryAuthor: String!
    createdAt: String!
    message: String!

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
    comment: Post
    userStories: [UserStory]
    user(username: String!): User
    post(username : String!): Post
    userStory(userStoryId: ID!): UserStory
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addUserStory(userStoryAuthor: String!, message: String!): UserStory
    login(email: String!, password: String!): Auth
    addPost(postType: String, postDescription: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post

  }
`;

module.exports = typeDefs;
