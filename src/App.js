import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChuckNorrisJoke from "./components/ChuckNorrisJoke.js";

function App() {
  return (
    <section>
      <div>
        <h1 class="title">Chuck Norris Jokes</h1>
        <ChuckNorrisJoke />
        <p>Reload for another joke!</p>

        <div class="content" id="chuck-norris"></div>
      </div>
    </section>
  );
}

export default App;
