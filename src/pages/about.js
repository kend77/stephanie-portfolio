import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import "./about.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  const {
    linkedInIcon,
    mailIcon,
    aboutMeData,
    aboutMeImage,
    aboutMeBlurb,
  } = useStaticQuery(graphql`
    query AboutMeData {
      linkedInIcon: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mailIcon: file(relativePath: { eq: "mail.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aboutMeData: dataJson {
        aboutme {
          name
          networks {
            linkedin
            mail
          }
        }
      }
      aboutMeBlurb: markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
        html
      }
      aboutMeImage: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
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
          <div
            className="aboutme__blurb"
            dangerouslySetInnerHTML={{ __html: aboutMeBlurb.html }}
          />
          <div className="aboutme__contactme">
            <a
              href={aboutMeData.aboutme.networks.linkedin}
              className="aboutme__link"
            >
              <Image fixed={linkedInIcon.childImageSharp.fixed} />
            </a>
            <a
              href={`mailto:${aboutMeData.aboutme.networks.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="aboutme__link"
            >
              <Image fixed={mailIcon.childImageSharp.fixed} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
