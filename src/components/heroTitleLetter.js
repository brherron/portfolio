import React, { useState } from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

const Letter = styled(animated.div)`
`;

const TitleLetter = (props) => {

  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 1 }, x: state ? 1 : 1.4, config: { tension: 300, mass: 3, friction: 10 } })

 return (
    <Letter className="title-letter"
            onMouseOver={() => toggle(!state)}
            onMouseLeave={() => toggle(!state)}
            style={{
              transform: x
                .interpolate(x => `scale(${x})`),
              textShadow: `2px 2px ${props.color}`
            }}>
      {props.value}
    </Letter>
 )
}

export default TitleLetter