import React, { useRef, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import HeroAnimation from './HeroAnimation'
import HeroPhrases from './HeroPhrases'
import 'animate.css'

const containerVariants = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};
  
  const letterVariants = {
	initial: { y: -200, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 0.3,
		},
	},
};

export default function Hero() {
	const heroRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: heroRef })
	const heroHeight = useTransform(
		scrollYProgress, 
		[0, 0.2], 
		['100vh', '2vh'])
	const heroBorder = useTransform(
		scrollYProgress,
		[0, 0.2],
		['0.2em solid, #00c5c500', '0.2em solid #00c5c5']
	)
	const circleBottom = useTransform(
		scrollYProgress,
		[0, 0.2],
		['29em', '-48em']
	)
	const textPaddingTop = useTransform(
		scrollYProgress,
		[0, 0.2],
		['14em', '-4em']
	)
	const textOpacity = useTransform(
		scrollYProgress, 
		[0, 0.15], 
		[0.75, 0]
	)

	const HeroTitleAnimation = ({ title }) => {
		return (
			<HeroTitle
				variants={containerVariants}
				initial='initial'
				animate='animate'
			>
				{title.split('').map((letter, index) => (
					<motion.span
						key={index}
						variants={letterVariants}
					>
						{letter === " " ? "\u00A0" : letter}
					</motion.span>
				))}
			</HeroTitle>
		);
	};

	return (
		<HeroSection
			ref={heroRef}
			style={{ height: heroHeight, borderBottom: heroBorder }}
		>
			<HeroContent>
				<HeroAnimation circleBottom={circleBottom} />
				<HeroTitleContainer
					style={{ paddingTop: textPaddingTop, opacity: textOpacity }}
				>
					{/* <HeroTitle>Ben Hensor</HeroTitle> */}
					<HeroTitleAnimation title='Ben Hensor'/>
					<HeroPhrases />
				</HeroTitleContainer>
			</HeroContent>
		</HeroSection>
	)
}

const HeroSection = styled(motion.section)`
	width: 100vw;
	margin: 4em auto 0 auto;
	background-color: #000;
	transition: background-color 0.5s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	overflow-x: hidden;
	position: fixed;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	mix-blend-mode: screen;
`

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50% ;
  }
`

const HeroTitle = styled(motion.h1)`
	font-family: 'Centra', sans-serif;
	font-size: 7em;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1rem;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 200% 200%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	color: #ffffff75;
	mix-blend-mode: overlay;
	
	animation: ${gradientAnimation} 20s ease infinite;
	-webkit-animation: ${gradientAnimation} 20s ease infinite;
	white-space: nowrap;
	& > span {
		display: inline-block; // Important for individual letter animation
		-webkit-background-clip: text;
		background-clip: text;
	}
	@media screen and (max-width: 999px) {
		font-size: 6em;
	}
	@media screen and (max-width: 768px) {
		font-size: 4em;
	}
	@media screen and (max-width: 546px) {
		font-size: 2.2em;
	}
`

