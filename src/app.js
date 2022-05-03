import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1> Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="hawaii" />
      <Pet name="Suse" animal="cat" breed="mix" />
      <Pet name="Pepper" animal="bird" breed="local" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
