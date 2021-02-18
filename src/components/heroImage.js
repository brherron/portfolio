import React from 'react'
import HeroSVG from '../images/skull.svg'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

const ImageContainer = styled(animated.div)`
`;

const Skull = styled(animated.img)`
`;
const PinkSkull = styled(animated.img)`
  filter: invert(42%) sepia(93%) saturate(1000%) hue-rotate(150deg) brightness(300%) contrast(20%);
`;
const BlueSkull = styled(animated.img)`
  filter: invert(42%) sepia(93%) saturate(300%) hue-rotate(270deg) brightness(200%) contrast(50%);
`;
const YellowSkull = styled(animated.img)`
  filter: invert(42%) sepia(93%) saturate(275%) hue-rotate(10deg) brightness(300%) contrast(36%);
`;

const calc = (x, y) => [-(y- 150 - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 30, 1]
const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*5)}px)`
const trans2 = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*3.5)}px)`
const trans3 = (x, y, s) => `perspective(1750px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*2)}px)`
const trans4 = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${Math.abs(x*1)}px)`

const HeroImage = () => {
  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 500, friction: 50} }))

  return (
    <ImageContainer className="hero-image-container" 
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}>
        <Skull className="hero-image" src={HeroSVG} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans), zIndex: 5}}/>
        <PinkSkull className="hero-image" src={HeroSVG} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans2), zIndex: 3}}/>
        <BlueSkull className="hero-image" src={HeroSVG} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans3), zIndex: 2}}/>
        <YellowSkull className="hero-image" src={HeroSVG} alt='Skull Hero' style ={{ transform: props.xys.interpolate(trans4), zIndex: 1}}/>
    </ImageContainer>
  )
}


export default HeroImage