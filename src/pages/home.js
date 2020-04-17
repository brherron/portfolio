import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import Services from '../components/services.js'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Services />
        <Hero />
      </div>
    )
  }
} 

export default Home