import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Contact() {
	const contactRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: contactRef })

	const contactYPosition = useTransform(
		scrollYProgress,
		[0.6, 0.8, 0.9, 1],
		['200%', '0%', '0%', '0%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.7, 0.8, 0.9, 1],
		['0', '1', '1', '1']
	)

	return (
		<ContactSection
			ref={contactRef}
			style={{ top: contactYPosition, opacity: opacity }}
		>
			<ContactContent>
				<h1>Contact</h1>
			</ContactContent>
		</ContactSection>
	)
}

const ContactSection = styled(motion.section)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 1px solid red;
`

const ContactContent = styled.div`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 96px;
	border: 2px solid var(--accent-color);
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`
