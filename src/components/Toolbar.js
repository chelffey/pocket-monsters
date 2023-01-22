import "./Toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <img src={require("../images/chikorita-192.png")} alt="logo" />
      <div className="handle">
        <h2>Pocket Monsters</h2>
        <p>A pocket full of Pokemon...</p>
      </div>
    </div>
  );
}
