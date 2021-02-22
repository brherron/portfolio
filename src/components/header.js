import React from "react"
import SiteLogo from '../images/main-logo.svg'
import { Link } from 'gatsby'

function Header() {
  
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={SiteLogo} alt="Beau Herron | Designer, Developer, and Musician" height="65" />
          </Link>
        </div>
        <div className="contact-button">
          <Link to="/contact" className="button is-black is-outlined is-rounded">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header
