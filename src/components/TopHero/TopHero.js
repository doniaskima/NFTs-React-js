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
          <div className="top-right">
              <div className="top-right-nfts">
                  <div className="top-right-nfts-item">
                      <img
                          src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif"
                          className="tf-r-diamond-img"
                          alt="diamond banner"
                      />
                  </div>
                  <div className="top-right-nfts-item">
                      <img
                          src="https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif"
                          className="tf-r-diamond-img"
                          alt="diamond banner"
                      />
                  </div>
                  <div className="top-right-nfts-item">
                      <img
                          src="https://openseauserdata.com/files/0895e82346f5c31462d41ab75d9b90b1.gif"
                          className="tf-r-diamond-img"
                          alt="diamond banner"
                      />
                  </div>
                  <div className="top-right-nfts-item">
                      <img
                          src="https://openseauserdata.com/files/24ed399dc3e5430b39a1db656f68c67c.gif"
                          className="tf-r-diamond-img"
                          alt="diamond banner"
                      />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TopLeft