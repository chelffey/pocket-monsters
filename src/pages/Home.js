import { useState } from "react";
import "./pages.css";
import PokemonBox from "../components/PokemonBox";

function Home() {
  const [inputPokemon, setInputPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  function getInputPokemon(input) {
    setInputPokemon(input.target.value);
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
        <button
          onClick={() => {
            setSearchTerm(inputPokemon);
          }}
        >
          Search
        </button>
      </div>
      <div className="section">
        {searchTerm && <PokemonBox name={searchTerm} type="fire" />}
      </div>
    </div>
  );
}

export default Home;
