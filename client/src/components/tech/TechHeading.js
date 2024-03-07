import React from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

export default function TechHeading({ scrollYProgress }) {
	const top = useTransform(
		scrollYProgress,
		[0, 0.2, 0.4, 0.5, 0.6],
		['225%', '25%', '25%', '25%', '-225%']
	)
    const opacity = useTransform(
        scrollYProgress,
        [0.3, 0.35, 0.4, 0.45],
        [0, 1, 1, 0]
    )
    const letterSpacing = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.6],
        ['0rem', '2rem', '15rem']
    )
    const blur = useTransform(
        scrollYProgress,
        [0.3, 0.35, 0.4, 0.45],
        ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)']
    )

	return (
		<Heading
			style={{
				top: top,
                opacity: opacity,
                letterSpacing: letterSpacing,
                filter: blur
			}}
		>
		    Tech Stack
		</Heading>
	)
}

const Heading = styled(motion.h1)`
    position: absolute;
	top: 20%;
    padding-left: 5rem;
    justify-content: center;
    align-items: center;
	text-transform: uppercase;
	font-size: 3rem;
	color: var(--text-color);
	text-align: right;
	white-space: nowrap;
	font-family: 'Centra', sans-serif;
	@media screen and (max-width: 999px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
	@media screen and (max-width: 546px) {
		font-size: 1.5;
	}
`
