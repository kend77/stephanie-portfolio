import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

AboutMeNavItems.propTypes = {
  className: PropTypes.string,
}

function AboutMeNavItems({ className }) {
  return (
    <>
      <Link to="/work" className={className} activeClassName="active">
        <li>Work</li>
      </Link>
      <Link to="/about" className={className} activeClassName="active">
        <li>About</li>
      </Link>
    </>
  )
}

export default AboutMeNavItems
