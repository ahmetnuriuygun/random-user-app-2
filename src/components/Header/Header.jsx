import React from 'react'
import "./Header.css"
import cwSvg from "../../assets/cw.svg"

const Header = () => {
  return (
    <div>
        <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
    </div>
  )
}

export default Header