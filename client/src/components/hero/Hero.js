import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import HeroAnimation from './HeroAnimation'
import HeroTitleAnimation from './HeroTitleAnimation'
import HeroPhrases from './HeroPhrases'
import HeroArrow from './HeroArrow'


export default function Hero() {
	const heroRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: heroRef })

	const startEnd = [0, 0.2]
	const heroHeight = useTransform(
		scrollYProgress, 
		startEnd, 
		['120em', '2em']
	)
	const heroBorder = useTransform(
		scrollYProgress,
		startEnd,
		['0.2em solid, #00c5c500', '0.2em solid #00c5c5']
	)
	const circleBottom = useTransform(
		scrollYProgress,
		startEnd,
		['40em', '-48em']
	)
	const textPaddingTop = useTransform(
		scrollYProgress,
		startEnd,
		['15%', '0%']
	)
	const textOpacity = useTransform(
		scrollYProgress, 
		startEnd, 
		[0.75, 0]
	)

	return (
		<HeroSection
			ref={heroRef}
			style={{ height: heroHeight, borderBottom: heroBorder }}
		>
			<HeroContent>
				<HeroAnimation circleBottom={circleBottom} />
				<HeroTitleContainer
					style={{ top: textPaddingTop, opacity: textOpacity }}
				>
					<HeroTitleAnimation title='Ben Hensor'/>
					<HeroPhrases />
					<HeroArrow />
				</HeroTitleContainer>
				
			</HeroContent>
		</HeroSection>
	)
}

const HeroSection = styled(motion.div)`
	position: fixed;
	width: 100vw;
	margin: 4em auto 0 auto;
	background-color: #000;
	transition: background-color 0.5s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	overflow: hidden;
	z-index: 10;
`

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	
`

const HeroTitleContainer = styled(motion.div)`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	mix-blend-mode: screen;
`