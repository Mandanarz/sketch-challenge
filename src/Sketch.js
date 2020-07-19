import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Sketch = () => {
    return (<Query query={gql`
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
    `} >
        {({loading, error, data}) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error</p>

            console.log(data)
            return <p>Working</p>
        }}
    </Query>)
}

export default Sketch