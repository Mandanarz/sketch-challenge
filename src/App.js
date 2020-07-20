import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Document from "./componentes/document/Document";
import Nav from "./navigation/Nav";
import ArtBoard from "./componentes/artBoard/ArtBoard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import { APIContext } from "./contexts/ApiContext";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
});

class App extends React.Component {
  state = { data: {} };

  render = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <APIContext.Provider value={this.state}>
              <Nav />
              <Route
                exact
                path="/"
                render={(props) => <Document {...props} testProp="test" />}
              />
              <Route path="/artboards/:id" component={ArtBoard} />
            </APIContext.Provider>
          </div>
        </Router>
      </ApolloProvider>
    );
  };
}

export default App;
