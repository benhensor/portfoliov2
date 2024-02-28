import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from '../../data'

export default function TechStack() {
	const techRef = useRef(null)
	const contentRef = useRef(null)

	const { scrollYProgress } = useScroll({ domTarget: techRef })

	// const top = useTransform(
	// 	scrollYProgress,
	// 	[0, 0.2, 0.3, 0.4],
	// 	['-200%', '0%', '0%', '100%']
	// )

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.3],
		['0', '1', '0']
	)

	const TechHeading = ({ text, scrollYProgress }) => {
		const scale = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 1, 2])
		const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0])
		const blur = useTransform(
			scrollYProgress,
			[0, 0.1, 0.3],
			[
				'blur(50px)',
				'blur(0px',
				'blur(10px',
			]
		)
		const color = useTransform(
			scrollYProgress,
			[0, 0.1],
			['#141717', '#FFF']
		)
		const letterSpacing = useTransform(
			scrollYProgress,
			[0, 0.1, 0.3],
			['-64px', '16px', '64px']
		)
		return (
			<Heading
				style={{
					scale: scale,
					opacity: opacity,
					filter: blur,
					color: color,
					letterSpacing: letterSpacing,
				}}
			>
				{text}
			</Heading>
		)
	}

	const TechCategory = ({ title, skillSet, scrollYProgress }) => {
		const categoryOpacity = useTransform(
			scrollYProgress,
			[0.2, 0.25, 0.3],
			[0, 1, 0]
		)
		const categoryFilter = useTransform(
			scrollYProgress,
			[0.25, 0.3],
			['blur(0px)', 'blur(10px']
		)
		const cardOpacity = useTransform(
			scrollYProgress,
			[0.2, 0.25, 0.3],
			[0, 1, 0]
		)
		const cardX = useTransform(scrollYProgress, [0.2, 0.3], ['-100%', '0%'])

		return (
			<TechSection
				style={{ opacity: categoryOpacity, filter: categoryFilter }}
			>
				<h2>{title}</h2>
				{skillSet.map((skill, index) => (
					<TechCard
						key={index}
						style={{ opacity: cardOpacity, x: cardX }}
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: '0%' }}
						transition={{ duration: 0.5, delay: index * 0.05 }}
					>
						<img src={skill.icon} alt={skill.name} />
						<h3>{skill.name}</h3>
					</TechCard>
				))}
			</TechSection>
		)
	}

	return (
		<TechStackContainer
			id="tech"
			ref={techRef}
			style={{ opacity: opacity }}
		>
			<TechContent ref={contentRef}>
				<TechHeading
					text={'Tech Stack'}
					scrollYProgress={scrollYProgress}
				>
					Tech Stack
				</TechHeading>
				<TechCategory
					title={'Languages'}
					skillSet={languages}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'Frontend'}
					skillSet={frontend}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'Backend'}
					skillSet={backend}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'Testing'}
					skillSet={testing}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'DevOps'}
					skillSet={devops}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'Design'}
					skillSet={design}
					scrollYProgress={scrollYProgress}
				/>
				<TechCategory
					title={'Tools'}
					skillSet={tools}
					scrollYProgress={scrollYProgress}
				/>
			</TechContent>
		</TechStackContainer>
	)
}

const TechStackContainer = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`

const TechContent = styled.div`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	padding-top: 96px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`

const Heading = styled(motion.h1)`
	position: absolute;
	top: 25%;
	padding-left: 1.5rem;
	text-transform: uppercase;
	font-size: 12rem;
	color: var(--text-color);
	text-align: center;
	white-space: nowrap;
	font-family: 'Roboto', sans-serif;
	@media screen and (max-width: 999px) {
		font-size: 5rem;
	}
	@media screen and (max-width: 768px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 546px) {
		font-size: 2.5rem;
	}
`

const TechSection = styled(motion.section)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	position: relative;
	h2 {
		position: absolute;
		text-transform: uppercase;
		font-size: 5.5rem;
		color: var(--text-color);
		letter-spacing: 1rem;
		text-align: center;
	}
`

const TechCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 10rem;
	padding: 1rem;
	border-radius: 5px;
	background-color: #232a2f8b;
	border-top: 2px solid #2d363c;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	img {
		width: 3em;
		height: 3em;
	}
	h3 {
		color: var(--text-color);
		font-size: 1rem;
		white-space: nowrap;
	}
`
