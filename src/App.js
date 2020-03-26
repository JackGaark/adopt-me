import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// return React.createElement("div", { id: "something-important" }, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//     name: "Luna",
//     animal: "Dog",
//     breed: "havanese"
//   }),
//   React.createElement(Pet, {
//     name: "Pepper",
//     animal: "Bird",
//     breed: "Cockatiel"
//   }),
//   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
// ]);

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
