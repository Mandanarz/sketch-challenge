import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Document from "./document/Document";
import Nav from "./navigation/Nav";
import ArtBoard from "./artBoard/ArtBoard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />

          <Route exact path="/" component={Document} />
          <Route path="/artboards/:id" component={ArtBoard} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
