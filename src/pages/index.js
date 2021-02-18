import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        {/* <Services /> */}
      </div>
    )
  }
} 

export default IndexPage