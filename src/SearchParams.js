import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "reptile", "dog", "rabbit"];
const BREEDS = [];

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}
          &breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  //  The above is a hook
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {BREEDS.map((allBreed) => {
              return (
                <option key={allBreed} value={allBreed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />;
      })}
    </div>
  );
};

export default SearchParams;
