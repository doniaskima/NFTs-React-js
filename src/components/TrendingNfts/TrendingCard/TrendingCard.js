import React from 'react';
import "./Trending.css";

const TrendingCard = (props) => {

    const { nft } = props;
    return (
        <div className="trending-card">
            <div className="wrapper">
                <div className="content">
                    <img src={nft.banner} alt={nft.username} className="banner" />
                    <div className="user-info">
                        <div className="user-info-left">
                            <img
                                src={nft.user_logo}
                                alt={nft.user_name}
                                className="tc-user-logo"
                            />

                            <div>
                                <div className="name-user">{nft.user_name}</div>
                                <div className="name-username">{nft.username}</div>
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
    )
}

export default TrendingCard