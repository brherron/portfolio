import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      blueShades: file(relativePath: { eq: "blue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redEarrings: file(relativePath: { eq: "red.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yellowFence: file(relativePath: { eq: "yellow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.redEarrings.childImageSharp.fluid} />
          </div>
          <div className="main-text">
            Oladimeji Odunsi
          </div>
          <div className="main-image">
            <Img fluid={data.blueShades.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.yellowFence.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero
