import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import TopHero from "./components/TopHero/TopHero";
import Brand from "./components/Brand/Brand";
import TrendingNfts from "./components/TrendingNfts/TrendingNfts";

function App() {
  return (
    <div className="max-width">
      <Header />
      <TopHero />
      <Brand />
      <TrendingNfts/>
  </div>

  );
}

export default App;
