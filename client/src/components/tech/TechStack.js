import React, { useRef, useState, useEffect, useCallback } from 'react'
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

	const top = useTransform(
		scrollYProgress,
		[0, 0.2, 0.3, 0.4],
		['-200%', '0%', '0%', '100%']
	)

	const opacity = useTransform(
		scrollYProgress,
		[0.1, 0.2, 0.3, 0.4],
		['0', '1', '1', '0']
	)

	return (
		<TechSection
			id='tech'
			ref={techRef}
			style={{ top: top, opacity: opacity }}
		>
			<TechContent ref={contentRef}>
				<div>
					<h1>Tech Stack</h1>
				</div>
			</TechContent>
		</TechSection>
	)
}

const TechSection = styled(motion.section)`
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
	margin: 0 auto;
	padding-top: 96px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border: 2px solid var(--accent-color);
`