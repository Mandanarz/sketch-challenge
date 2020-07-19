import React from 'react';
import ApolloClient from 'apollo-boost';
import  {ApolloProvider} from 'react-apollo';
import Sketch from './Sketch';
import './App.css';

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api"
});

const App = () => {
  return (<ApolloProvider client={client}>
    <div>
      <Sketch />
    </div>
  </ApolloProvider>);
}



export default App;
