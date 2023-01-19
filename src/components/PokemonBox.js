export default function PokemonBox(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={`${props.info.sprites.front_default}`} alt={props.name} />
      <p>height: {props.info.height} decimetres</p>
      <p>base experience: {props.info.base_experience} exp</p>
      <p>id: {props.info.id}</p>
    </div>
  );
}
