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
		[0.2, 0.4, 0.5, 0.6],
		['200%', '0%', '0%', '-100%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.3, 0.4, 0.5, 0.55],
		['0', '1', '1', '0']
	)

	return (
		<AboutSection
			id="about"
			ref={aboutRef}
			style={{ top: top, opacity: opacity }}
		>
			<AboutContent>
				<AboutInfo>
					<TextContainer>
						<Heading>
							<h2>Hi, I'm Ben.</h2>
							<h3>Welcome to my portfolio!</h3>
						</Heading>
						<Paragraph>
							{aboutInfo.map((sentence) => (
								<Sentence key={sentence.key}>
									{sentence.text}
								</Sentence>
							))}
						</Paragraph>
					</TextContainer>
					<ImageContainer>
						<Image src={mugshot} alt="" />
					</ImageContainer>
				</AboutInfo>
			</AboutContent>
		</AboutSection>
	)
}

const AboutSection = styled(motion.section)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;
	display: flex;
	justify-content: center;
	align-items: center;
`

const AboutContent = styled.div`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 96px;
	
	@media screen and (max-width: 999px) {
		padding: 96px 2em 0 2em;
	}
	@media screen and (max-width: 768px) {
		padding: 96px 1em 0 1em;
	}
`

const AboutInfo = styled.div`
	position: relative;
	width: 100%;
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	z-index: 1;
	padding: 2.5em 0 3.5em 3.5em;
	width: 60%;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
`

const Heading = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	color: var(--highlight-color);
	h2 {
		font-size: 4rem;
	}
	h3 {
		font-size: 3rem;
	}
	@media screen and (max-width: 546px) {
		gap: 0.5em;
		margin-bottom: 1em;
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.4rem;
		}
	}
`

const Paragraph = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: justify;
	gap: 1rem;
	@media screen and (max-width: 768px) {
		gap: 0.7em;
	}
	@media screen and (max-width: 546px) {
		gap: 0.5em;
	}
`

const Sentence = styled.p`
	font-size: 1.6rem;
	color: var(--text-color-md);
	@media screen and (max-width: 768px) {
		font-size: 1.4rem;
		line-height: 1.5;
	}
`

const ImageContainer = styled.div`
	position: absolute;
	top: 3em;
	right: -3em;
	width: 25em;
	height: 25em;
	border: 2px solid var(--accent-color);
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
		right: 0em;
		width: 15em;
		height: 15em;
		border: 2px solid var(--text-color-dk);
	}
	@media screen and (max-width: 546px) {
		right: 0em;
		width: 10em;
		height: 10em;
		border: 2px solid var(--text-color-dk);
	}
`

const Image = styled.img`
	width: 18em;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
	@media screen and (max-width: 768px) {
		width: 10em;
		top: -1em;
		left: 1em;
		filter: grayscale(100%);
	}
	@media screen and (max-width: 546px) {
		width: 6em;
		top: -0.5em;
		left: 0.5em;
	}
`
