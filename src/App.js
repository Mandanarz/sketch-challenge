import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Document from "./componentes/document/Document";
import Nav from "./navigation/Nav";
import ArtBoard from "./componentes/artBoard/ArtBoard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
              <Query
                query={gql`
                  {
                    share(shortId: "Y8wDM") {
                      shortId
                      version {
                        document {
                          name
                          artboards {
                            entries {
                              name
                              isArtboard
                              files {
                                url
                                height
                                width
                                scale
                                thumbnails {
                                  url
                                  height
                                  width
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `}
              >
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error</p>;

                  if (
                    data &&
                    data.share &&
                    data.share.version &&
                    data.share.version.document &&
                    data.share.version.document.artboards &&
                    data.share.version.document.artboards.entries
                  ) {
                    return (
                      <>
                        <Nav
                          data={data.share.version.document.artboards.entries}
                        />
                        <Route
                          exact
                          path="/"
                          render={(props) => (
                            <Document
                              {...props}
                              data={
                                data.share.version.document.artboards.entries
                              }
                            />
                          )}
                        />
                        <Route
                          path="/artboards/:id"
                          render={(props) => (
                            <ArtBoard
                              {...props}
                              data={
                                data.share.version.document.artboards.entries
                              }
                            />
                          )}
                        />
                      </>
                    );
                  }

                  return <p>No Data Available</p>;
                }}
              </Query>
            </APIContext.Provider>
          </div>
        </Router>
      </ApolloProvider>
    );
  };
}

export default App;
