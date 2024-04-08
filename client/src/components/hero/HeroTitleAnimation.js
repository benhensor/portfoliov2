import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export default function HeroTitleAnimation() {
	const containerVariants = {
		animate: {
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.05,
			},
		},
	}

	const letterVariants = {
		initial: { y: 200, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'easeOut',
				duration: 0.3,
			},
		},
	}

	const title = 'Ben Hensor'
	return (
		<HeroTitle
			variants={containerVariants}
			initial="initial"
			animate="animate"
		>
			{title.split('').map((letter, index) => (
				<motion.span key={index} variants={letterVariants}>
					{letter === ' ' ? '\u00A0' : letter}
				</motion.span>
			))}
		</HeroTitle>
	)
}

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
	font-size: 10rem;
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
