import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  filter: grayscale(1);
  opacity: 0.3;
  transition: 0.3s;

  :hover {
    filter: grayscale(0);
    opacity: 1;
    transition: 0.3s;
  }
`;

const TechGrid = () => {

  return (
    <div className="tech-grid">
      <div className="columns is-centered is-mobile">
        <div className="column">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer" aria-label="Tech Image" width="125.531" height="42.606"><Logo src="images/tech/react-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://angular.io" target="_blank" rel="noreferrer" aria-label="Tech Image" width="145.782" height="45.08"><Logo src="images/tech/angular-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="145.274" height="39.372"><Logo src="images/tech/gatsby-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="163.446" height="40.197"><Logo src="images/tech/bootstrap-logo.svg" alt=""/></a>
        </div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column is-hidden-mobile"></div>
        <div className="column">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" aria-label="Tech Image" width="71.014" height="100.218"><Logo src="images/tech/html-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" aria-label="Tech Image" width="71.713" height="100.552"><Logo src="images/tech/css-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://www.javascript.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="71.713" height="100.552"><Logo src="images/tech/js-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="119.01" height="89.251"><Logo src="images/tech/sass-logo.svg" alt="" /></a>
        </div>
        <div className="column is-hidden-mobile"></div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column is-11">
          <div className="columns is-centered is-mobile">
            <div className="column">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer" aria-label="Tech Image" width="81.66" height="50.013"><Logo src="images/tech/node-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="162.292" height="43.013"><Logo src="images/tech/netlify-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://www.docker.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="162.268" height="37.386"><Logo src="images/tech/docker-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://golang.org" target="_blank" rel="noreferrer" aria-label="Tech Image" width="98.537" height="35.454"><Logo src="images/tech/golang-logo.svg" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column">
          <a href="https://git-scm.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="91.281" height="38.126"><Logo src="images/tech/git-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://www.mysql.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="127.666" height="65.931"><Logo src="images/tech/mysql-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.twilio.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="145.997" height="43.931"><Logo src="images/tech/twilio-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://aws.amazon.com" target="_blank" rel="noreferrer" aria-label="Tech Image" width="97.942" height="58.569"><Logo src="images/tech/AWS-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.asterisk.org" target="_blank" rel="noreferrer" aria-label="Tech Image" width="117.988" height="65.489"><Logo src="images/tech/asterisk-logo.svg" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default TechGrid