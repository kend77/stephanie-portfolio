import React from "react"
import Image from "../components/image"
import { Link } from "gatsby"

import "./header.css"

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <Image />
        </div>
      </Link>
      <nav>
        <ul className="header__nav">
          <Link to="/work">
            <li className="header__link">Work</li>
          </Link>
          <Link to="/about">
            <li className="header__link">About</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
