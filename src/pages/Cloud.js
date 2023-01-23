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
    rock: { bg: "tan", text: "black" },
    psychic: { bg: "violet", text: "white" },
    ice: { bg: "aquamarine", text: "black" },
    bug: { bg: "olivedrab", text: "white" },
    ghost: { bg: "darkblue", text: "white" },
    steel: { bg: "darkslategrey", text: "white" },
    dragon: { bg: "indigo", text: "white" },
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
    const id = e.target.id;
    async function requestPokemonDetails() {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // colour by types
        const typeA = res.data.types[0].type.name;
        const numTypes = res.data.types.length;
        e.target.style.backgroundColor = colorBank[typeA].bg;
        e.target.style.color = colorBank[typeA].text;
        if (numTypes === 1) {
          e.target.style.borderColor = colorBank[typeA].bg;
        } else if (numTypes === 2) {
          const typeB = res.data.types[1].type.name;
          e.target.style.borderColor = colorBank[typeB].bg;
        }
      } catch (e) {
        console.log("getting pokemon failed", e);
      }
    }
    requestPokemonDetails();
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