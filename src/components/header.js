import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Header() {
  
  return (
    <header>
      <div className="container">
        <div className='inner-header'>
          <div className="logo">
            <Link to="/">BHD.</Link>
          </div>
          <div className="navigation">
            <nav>
              <AniLink cover direction="down" to="/" duration={0.8} bg="black">Contact</AniLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
