import "./PokemonBox.css";

export default function PokemonBox(props) {
  return (
    <div className="box">
      <h1>{props.info.name}</h1>
      <img
        src={`${props.info.sprites.back_shiny}`}
        alt={props.name + " sprite"}
      />
      <img
        src={`${props.info.sprites.front_default}`}
        alt={props.name + " shiny sprite"}
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
    </div>
  );
}
