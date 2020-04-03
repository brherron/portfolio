import React, { Component } from "react"
import '../styles/styles.scss'

//Components
import Header from '../components/header.js'
import Hero from '../components/hero.js'

class SecondPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    )
  }
} 

export default SecondPage
