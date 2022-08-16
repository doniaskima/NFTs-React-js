import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import TopHero from "./components/TopHero/TopHero";

function App() {
  return (
    <div className="max-width">
      <Header />
      <TopHero/>
  </div>

  );
}

export default App;
