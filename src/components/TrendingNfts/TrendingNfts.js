import React from 'react'
import Slider from "react-slick/lib/slider";
import Button from "../../common/Button/Button";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import "./TrendingNfts.css";

const TrendingNfts = () => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        arrows: false,
    }

    return (
        <div className="trending-nfts">
            <div className="trending-title">
                <span className="heading-gradient">TRENDING NFTs</span>
            </div>
        </div>
    )
}

export default TrendingNfts