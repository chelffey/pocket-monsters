import "./Toolbar.css";
import { NavLink } from "react-router-dom";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <img src={require("../images/chikorita-192.png")} alt="logo" />
      <div className="handle">
        <h2>Pocket Monsters</h2>
        <p>A pocket full of Pokemon...</p>
      </div>
      <NavLink className="button" activeClassName="activeButton" to="/" exact>
        Search
      </NavLink>
      <NavLink
        className="button"
        activeClassName="activeButton"
        to="/cloud"
        exact
      >
        Cloud
      </NavLink>
      <NavLink
        className="button"
        activeClassName="activeButton"
        to="/party"
        exact
      >
        Party
      </NavLink>
    </div>
  );
}
