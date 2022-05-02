const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
    React.createElement("hr", {}),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
