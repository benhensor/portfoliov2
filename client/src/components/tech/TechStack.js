import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import TechHeading from './TechHeading'
import TechCategories from './TechCategories'


export default function TechStack() {
	const techRef = useRef(null)
	const contentRef = useRef(null)

	const { scrollYProgress } = useScroll({ domTarget: techRef })

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.25, 0.3],
		['0', '1', '1', '0']
	)

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
				</TechHeading>
				<TechCategories scrollYProgress={scrollYProgress} />
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
	justify-content: center;
	align-items: center;
	position: relative;
`
