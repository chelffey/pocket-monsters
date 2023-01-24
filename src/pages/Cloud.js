import "./pages.css";
import "./styles/Cloud.css";
import { useEffect, useState, useRef } from "react";
import PokemonBox from "../components/PokemonBox";
import Modal from "../components/Modal";
import axios from "axios";

export default function Cloud() {
  const [allPokemon, setAllPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [featurePokemon, setFeaturePokemon] = useState(null);
  const [featureIsActive, setFeatureIsActive] = useState(false);
  const pokemonFetchedRef = useRef(false);
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
  const pokemonSuffixesToExclude = [
    "-mega",
    "-alola",
    "-galar",
    "-galar-standard",
    "-gmax",
    "-hisui",
    "-plumage",
    "-mode",
    "-build",
    "-totem",
    "-breed",
    "-crowned",
    "-mega-y",
    "mega-x",
    "-therian",
    "-starter",
    "-cap",
  ];

  useEffect(() => {
    async function requestPokemonList() {
      if (pokemonFetchedRef.current) return;
      pokemonFetchedRef.current = true;
      try {
        let res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=2000`
        );

        // filter out certain pokemon entries
        // alternatively, in future collate entries that start with the same thing
        const list = res.data.results;
        const newList = list.filter(
          (w) =>
            !pokemonSuffixesToExclude.some((e) => {
              return w.name.endsWith(e);
            })
        );
        setAllPokemon(newList);
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

        // store it in the dictionary
        const pokemonName = res.data.name;
        const newPokemon = { [pokemonName]: res.data };
        setPokemonDetails((pokemonDetails) => ({
          ...pokemonDetails,
          ...newPokemon,
        }));
      } catch (e) {
        console.log("getting pokemon failed", e);
      }
    }
    requestPokemonDetails();
  }

  function handlePokemonClick(e) {
    // show the pokemon on click
    const name = e.currentTarget.id;
    setFeaturePokemon(pokemonDetails[name]);
    console.log(featurePokemon);
    setFeatureIsActive(true);
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
      {featureIsActive && (
        <Modal>
          <PokemonBox info={featurePokemon} />
        </Modal>
      )}
      <p className="cloud">
        {allPokemon
          ? allPokemon.map((pokemon) => {
              return (
                <span
                  id={pokemon.name}
                  className="cloudWord"
                  onMouseEnter={handleMouseHover}
                  onClick={handlePokemonClick}
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
