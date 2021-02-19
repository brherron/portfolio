import React from 'react'
import DesignSVG from '../images/design-skull.svg'
import DevelopSVG from '../images/develop-skull.svg'
import AddtnlSVG from '../images/addtnl-skull.svg'

const Skills = () => {

  return (
    <div className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <figure className="image">
                  <img src={DesignSVG} alt="Design Skull" className="is-skill-icon"/>
                </figure>
                <h1 className="title is-size-4 is-spaced">Designer</h1>
                <p className='has-text-weight-light'>I love to keep things simple and clean and keep user interfaces intuitive.</p>
                <p className="list-title has-text-weight-bold">Categories:</p>
                <p className='has-text-weight-light'>Websites, UI/UX, Logos, Shirts</p>
                <p className="list-title has-text-weight-bold">Design Tools:</p>
                <ul>
                  <li>Adobe XD</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Stock</li>
                  <li>Pen Drawing</li>
                  <li>Google Fonts</li>
                </ul>
              </div>
              <div className="column">
              <figure className="image">
                  <img src={DevelopSVG} alt="Develop Skull" className="is-skill-icon"/>
                </figure>
                <h1 className="title is-size-4 is-spaced">Developer</h1>
                <p className='has-text-weight-light'>I enjoy bringing designs to life, even if the design was not created by myself.</p>
                <p className="list-title has-text-weight-bold">Languages:</p>
                <p className='has-text-weight-light'>HTML, SaSS, JS (TypeScript), Golang</p>
                <p className="list-title has-text-weight-bold">Dev Tools:</p>
                <ul>
                  <li>VS Code</li>
                  <li>Github</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Netlify</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="column">
              <figure className="image">
                  <img src={AddtnlSVG} alt="Additional Skull" className="is-skill-icon"/>
                </figure>
                <h1 className="title is-size-4 is-spaced">Additional</h1>
                <p className='has-text-weight-light'>I have experimented in many other fields that have proven helpful in many projects.</p>
                <p className="list-title has-text-weight-bold">Fields:</p>
                <p className='has-text-weight-light'>Backend Dev, Photo & Video Editing</p>
                <p className="list-title has-text-weight-bold">Tools:</p>
                <ul>
                  <li>MySQL</li>
                  <li>Twilio</li>
                  <li>DataGrip</li>
                  <li>AWS Infrastructure</li>
                  <li>Premiere Pro</li>
                  <li>Sony Alpha Cameras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Skills
