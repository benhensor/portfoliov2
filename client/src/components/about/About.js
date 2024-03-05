import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import mugshot from '../../assets/img/profile.png'
import { aboutInfo } from '../../data'

export default function About() {
	const aboutRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: aboutRef })

	const display = useTransform(
		scrollYProgress,
		[0, 0.3, 0.4, 0.5, 0.6],
		['none', 'block', 'block', 'block', 'none']
	)
	const top = useTransform(
		scrollYProgress,
		[0.3, 0.4, 0.4, 0.5, 0.6],
		['100%', '0%', '0%', '0%', '100%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.3, 0.4, 0.5, 0.6],
		['0', '1', '1', '0']
	)

	return (
		<AboutSection
			id="about"
			ref={aboutRef}
			style={{ display: display, top: top, opacity: opacity }}
		>
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
	justify-content: center;
	position: relative;
	padding: 0;
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

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
	padding: 0 2rem 0 3.2rem;
	h2 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	p {
		margin-bottom: 1rem;
	}
	@media screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
		width: 60%;
		padding: 0;
	}
`

const ImageContainer = styled.div`
	z-index: -1;
	min-width: 25em;
	height: 25em;
	border: 2px solid var(--orange);
	border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
	background: #111;
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
		scale: 0.8;
	}
	@media screen and (max-width: 546px) {
		scale: 0.6;
	}
`

const Image = styled.img`
	width: 18em;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
`