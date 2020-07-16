import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      Page for {pageContext.name}
    </Layout>
  )
}

export default ImagePage
