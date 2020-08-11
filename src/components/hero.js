import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image';
import { useScroll } from '../aux/useScroll.js'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hl_project: file(relativePath: { eq: "hl_project.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { scrollX, scrollY, scrollDirection } = useScroll();

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-text">
            Minimal design,
            simple experience.
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <AniLink className="hero-button" cover direction="up" to="/projects" duration={0.8} bg="black">Browse Projects</AniLink>
          </div>
          <div className="hero-image">
            <div className="hl-project" style={{width: '5'+scrollY/150+'%'}}>
              <Img fluid={data.hl_project.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero
