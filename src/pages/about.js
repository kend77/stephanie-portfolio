import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import "./about.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  const {
    placeholderImage,
    aboutMeData,
    aboutMeImage,
  } = useStaticQuery(graphql`
    query AboutMeData {
      placeholderImage: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutMeData: dataJson {
        aboutme {
          name
          networks {
            linkedin
          }
        }
      }
      aboutMeImage: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="aboutme">
        <div className="aboutme__pic">
          <Image fluid={aboutMeImage.childImageSharp.fluid} />
        </div>
        <div className="aboutme__description">
          <div className="aboutme__header">About me</div>
          <div className="aboutme__blurb">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis lectus ac laoreet posuere. Fusce gravida finibus odio, ac
            finibus nibh volutpat et. Vivamus vel faucibus nunc. Nulla ac purus
            id mauris viverra cursus sed a erat. Integer ac maximus nunc.
            Maecenas nec ligula ac mauris volutpat bibendum. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin lobortis lectus ac laoreet posuere. Fusce gravida finibus
            odio, ac finibus nibh volutpat et. Vivamus vel faucibus nunc. Nulla
            ac purus id mauris viverra cursus sed a erat. Integer ac maximus
            nunc. Maecenas nec ligula ac mauris volutpat bibendum. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </div>
          <div className="aboutme__contactme">
            <a href={aboutMeData.aboutme.networks.linkedin}>
              <Image fluid={placeholderImage.childImageSharp.fluid} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
