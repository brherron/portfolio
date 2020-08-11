import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import withSplashScreen from '../components/withSplashScreen.js'
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import Services from '../components/services.js'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Hero />
        <Services /> */}
        <div className='construction'><h1>Under Construction</h1></div>
      </div>
    )
  }
} 

// export default withSplashScreen(IndexPage)
export default IndexPage