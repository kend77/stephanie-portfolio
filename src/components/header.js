import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

import "./header.css"

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <Image />
    </div>
    <nav>
      <ul className="header__nav">
        <Link>
          <li className="header__link">Work</li>
        </Link>
        <Link>
          <li className="header__link">About</li>
        </Link>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
