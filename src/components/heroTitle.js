import React from 'react'
import TitleLetter from './heroTitleLetter'

const title = "Designer / Developer / Musician"
const colors = ['#21C2FC', '#F79ECB', '#FFDB6A']

const HeroTitle = () => {
  let i = 0;

  const titleLetters = [...title].map((letter) => {
      let shadowColor = colors[i]

      if (letter === '/') {
        shadowColor = '#fff';
        i++
      }

      return <TitleLetter value={letter} color={shadowColor}></TitleLetter>
    }
  );

  return (
    <div className="title">
      {titleLetters}
    </div>
  )
}

export default HeroTitle