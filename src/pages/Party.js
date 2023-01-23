import "./pages.css";
import "./Party.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Party() {
  const [party, setParty] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

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
      <h1>Party</h1>
      <p>Create your own Pokemon party! (Currently under development)</p>

      <div className="partyContainer">
        {Object.keys(party).map((id) => {
          return party[id] ? (
            <div className="pokemon">
              <div id={id} className="pokemon-content">
                {party[id]}
              </div>
            </div>
          ) : (
            <div className="pokemon">
              <div id={id} className="pokemon-content">
                <p>#{id}</p>
                <p>empty</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
