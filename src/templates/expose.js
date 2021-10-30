import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { keyBy } from "lodash"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./expose.css"

Expose.propTypes = {
  pageContext: {
    name: PropTypes.string,
    slug: PropTypes.string,
  },
  data: PropTypes.object,
}

function Expose({ pageContext, data }) {
  const keyedImages = keyBy(data.allFile.nodes, "name")
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <div className="expose">
        {pageContext.subProjects.map(subProject => (
          <ExposeTile
            key={subProject.name}
            project={subProject}
            thumbnail={keyedImages[subProject.slug]}
          />
        ))}
      </div>
    </Layout>
  )
}

ExposeTile.propTypes = {
  project: PropTypes.object,
  thumbnail: PropTypes.object,
}

function ExposeTile({ project, thumbnail }) {
  return (
    <Link to={project.slug}>
      <div className="image-container">
        <div className="image-overlay">{project.name}</div>
        <Img
          fluid={thumbnail.childImageSharp.fluid}
          className="expose__image"
        />
      </div>
    </Link>
  )
}

export const query = graphql`
  query ThumbnailQuery($thumbnailDir: String) {
    allFile(filter: { relativeDirectory: { eq: $thumbnailDir } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Expose
