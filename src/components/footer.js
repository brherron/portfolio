import React from 'react'

import Twitter from '../images/twitter-brands.svg'


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
            <a href="https://twitter.com/beauherron_dev" target="_blank" rel="noreferrer" className="button is-medium is-outlined is-rounded is-white">
              <img src={Twitter} alt=""/>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
  
export default Footer