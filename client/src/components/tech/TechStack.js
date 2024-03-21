import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import TechHeading from './TechHeading'
import TechCategories from './TechCategories'


export default function TechStack() {
	const techRef = useRef(null)
	const contentRef = useRef(null)

	const { scrollYProgress } = useScroll({ domTarget: techRef })

	const top = useTransform(
		scrollYProgress,
		[0.2, 0.4, 0.5, 0.6],
		['-200%', '0%', '0%', '200%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.35, 0.4, 0.5, 0.55],
		['0', '1', '1', '0']
	)

	return (
		<TechStackContainer
			id="tech"
			ref={techRef}
			style={{ 
				top: top,
				opacity: opacity
			}}
		>
			<TechContent ref={contentRef}>
				<TechHeading scrollYProgress={scrollYProgress} />
				<TechCategories scrollYProgress={scrollYProgress} />
			</TechContent>
		</TechStackContainer>
	)
}

const TechStackContainer = styled(motion.div)`
	position: fixed;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 1px solid red;
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
	padding-top: 9.6rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`
