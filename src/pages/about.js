import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import "./about.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  const {
    aboutMeBlurb,
    aboutMeData,
    aboutMeImage,
    linkedInIcon,
    mailIcon,
    resumeData,
  } = useStaticQuery(graphql`
    query AboutMeData {
      aboutMeBlurb: markdownRemark(frontmatter: { title: { eq: "About Me" } }) {
        html
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
      aboutMeImage: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      resumeData: file(relativePath: { eq: "resume.pdf" }) {
        publicURL
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
            <AboutMeLink href={aboutMeData.aboutme.networks.linkedin}>
              <Image fixed={linkedInIcon.childImageSharp.fixed} />
            </AboutMeLink>
            <AboutMeLink href={`mailto:${aboutMeData.aboutme.networks.mail}`}>
              <Image fixed={mailIcon.childImageSharp.fixed} />
            </AboutMeLink>
            <AboutMeLink href={resumeData.publicURL}>
              <Image fixed={mailIcon.childImageSharp.fixed} />
            </AboutMeLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

AboutMeLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element,
}

function AboutMeLink(props) {
  const { href, children, ...rest } = props
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="aboutme__link"
      {...rest}
    >
      {children}
    </a>
  )
}

export default About
