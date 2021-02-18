import React from 'react'
import HeroSVG from '../images/skull.svg'
import HeroImage from './heroImage'
import HeroTitle from './heroTitle'

const Hero = () => {

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <HeroTitle />
          <h3 className="subtitle">I design and code things with minimalism in mind.</h3>
          <HeroImage />
        </div>
      </div>
    </div>
  )
}


export default Hero
