import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'

const SkillsSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 8em;
    width: 100%;
    height: 50em;
`

const SkillsContent = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-color);
`

export default function Skills() {

    const skillsRef = useRef()
    const { scrollYProgress } = useScroll({ domTarget: skillsRef })

    const skillsXPosition = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4], ['-100%', '0%', '0%', '100%'])

    return (
        <SkillsSection id='skills' ref={skillsRef} style={{ left: skillsXPosition }}>
            <SkillsContent>
                <h1>SKILLS</h1>
            </SkillsContent>
        </SkillsSection>
    )
}