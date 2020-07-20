import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
});

export const getArtBoards = () => {
  return client.query({
    query: gql`
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
    `,
  });
};
