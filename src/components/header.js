import React from "react"
import SiteLogo from '../images/main-logo.svg'

function Header() {
  
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={SiteLogo} alt="Beau Herron | Designer, Developer, and Musician" height="65" />
          </a>
        </div>
        <div className="contact-button">
          <a href="/contact" className="button is-black is-outlined is-rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header
