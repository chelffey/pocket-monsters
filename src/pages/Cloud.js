import "./pages.css";
import "./styles/Cloud.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cloud() {
  const [allPokemon, setAllPokemon] = useState(null);
  const colorBank = {
    electric: { bg: "gold", text: "black" },
    grass: { bg: "limegreen", text: "white" },
    normal: { bg: "grey", text: "white" },
    fire: { bg: "orangered", text: "white" },
    water: { bg: "blue", text: "white" },
    flying: { bg: "skyblue", text: "black" },
    fighting: { bg: "brown", text: "white" },
    poison: { bg: "purple", text: "white" },
    ground: { bg: "sienna", text: "white" },
    rock: { bg: "tan", text: "white" },
    psychic: { bg: "violet", text: "white" },
    ice: { bg: "aquamarine", text: "black" },
    bug: { bg: "olivedrab", text: "white" },
    ghost: { bg: "darkblue", text: "white" },
    steel: { bg: "darkslategrey", text: "white" },
    dragon: { bg: "slateblue", text: "white" },
    dark: { bg: "#331800", text: "white" },
    fairy: { bg: "pink", text: "black" },
  };

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

  function handleMouseHover(e) {
    console.log(e.target.id);
    const id = e.target.id;
    async function requestPokemonDetails() {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data.types[0].type.name);
      } catch (e) {
        console.log("getting pokemon failed", e);
      }
    }
    requestPokemonDetails();
    e.target.style.backgroundColor = colorBank.electric;
    e.target.style.borderColor = colorBank.default;
  }

  return (
    <div className="pageContainer">
      <h1>Pokemon Cloud</h1>
      <p>Explore Pokemon by name and type!</p>

      <h3>Types</h3>
      <p className="cloud">
        {Object.keys(colorBank).map((type) => {
          return (
            <span
              className="cloudWord"
              style={{
                backgroundColor: colorBank[type]["bg"],
                borderColor: colorBank[type]["bg"],
                color: colorBank[type]["text"],
              }}
            >
              {type}
            </span>
          );
        })}
      </p>

      <h3>Available Pokemon</h3>
      <p className="cloud">
        {allPokemon
          ? allPokemon.map((pokemon) => {
              return (
                <span
                  id={pokemon.name}
                  className="cloudWord"
                  onMouseEnter={handleMouseHover}
                >
                  {pokemon.name}{" "}
                </span>
              );
            })
          : "Loading Pokemon..."}
      </p>
    </div>
  );
}
