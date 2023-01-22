import "./pages.css";
import "./Party.css";
import { useState } from "react";

export default function Party() {
  const [party, setParty] = useState([null, null, null, null, null, null]);

  return (
    <div class="pageContainer">
      <h1>Party</h1>
      <p>Create your own Pokemon party!</p>
      <div>
        {party.map((pokemon) => {
          return <div class="pokemon">{pokemon ? pokemon : "empty"}</div>;
        })}
      </div>
    </div>
  );
}
