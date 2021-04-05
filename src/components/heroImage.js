import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'


import BlackSkull from '../images/skull.svg'
import BlueSkull from '../images/blue-skull.svg'
import PinkSkull from '../images/pink-skull.svg'
import YellowSkull from '../images/yellow-skull.svg'

const ImageContainer = styled(animated.div)`
`;

const Skull = styled(animated.img)`
`;

const calc = (x, y) => [-(y- 150 - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 30, 1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*5)}px)`
const trans2 = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*3.5)}px)`
const trans3 = (x, y, s) => `perspective(1750px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*2)}px)`
const trans4 = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*1)}px)`

const HeroImage = () => {
  const [props, set] = useSpring(() => ({xys: [-10, 10, 1.1], config: {mass: 10, tension: 500, friction: 15} }))

  useEffect(() => void setTimeout(() => set({xys: [-5, 10, 1]}), 1), [])
  useEffect(() => void setTimeout(() => set({xys: [-5, 10, 1], config: {mass: 10, tension: 500, friction: 50} }), 3000), [])

  return (
    <ImageContainer className="hero-image-container" 
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}>
        <Skull className="hero-image" src={BlackSkull} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans), zIndex: 5}}/>
        <Skull className="hero-image" src={BlueSkull} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans2), zIndex: 3}}/>
        <Skull className="hero-image" src={PinkSkull} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans3), zIndex: 2}}/>
        <Skull className="hero-image" src={YellowSkull} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans4), zIndex: 1}}/>
    </ImageContainer>
  )
}


export default HeroImage