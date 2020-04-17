import React, { useState } from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { slide as Menu } from 'react-burger-menu'

import useDocumentScrollThrottled from '../aux/useDocumentScrollThrottled'

function Header() {
  const [shouldHaveBackground, setShouldHaveBackground] = useState(false);
  
  const MINIMUM_SCROLL = 10;

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setShouldHaveBackground(isMinimumScrolled);
    }, 0);
  });

  const headerStyle = shouldHaveBackground ? 'has-background' : '';
  
  return (
    <header>
      <div className="container">
        <div className={`inner-header ${headerStyle}`}>
          <div className="logo">
            <Link to="/home">BHD.</Link>
          </div>
          <div className="navigation">
            <nav>
              <AniLink cover direction="left" to="/home" duration={0.8} bg="black">Home</AniLink>
              <AniLink cover direction="up" to="/projects" duration={0.8} bg="black">Projects</AniLink>
              <AniLink cover direction="right" to="/page-2" duration={0.8} bg="black">About</AniLink>
              <AniLink cover direction="down" to="/contact" duration={0.8} bg="black">Contact</AniLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
