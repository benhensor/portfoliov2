import React, { useRef }  from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import HeroAnimation from '../components/heroPage/HeroAnimation'

export default function Hero() {

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ domTarget: heroRef })
    const circleBottom = useTransform(
		scrollYProgress,
		[0, 0.2],
		['20em', '-48em']
	)

	return (
		<HeroContainer ref={heroRef}>
            <HeroContent>
                <HeroAnimation circleBottom={circleBottom}/>
            </HeroContent>
        </HeroContainer>
	)
}

const HeroContainer = styled(motion.section)`
  scroll-snap-align: start !important;
  outline: 2px solid red;
  width: 100vw;
  height: 200vh;
  margin: 4em auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	
`