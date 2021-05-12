import React from 'react';
import ReactDOM from 'react-dom';
// import ApolloClient from 'apollo-client'
import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import typeDefs from './Apollo/Schema';
import resolvers from './Apollo/Resolvers';

import App from './App';

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
   
  ,
  document.getElementById('root')
);


