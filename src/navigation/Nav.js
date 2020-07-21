import React from "react";
import { Link } from "react-router-dom";
import { getUrlFriendlyName } from "../utilities/urls";

class Nav extends React.Component {
  getLinks = () => {
    if (this.props.data && Array.isArray(this.props.data)) {
      return this.props.data.map((item, key) => {
        const linkName = item && item.name ? getUrlFriendlyName(item.name) : "";

        return (
          <li key={key} className="nav-item active">
            <Link className="nav-link" to={`/artboards/${linkName}`}>
              {item.name}
            </Link>
          </li>
        );
      });
    } else {
      return null;
    }
  };
  render = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Document
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">{this.getLinks()}</ul>
        </div>
      </nav>
    );
  };
}

export default Nav;
