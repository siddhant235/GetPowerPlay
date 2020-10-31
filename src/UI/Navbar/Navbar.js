import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

class navbar extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand
            href="/"
            style={{ fontSize: "20px", marginLeft: "25rem" }}
          >
            FEEDS
          </Navbar.Brand>
          <Navbar.Brand
            href="/dashboard"
            style={{ fontSize: "20px", marginLeft: "25rem" }}
          >
            DASHBOARD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default navbar;
