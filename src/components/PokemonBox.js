import "./PokemonBox.css";
import { useState } from "react";
import { colorBank } from "../resources/pokemonTypes";
import "../pages/styles/Cloud.css";

export default function PokemonBox(props) {
  // pokemon moves
  const [showMoves, setShowMoves] = useState(null);

  function handleShowMoves() {
    // show moveset
    console.log(props.info.moves);
    setShowMoves(showMoves ? false : true);
  }

  return (
    <div className="box">
      <div className="card">
        <div className="padding">
          <h1>{props.info.name}</h1>
          <img
            className="sprite"
            src={`${props.info.sprites.back_shiny}`}
            alt={props.info.name + " sprite"}
          />
          <img
            className="sprite"
            src={`${props.info.sprites.front_default}`}
            alt={props.info.name + " shiny sprite"}
          />

          <p>
            {props.info.types.map((a) => {
              return (
                <span
                  className="cloudWord"
                  style={{
                    backgroundColor: colorBank[a.type.name]["bg"],
                    borderColor: colorBank[a.type.name]["bg"],
                    color: colorBank[a.type.name]["text"],
                  }}
                >
                  {a.type.name}
                </span>
              );
            })}
          </p>
          <p>Abilities:</p>
          <ul>
            {props.info.abilities.map((a) => {
              return (
                <li>
                  {a.ability.name} {a.is_hidden && " (hidden)"}
                </li>
              );
            })}
          </ul>
          <p>height: {props.info.height} decimetres</p>
          <p>base experience: {props.info.base_experience} exp</p>
          <p>id: {props.info.id}</p>

          <button onClick={handleShowMoves}>
            {showMoves ? "Hide Moveset" : "Show Moveset"}
          </button>
        </div>
        {showMoves && (
          <div className="movesListGrid">
            {props.info.moves.map((move) => {
              return <div className="move">{move.move.name}</div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
