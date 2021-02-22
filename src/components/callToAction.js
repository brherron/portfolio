import React from 'react'
import { Link } from 'gatsby'

const CTA = () => {
  
  return (
    <div className='section CTA has-text-centered'>
      <div className="container is-narrow">
        <div className="box">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced">Interested in collaborating?</h1>
              <h3 className="subtitle is-size-5-desktop">I’m always open to discussing design work and contract opportunities.</h3>
              <Link to="/contact" className="button is-white is-outlined is-rounded is-medium">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default CTA