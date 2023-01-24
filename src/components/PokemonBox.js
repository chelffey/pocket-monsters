import "./PokemonBox.css";
import { useState } from "react";

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
            src={`${props.info.sprites.back_shiny}`}
            alt={props.info.name + " sprite"}
          />
          <img
            src={`${props.info.sprites.front_default}`}
            alt={props.info.name + " shiny sprite"}
          />

          <p>
            type:
            {props.info.types.map((a) => {
              return <span> {a.type.name}</span>;
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
