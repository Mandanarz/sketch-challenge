import React from "react";
import { Link } from "react-router-dom";
import "./Documents.css";
import { APIContext } from "../../contexts/ApiContext";

class Document extends React.Component {
  getUrlFriendlyName = (name) => {
    return name.replace(/\s+/g, "-");
  };

  getArtBoards = (artBoards) => {
    return artBoards.map((item, index) => {
      const linkName =
        item && item.name ? this.getUrlFriendlyName(item.name) : "";
      return (
        <Link
          to={`/artboards/${linkName}`}
          key={index}
          className="col-md-3 col-xs-6 align-center"
          style={{ padding: "10px 0px 10px 0px" }}
        >
          {item.files &&
          item.files[0] &&
          item.files[0].thumbnails &&
          item.files[0].thumbnails[0] ? (
            <img
              className="thumbnail"
              src={item.files[0].thumbnails[0].url}
              alt={item.name}
            />
          ) : (
            ""
          )}
          <p>{item.name}</p>
        </Link>
      );
    });
  };

  render = () => {
    return (
      <div className="container">
        <div className="row mt">{this.getArtBoards(this.props.data)}</div>
      </div>
    );
  };
}

Document.contextType = APIContext;
export default Document;
