export default function PokemonBox(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.type}</p>
    </div>
  );
}
