const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

<<<<<<< HEAD
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

// article stuff
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const resolvers = {
  hello: () => "Hello world!"
};

=======
const { typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const db = require('./config/connection');

>>>>>>> 604a26ace647448e7396c14f59140381d01ff856
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

<<<<<<< HEAD
server.applyMiddleware({ app });

=======
>>>>>>> 604a26ace647448e7396c14f59140381d01ff856
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
=======
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
    };

startApolloServer(typeDefs, resolvers);
>>>>>>> 604a26ace647448e7396c14f59140381d01ff856
