import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby" 

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
          <a href="https://reactjs.org" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/react-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://angular.io" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/angular-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/gatsby-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/bootstrap-logo.svg" alt=""/></a>
        </div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column is-hidden-mobile"></div>
        <div className="column">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/html-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/css-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://www.javascript.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/js-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/sass-logo.svg" alt="" /></a>
        </div>
        <div className="column is-hidden-mobile"></div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column is-11">
          <div className="columns is-centered is-mobile">
            <div className="column">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/node-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/netlify-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://www.docker.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/docker-logo.svg" alt=""/></a>
            </div>
            <div className="column">
              <a href="https://golang.org" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/golang-logo.svg" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered is-mobile">
        <div className="column">
          <a href="https://git-scm.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/git-logo.svg" alt="" /></a>
        </div>
        <div className="column">
          <a href="https://www.mysql.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/mysql-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.twilio.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/twilio-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://aws.amazon.com" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/AWS-logo.svg" alt=""/></a>
        </div>
        <div className="column">
          <a href="https://www.asterisk.org" target="_blank" rel="noreferrer" aria-label="Tech Image"><Logo src="images/tech/asterisk-logo.svg" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default TechGrid