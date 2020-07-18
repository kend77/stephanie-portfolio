/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import MainNav from "./mainNav"
import "typeface-baskervville"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <MainNav />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
