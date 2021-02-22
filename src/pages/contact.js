import React from 'react'
import '../styles/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SiteLogo from '../images/main-logo.svg'
import { faUndoAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../images/avatar.svg'

const ContactPage = () => {
  
  return (
    <div className="contact">
      <nav className="navbar is-transparent is-planner animate-fadeDown">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={SiteLogo} alt="Beau Herron | Designer, Developer, and Musician" height="65" />
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item">
                <p className="buttons">
                  <button className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Reset" onClick="document.getElementById('form').reset()">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faUndoAlt} />
                    </span>
                  </button>
                  <button className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Close" href="/">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="is-form-page animate-fadeUp">
        <section className="is-white has-text-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <img src={Avatar} alt="" className="avatar"/>
                <h1 className="title is-spaced is-size-2-desktop is-size-3-tabled is-size-4-mobile">
                  Thanks for taking the time to reach out. How can I help you today?
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="is-white">
          <div className="container">
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control is-expanded">
                      <input type="text" name="name" className="input is-large" required/>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control is-expanded">
                      <input type="email" name="email" className="input is-large" required/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column">
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control is-expanded">
                      <textarea name="message" className="textarea is-large" rows="5" required/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column is-one-third">
                  <div className="field">
                    <div className="control">
                      <button className="button is-black is-outlined is-medium is-fullwidth is-rounded" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
  
export default ContactPage