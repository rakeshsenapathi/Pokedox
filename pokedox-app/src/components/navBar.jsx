import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h3 className="my-0 mr-md-auto font-weight-normal">Pokedox App</h3>
      </div>
    );
  }
}

export default NavBar;
