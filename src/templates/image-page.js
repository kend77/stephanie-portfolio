import React from "react"
import Layout from "../components/layout"

function ImagePage({ pageContext }) {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      Page for {pageContext.name}
    </Layout>
  )
}

export default ImagePage
