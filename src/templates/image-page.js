import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./image-page.css"

ImagePage.propTypes = {
  pageContext: {
    name: PropTypes.string,
    slug: PropTypes.string,
  },
  data: PropTypes.object,
}

function ImagePage({ pageContext, data }) {
  const [currentItem, setCurrentItem] = useState(0)
  const images = data.allFile.nodes

  const goForward = () => {
    setCurrentItem(prev => {
      return (prev + 1) % images.length
    })
  }

  const goBack = () => {
    setCurrentItem(prev => {
      return (prev - 1 + images.length) % images.length
    })
  }

  return (
    <Layout>
      <SEO title={pageContext.name} />
      {images.length ? (
        <div className="container">
          <div className="carousel">
            <div className="carousel__button carousel__left">
              <div className="arrowLeft" onClick={goBack}>
                &lt;
              </div>
            </div>
            <div className="carousel__image">
              <Img
                fixed={images[currentItem].childImageSharp.fixed}
                style={{ display: "block" }}
              />
            </div>
            <div className="carousel__button carousel__right">
              <div className="arrowRight" onClick={goForward}>
                &gt;
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  query ImagePageImages($slug: String) {
    allFile(filter: { relativeDirectory: { eq: $slug } }) {
      nodes {
        id
        name
        childImageSharp {
          fixed(width: 700, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
export default ImagePage
