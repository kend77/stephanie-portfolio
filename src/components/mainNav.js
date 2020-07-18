import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect } from "react"

import AboutMeNavItems from "../components/aboutmeNavItems"
import Hamburger from "./hamburger"
import { useWindowInnerWidth } from "../utils/useWindowInnerWidth"

import "./mainNav.css"

function MainNav() {
  const [showMenu, setShowMenu] = useState(true)
  const [showButton, setShowButton] = useState(false)
  const width = useWindowInnerWidth()

  useEffect(() => {
    if (width < 601) {
      setShowMenu(false)
      setShowButton(true)
    } else {
      setShowMenu(true)
      setShowButton(false)
    }
  }, width)

  const data = useStaticQuery(graphql`
    query NavItemsQuery {
      allDataJson(filter: { data: { elemMatch: { slug: { eq: "ad" } } } }) {
        nodes {
          data {
            name
            slug
          }
        }
      }
    }
  `)
  const navItems = data.allDataJson.nodes[0].data
  return (
    <>
      {showButton && <Hamburger onClick={() => setShowMenu(l => !l)} />}
      {showMenu && (
        <nav className="mainNav">
          <ul className="mainNav__items">
            {navItems.map(proj => (
              <Link
                className="mainNav__link"
                key={proj.name}
                to={`/${proj.slug}`}
              >
                <li>{proj.name}</li>
              </Link>
            ))}
            {showButton && <AboutMeNavItems className="mainNav__link" />}
          </ul>
        </nav>
      )}
    </>
  )
}

export default MainNav
