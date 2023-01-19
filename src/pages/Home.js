import React, { useState } from "react";
import "./pages.css";

export default class Home extends React.Component {
  render() {
    function getInputPokemon(input) {
      console.log(input.target.value);
    }

    return (
      <div className="pageContainer">
        <div className="section">
          <h1>Pocket Monsters</h1>
          <p>A pocket full of Pokemon...</p>
        </div>
        <div className="section">
          <h3>Search for a pokemon</h3>
          <input type="text" onChange={getInputPokemon} />
        </div>
      </div>
    );
  }
}
