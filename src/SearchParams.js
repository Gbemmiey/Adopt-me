import { useState } from "react";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  //  The above is a hook
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
