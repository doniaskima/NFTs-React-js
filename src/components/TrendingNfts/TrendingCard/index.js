import React from "react";
import "./trendingCard.css";

const TrendingCard = (props) => {
  const { nft } = props;

  return (
    <div className="trending-card">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img src={nft.banner} alt={nft.username} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                src={nft.user_logo}
                alt={nft.user_name}
                className="tc-user-logo"
              />
              <div>
                <div className="tc-ui-user">{nft.user_name}</div>
                <div className="tc-ui-username">{nft.username}</div>
              </div>
            </div>
            <img
              src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"
              alt="ETH ON SOLANA"
              className="tc-solana-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
