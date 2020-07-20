import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./special-page.css"

SpecialPage.propTypes = {
  pageContext: {
    name: PropTypes.string,
    slug: PropTypes.string,
  },
}

function SpecialPage({ pageContext }) {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <div className="expose">
        <div className="image-container"></div>
        <div className="image-container"></div>
        <div className="image-container"></div>
      </div>
    </Layout>
  )
}

export default SpecialPage
