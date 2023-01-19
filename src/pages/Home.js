import { useEffect, useState } from "react";
import "./pages.css";
import PokemonBox from "../components/PokemonBox";
import axios from "axios";

function Home() {
  const [inputPokemon, setInputPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    // runs once at start and every time searchTerm is updated
    async function requestPokemonData() {
      if (searchTerm) {
        console.log(searchTerm);
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        );
        setPokemonInfo(res.data);
      }
    }
    requestPokemonData();
  }, [searchTerm]);

  function getInputPokemon(input) {
    setInputPokemon(input.target.value);
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
        {pokemonInfo && <PokemonBox name={searchTerm} info={pokemonInfo} />}
      </div>
    </div>
  );
}

export default Home;
