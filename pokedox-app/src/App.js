import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar.jsx";
import PokeList from "./components/pokeList.jsx";
import "./styles/PokeList.css";
import Pokemon from "./pokemon.js";
import DetailView from "./components/detailView.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView pokemon={this.state.pokemon} />
        </div>
      </div>
    );
  }
}

export default App;
