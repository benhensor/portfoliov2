import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 8em;
    width: 100%;
    height: 50em;
`

const AboutContent = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--border-color);
`

export default function About() {

    const aboutRef = useRef()
    const { scrollYProgress } = useScroll({ domTarget: aboutRef })

    const aboutXPosition = useTransform(scrollYProgress, [0.4, 0.6, 0.65, 0.8], ['-100%', '0%', '0%', '100%'])

    return (
        <AboutSection id='about' ref={aboutRef} style={{ left: aboutXPosition }}>
            <AboutContent>
                <h1>ABOUT</h1>
            </AboutContent>
        </AboutSection>
    )
}