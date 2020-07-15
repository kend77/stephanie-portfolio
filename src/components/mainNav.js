import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./mainNav.css"

const projects = [
  "F. Schumacher & Co.",
  "The Authentics",
  "Architectural Digest",
  "Self",
  "Downtown",
]

const MainNav = () => (
  <footer>
    <nav>
      <ul className="mainNav">
        {projects.map(proj => (
          <Link className="mainNav__link" key={proj} to="/page-2">
            <li>{proj}</li>
          </Link>
        ))}
      </ul>
    </nav>
  </footer>
)

export default MainNav
