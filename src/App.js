import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import TopHero from "./components/TopHero/TopHero";
import Brand from "./components/Brand/Brand";
import TrendingNfts from "./components/TrendingNfts/index.js";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <div className="max-width">
      <Header />
      <TopHero />
      <Brand />
      <TrendingNfts />
      <InfoSection />
      <Footer />
  </div>

  );
}

export default App;
