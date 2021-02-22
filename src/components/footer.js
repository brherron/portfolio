import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
  
  return (
    <footer className='section footer is-small has-text-centered'>
      <div className="container is-narrow">
        <a href="/" className="logo">
          <img src="images/main-logo-white.svg" alt="Beau Herron | Designer, Developer, and Musician" height="48" />
        </a>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title is-size-4-touch">User interface is like a joke. If you have to explain it, it’s not that good.</h1>
          </div>
        </div>
        <div className="social-icons">
          <p className="field">
            <a href="https://twitter.com/beauherron_dev" target="_blank" rel="noreferrer" className="button is-medium">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://dribbble.com/beauherron_dev" target="_blank" rel="noreferrer" className="button is-medium">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="https://github.com/brherron" target="_blank" rel="noreferrer" className="button is-medium">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:hello@beauherrondev.com" target="_blank" rel="noreferrer" className="button is-medium">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </p>
        </div>
        <div className="copyright">
          Made by Yours Truly <span className="icon has-white-text" syle="vertical-align:middle;"><FontAwesomeIcon icon={faCopyright} /></span> 2021
        </div>
        <div className="made-by-bulma"></div>
      </div>
    </footer>
  )
}
  
export default Footer