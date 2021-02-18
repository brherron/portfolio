import React, { useState } from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
