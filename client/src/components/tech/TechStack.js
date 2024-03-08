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
		[0.2, 0.3, 0.65, 0.75],
		['-200%', '0%', '0%', '200%']
	)

	return (
		<TechStackContainer
			id="tech"
			ref={techRef}
			style={{ 
				top: top,
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
	padding-top: 9.6rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`
