import React from 'react'
import HeroImage from './heroImage'
import HeroTitle from './heroTitle'

const Hero = () => {

  return (
    <div className="hero-test">
      <div className="container">
        <div className="row">
          <div className="columns is-centered">
            <div className="column has-text-centered">
            <HeroTitle />
            <h3 className="subtitle">I design and code things with minimalism in mind.</h3>
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </div>
  )
}


export default Hero
