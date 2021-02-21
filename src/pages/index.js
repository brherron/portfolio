import React, { Component } from "react"
import '../styles/styles.scss' 
import { graphql } from 'gatsby'

//Import Components
import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Tech from '../components/tech'

const IndexPage = ({data}) => {

  let projects = data.allMarkdownRemark.edges

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Tech />
    </div>
  )
}


export default IndexPage

export const query = graphql`
  query projectQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            project: title
            image
            link
            logo
            subtitle
            buttonString
          }
        }
      }
    }
  }
`;