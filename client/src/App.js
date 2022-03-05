import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { render } from 'react-dom';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/pages/Home';
// import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
// import Map from './components/pages/Map';

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

// This is Google Maps code from line .
 

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 
console.log(client)

function App() {
  return (
    <div>

      <ApolloProvider client={client}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          {/* <Route path='/map' element={<Map/>}/> */}
          {/* <Route path='/Login' element={<Login/>}/> */}
        </Routes>
      </ApolloProvider> 
    </div>
  );
}

export default App;
