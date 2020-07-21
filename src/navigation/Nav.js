import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { getUrlFriendlyName } from "../utilities/urls";
import "./Nav.css";

class Nav extends React.Component {
  getParam = () => {
    return this.props.location.pathname.split("/").pop();
  };

  getLinks = (param) => {
    if (this.props.data && Array.isArray(this.props.data)) {
      return this.props.data.map((item, key) => {
        const linkName = item && item.name ? getUrlFriendlyName(item.name) : "";
        const className = param === linkName ? "selected" : "default";
        if (param && param !== "") {
          return (
            <li key={key} className={`nav-item active ${className}`}>
              <Link className="nav-link" to={`/artboards/${linkName}`}>
                {item.name}
              </Link>
            </li>
          );
        } else {
          return null;
        }
      });
    } else {
      return null;
    }
  };

  gotToHomePage = () => {
    console.log("return");
    this.props.history.push("/");
  };

  render = () => {
    const param = this.getParam();
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
          <ul className="navbar-nav mr-auto">{this.getLinks(param)}</ul>
          {param ? (
            <div className="return" onClick={this.gotToHomePage}></div>
          ) : (
            ""
          )}
        </div>
      </nav>
    );
  };
}

export default withRouter(Nav);
