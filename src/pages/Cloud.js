import "./pages.css";
import "./styles/Cloud.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cloud() {
  const [allPokemon, setAllPokemon] = useState(null);

  useEffect(() => {
    async function requestPokemonList() {
      try {
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=2000`
        );
        setAllPokemon(res.data.results);
        console.log(res.data.results);
      } catch (e) {
        console.log("Pokemon request failed:", e);
      }
    }
    requestPokemonList();
  }, []);

  return (
    <div className="pageContainer">
      <h1>Pokemon Cloud</h1>
      <p>Explore Pokemon by name and cluster!</p>

      <h3>Available Pokemon</h3>
      <p className="cloud">
        {allPokemon
          ? allPokemon.map((pokemon) => {
              return <span className="cloudWord">{pokemon.name} </span>;
            })
          : "Loading Pokemon..."}
      </p>
    </div>
  );
}
