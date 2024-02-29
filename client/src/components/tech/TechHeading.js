import React from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

export default function TechHeading({ text, scrollYProgress }) {

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

const Heading = styled(motion.h1)`
	position: absolute;
	top: 25%;
	padding-left: 1.5rem;
	text-transform: uppercase;
	font-size: 7rem;
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
		font-size: 2rem;
	}
`