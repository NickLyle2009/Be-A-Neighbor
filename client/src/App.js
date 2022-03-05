import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { render } from 'react-dom';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

// import Header from './components/Header'
import Home from './components/pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
}); 

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  render (
    <div>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </ApolloProvider> 
    </div>
  );
}

export default App;
