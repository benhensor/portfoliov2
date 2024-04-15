import React, { useRef } from 'react'
import styled from 'styled-components'
// import HeroAnimation from './HeroAnimation'
import HeroGradientAnimation from './HeroGradientAnimation'
import HeroTitleAnimation from './HeroTitleAnimation'
import HeroPhrases from './HeroPhrases'
import HeroArrow from './HeroArrow'


export default function Hero({ scrolled }) {
	const heroRef = useRef(null)

	return (
		<HeroSection
			ref={heroRef}
			$scrolled={scrolled}
		>
			<HeroContent>
				{/* <HeroAnimation /> */}
				<HeroGradientAnimation />
				<HeroTitleContainer $scrolled={scrolled}>
					<HeroTitleAnimation title='Ben Hensor'/>
					<HeroPhrases />
					<HeroArrow />
				</HeroTitleContainer>
				
			</HeroContent>
		</HeroSection>
	)
}

const HeroSection = styled.div`
	position: fixed;
	top: 4em;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: ${({ $scrolled }) => $scrolled ? '2em' : '100%'};
	border-bottom: ${({ $scrolled }) => $scrolled ? '0.2em solid var(--blue)' : 'none'};
	min-height: 0;
	background-color: #000;
	transition: all 0.5s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	/* overflow: hidden; */
	z-index: 10;
`

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	overflow: hidden;
	
`

const HeroTitleContainer = styled.div`
	position: absolute;
	top: 30%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	mix-blend-mode: screen;
	opacity: ${({ $scrolled }) => $scrolled ? 0 : 0.75};
	transition: all 0.1s ease-in-out;
`