import React from "react";
import ApolloClient from "apollo-boost";
import Document from "./componentes/document/Document";
import Nav from "./navigation/Nav";
import ArtBoard from "./componentes/artBoard/ArtBoard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import { getArtBoards } from "./services/ArtBoardService";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
});

class App extends React.Component {
  state = { artBoards: {}, loading: true, error: null };

  componentDidMount() {
    const data = getArtBoards().then(
      (response) => {
        if (
          response &&
          response.data &&
          response.data.share &&
          response.data.share.version &&
          response.data.share.version.document &&
          response.data.share.version.document.artboards &&
          response.data.share.version.document.artboards.entries
        ) {
          this.setState({
            artBoards: response.data.share.version.document.artboards.entries,
            loading: false,
          });
        }
      },
      (error) => {
        this.setState({ error: "Something went wrong!!!" });
      }
    );
  }

  render = () => {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (
      this.state.artBoards &&
      Array.isArray(this.state.artBoards) &&
      this.state.artBoards.length > 0
    ) {
      return (
        <Router>
          <div>
            <>
              <Nav data={this.state.artBoards} />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Document {...props} data={this.state.artBoards} />
                )}
              />
              <Route
                path="/artboards/:id"
                render={(props) => (
                  <ArtBoard {...props} data={this.state.artBoards} />
                )}
              />
            </>
          </div>
        </Router>
      );
    } else if (
      this.state.artBoards &&
      Array.isArray(this.state.artBoards) &&
      this.state.artBoards.length === 0
    ) {
      return <div>No Data Found</div>;
    } else {
      return <div>{this.state.error}</div>;
    }
  };
}

export default App;
