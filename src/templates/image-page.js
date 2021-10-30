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

  const goForward = () => setCurrentItem(prev => (prev + 1) % images.length)

  const goBack = () =>
    setCurrentItem(prev => (prev - 1 + images.length) % images.length)

  return (
    <Layout>
      <SEO title={pageContext.name} />
      {images.length && (
        <div className="container">
          <div className="carousel">
            <div className="carousel__button carousel__left">
              <div className="arrow arrow__left" onClick={goBack}>
                &lt;
              </div>
            </div>
            {images.map((image, idx) => (
              <CarouselImage
                key={image.id}
                active={currentItem === idx}
                image={image}
              />
            ))}
            <div className="carousel__button carousel__right">
              <div className="arrow arrow__right" onClick={goForward}>
                &gt;
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

CarouselImage.propTypes = {
  active: PropTypes.bool,
  image: PropTypes.object.isRequired,
}

CarouselImage.defaultProps = {
  active: false,
}

function CarouselImage({ active, image }) {
  return (
    <div className={`carousel__image ${active ? "active" : ""}`}>
      <Img fluid={image.childImageSharp.fluid} />
    </div>
  )
}

export const query = graphql`
  query ImagePageImages($slug: String) {
    allFile(filter: { relativeDirectory: { eq: $slug } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default ImagePage
