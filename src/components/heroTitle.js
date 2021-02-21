import React from 'react'
import TitleLetter from './heroTitleLetter'

const title = ["Designer", "/", "Developer", "/", "Musician"]
const colors = ['#21C2FC', '#000', '#F79ECB', '#000', '#FFDB6A']

const HeroTitle = () => {
  let i = 0;

  const titleSections = title.map((section) => {

    const titleLetters = [...section].map((letter) => {
      let shadowColor = colors[i]

      return <TitleLetter value={letter} color={shadowColor}></TitleLetter>
    });

    let template = <div className="column is-hidden-mobile">
                      <div className="title">/</div>
                    </div>
    if (i % 2 === 0 ) {
      template = <div className="column">
                    <div className="title">{titleLetters}</div>
                  </div>
    }

    i++

    return template
  });

  return (
    <div className="columns is-centered">
      {titleSections}
    </div>
  )
}

export default HeroTitle