import React, { Component } from "react"
import '../styles/styles.scss' 

//Import Components
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Tech from '../components/tech'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Tech />
      </div>
    )
  }
} 

export default IndexPage