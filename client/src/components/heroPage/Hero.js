import React, { useRef } from 'react'
import styled from 'styled-components'
import HeroAnimation from './HeroAnimation'
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
				<HeroAnimation />
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
	
`

const HeroTitleContainer = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	mix-blend-mode: screen;
	opacity: ${({ $scrolled }) => $scrolled ? 0 : 1};
	transition: all 0.1s ease-in-out;
`