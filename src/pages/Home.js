import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Pocket Monsters</h1>
        <p>A pocket full of Pokemon...</p>
        <h3>Search for a pokemon</h3>
        <input
          type="text"
          name="Pokemon"
          value={this.state.searchPokemon}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
