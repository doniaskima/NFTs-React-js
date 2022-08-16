import React from 'react'
import "./Brand.css";

const Brand = () => {
  return (
  
      <div className="brand">
          <img src={require("../../assets/brandLogos.png")} alt="brand logos" className="logos" />
      </div>
  )
}

export default Brand