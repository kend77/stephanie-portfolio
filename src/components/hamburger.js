import React, { useState } from "react"
import PropTypes from "prop-types"
import "./hamburger.css"

Hamburger.propTypes = {
  onClick: PropTypes.func,
}

function Hamburger({ onClick }) {
  const [activeClass, setActiveClass] = useState(false)
  const [defaultClass, setDefaultClass] = useState("no-animation")
  const lines = [1, 2, 3]

  return (
    <div className="frame" onClick={onClick}>
      <div className="center">
        <div
          className={`menu-icon ${activeClass ? "active" : ""}`}
          onClick={() => {
            setActiveClass(l => !l)
            setDefaultClass("")
          }}
        >
          {lines.map(line => (
            <div key={line} className={`line-${line} ${defaultClass}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hamburger
