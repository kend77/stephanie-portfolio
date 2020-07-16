import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./mainNav.css"

const MainNav = () => {
  const data = useStaticQuery(graphql`
    query NavItemsQuery {
      dataJson {
        data {
          name
          slug
        }
      }
    }
  `)
  const navItems = data.dataJson.data
  return (
    <footer>
      <nav>
        <ul className="mainNav">
          {navItems.map(proj => (
            <Link className="mainNav__link" key={proj.name} to={proj.slug}>
              <li>{proj.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default MainNav
