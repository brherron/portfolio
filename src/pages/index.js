import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import withSplashScreen from '../components/withSplashScreen.js'
import Header from '../components/header.js'
import Hero from '../components/hero.js'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Hero />
      </div>
    )
  }
} 

export default withSplashScreen(IndexPage)