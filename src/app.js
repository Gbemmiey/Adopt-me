import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "hawaii",
    }),
    React.createElement(Pet, {
      name: "Suse",
      animal: "cat",
      breed: "local",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "parrot",
      breed: "unknown",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
