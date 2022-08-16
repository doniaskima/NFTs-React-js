import React from 'react'
import Button from "../../common/Button/Button.js";
import "./TopHero.css"
const TopLeft = () => {
  return (
      <div className="topfold flex">
          <div className="top-left">
              <div className="topLeft-heading">
                  Discover collect , & sell <br />
                  <span className="heading-gradient">
                      Extraordinary {""}
                  </span>
                  Nfts
              </div>
              <div className="top-left-description">
                  the leading NFT Marketplace on EthereumHome to the next generation of
                  digital creators. Discover the best NFT collections.
              </div>
              <div className="top-left-btns">
                  <Button btnType="PRIMARY" btnText="Explore"></Button>
                  <Button btnType="SECONDARY" btnText="Create" customClass="topLeft-second-btn"></Button>
              </div>
              <div className="top-left-info">
                  <div className="top-left-InfoItem">
                      <div className="top-left-InfoItem-Count">300k+</div>
                      <div className="top-left-InfoItem-lebel">Collections</div>
                  </div>
                  <div className="top-left-InfoItem">
                      <div className="top-left-InfoItem-Count">10k+</div>
                      <div className="top-left-InfoItem-lebel">Artists</div>
                  </div>
                  <div className="top-left-InfoItem">
                      <div className="top-left-InfoItem-Count">700k+</div>
                      <div className="top-left-InfoItem-lebel">ommunities</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TopLeft