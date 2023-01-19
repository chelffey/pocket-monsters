import { useEffect, useState } from "react";
import "./pages.css";
import PokemonBox from "../components/PokemonBox";
import axios from "axios";

function Home() {
  const [inputPokemon, setInputPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [searchStatus, setsearchStatus] = useState(null);

  useEffect(() => {
    // runs once at start and every time searchTerm is updated
    async function requestPokemonData() {
      setsearchStatus();
      if (searchTerm) {
        try {
          setsearchStatus("Searching databases far and wide...");
          let res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
          );
          setPokemonInfo(res.data);
          setsearchStatus("");
          console.log(res.data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setsearchStatus(
              '"' +
                searchTerm +
                '" was not found in the Pokedex. Try a different spelling.'
            );
          }
        }
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
        <h3>Search</h3>
        <p>You can search by name or pokedex id.</p>
        <input
          type="text"
          onChange={getInputPokemon}
          placeholder="Search by name or Pokedex ID..."
        />
        <button
          onClick={() => {
            setSearchTerm(inputPokemon);
          }}
        >
          Search
        </button>
        <p>{searchStatus}</p>
      </div>
      <div className="section">
        {pokemonInfo && <PokemonBox info={pokemonInfo} />}
      </div>
    </div>
  );
}

export default Home;
