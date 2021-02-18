import React, { Component } from "react"
import '../styles/styles.scss'

//Import Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import About from '../components/about.js'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <About />
      </div>
    )
  }
} 

export default Home