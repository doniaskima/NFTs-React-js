import React from "react";
import Slider from "react-slick/lib/slider";
import Button from "../../common/Button/Button";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard";
import "./TrendingNfts.css";

 
const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
      <div className="tn-title">
        <span className="heading-gradient">TRENDING NFTs</span>
      </div>
      <div className="tn-bg-blog"></div>
      <div className="nfts-blog"> 
        
        {TRENDING_NFTS.map((_nft) => (
          <TrendingCard nft={_nft} />
        ))}
       
      </div>
      <div className="tn-bg-blog"></div>
      <div className="tn-btn">
        <Button btnText="SEE MORE" type="SECONDARY" customClass="seemore-btn" />
      </div>
    </div>
  );
};

export default TrendingNfts;
