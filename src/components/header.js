import React, { useState, useEffect } from "react"
import Image from "./logo"
import { Link } from "gatsby"
import AboutMeNavItems from "./aboutmeNavItems"
import { useWindowInnerWidth } from "../utils/useWindowInnerWidth"

import "./header.css"

function Header() {
  const [showAboutMe, setShowAboutMe] = useState(true)

  const width = useWindowInnerWidth()
  useEffect(() => {
    if (width < 600) {
      setShowAboutMe(false)
    } else {
      setShowAboutMe(true)
    }
  })
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <Image />
        </div>
      </Link>
      {showAboutMe && (
        <nav>
          <ul className="header__nav">
            <AboutMeNavItems className="header__link" />
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
