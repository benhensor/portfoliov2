import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import mugshot from '../../assets/img/profile.png'
import { aboutInfo } from '../../data'

export default function About() {
	const aboutRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: aboutRef })

	const top = useTransform(
		scrollYProgress,
		[0, 0.2, 0.3, 0.4],
		['-100%', '0%', '0%', '100%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.15, 0.2, 0.35, 0.4],
		['0', '1', '1', '0']
	)

	const aboutBGYPosition = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4],
		['100%', '25%', '0%']
	)

	const aboutBGOpacity = useTransform(
		scrollYProgress,
		[0, 0.15],
		['0', '1']
	)

	const imgDisplay = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.41],
		['none', 'block', 'block', 'none']
	)

	const imgOpacity = useTransform(
		scrollYProgress,
		[0.2, 0.25, 0.35, 0.4],
		['0', '1', '1', '0']
	)

	return (
		<AboutSection
			id="about"
			ref={aboutRef}
			style={{ 
				top: top,
				opacity: opacity 
			}}
		>
			<AboutBackground 
				style={{ 
					top: aboutBGYPosition,
					opacity: aboutBGOpacity
				}}
			>
				ABOUT
			</AboutBackground>
			<AboutContent>
				<AboutInfo>
					<TextContainer>
						<h2>{aboutInfo.heading}</h2>
						<h3>{aboutInfo.subHeading}</h3>
						{aboutInfo.sentences.map((sentence) => (
							<p key={sentence.key}>
								{sentence.text}
							</p>
						))}
					</TextContainer>
					<ImageContainer
						style={{ 
							display: imgDisplay,
							opacity: imgOpacity
						}}
					>
						<div></div>
						<Image src={mugshot} alt="Ben Hensor" />
					</ImageContainer>
				</AboutInfo>
			</AboutContent>
		</AboutSection>
	)
}

const AboutSection = styled(motion.section)`
	position: fixed;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 1px solid red;
`

const AboutBackground = styled(motion.div)`
	position: fixed;
	left: 20%;
	font-size: 10em;
	font-weight: 900;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		font-size: 8em;
		left: 50%;
		transform: translateX(-50%);
	}
	@media screen and (max-width: 546px) {
		font-size: 6em;
	}
`


const AboutContent = styled(motion.div)`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	position: relative;
	padding-top: 9.6rem;
	mix-blend-mode: add;
`

const AboutInfo = styled.div`
	position: absolute;
	top: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
		flex-direction: column-reverse;
		top: 10%;
	}
	@media screen and (max-width: 546px) {
		top: 5%;
	}
`

const TextContainer = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
	padding: 0 2rem;
	h2 {
		font-family: var(--font-poppins);
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		margin-bottom: 0.5rem;
		color: var(--orange);
	}
	h3 {
		font-family: var(--font-poppins);
		font-size: clamp(1.6rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
		color: var(--ltOrange);
	}
	p {
		font-family: var(--font-poppins);
		font-size: clamp(1rem, 3vw, 1.6rem);
		margin-bottom: 1.6rem;
		color: var(--text-color-md);
	}
	@media screen and (max-width: 768px) {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		align-items: center;
		text-align: justify;
		padding: 0 5rem;
	}
	@media screen and (max-width: 546px) {
		padding: 0 3rem;
	}
`

const ImageContainer = styled(motion.div)`
	position: fixed;
	top: 20%;
	right: 15%;
	z-index: -1;
	min-width: 35rem;
	height: 35rem;
	border: 2px solid var(--orange);
	border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
	background: #000;
	animation: morph 10s linear infinite alternate;
	@keyframes morph {
		0% {
			border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
		}
		100% {
			border-radius: 40% 60%;
		}
	}

	@media screen and (max-width: 768px) {
		top: 15%;
		right: 50%;
		transform: translateX(50%);
		min-width: 23rem;
		height: 23rem;

	}
	@media screen and (max-width: 546px) {
		top: 10%;
		min-width: 15rem;
		height: 15rem;
		margin-top: 5rem;
		margin-bottom: 2rem;
	}
`

const Image = styled.img`
	width: 25rem;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
	@media screen and (max-width: 768px) {
		top: -2.5em;
		left: 2.5em;
		width: 15rem;
	}
	@media screen and (max-width: 546px) {
		top: -2rem;
		left: 2rem;
		width: 10rem;
	}
`