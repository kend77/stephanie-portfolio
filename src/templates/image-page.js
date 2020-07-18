import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./image-page.css"

ImagePage.propTypes = {
  pageContext: {
    name: PropTypes.string,
    slug: PropTypes.string,
  },
}

function ImagePage({ pageContext }) {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <div className="carousel">
        <div className="image-container"></div>
        <div className="image-container"></div>
        <div className="image-container"></div>
      </div>
    </Layout>
  )
}

export default ImagePage
