import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./Documents.css";

class Document extends React.Component {
  getArtBoards = (artBoards) => {
    return artBoards.map((item, index) => {
      return (
        <div
          key={index}
          className="col-3 align-center"
          style={{ padding: "10px 0px 10px 0px" }}
        >
          {item.files &&
          item.files[0] &&
          item.files[0].thumbnails &&
          item.files[0].thumbnails[0] ? (
            <img
              className="card-img-top"
              src={item.files[0].thumbnails[0].url}
              alt="Card image cap"
            />
          ) : (
            ""
          )}
          <p>{item.name}</p>
        </div>
      );
    });
  };

  render = () => {
    return (
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
              <div className="container">
                <div className="row mt">
                  {this.getArtBoards(
                    data.share.version.document.artboards.entries
                  )}
                </div>
              </div>
            );
          }

          return <p>No Data Available</p>;
        }}
      </Query>
    );
  };
}

export default Document;
