import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

const ContactSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 8em;
    width: 100%;
    height: 50em;
`

const ContactContent = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-color);
`

export default function Contact() {

    const contactRef = useRef()
    const { scrollYProgress } = useScroll({ domTarget: contactRef })

    const contactYPosition = useTransform(scrollYProgress, [0.6, 0.8, 0.85, 1], ['-100em', '8em', '8em', '-100em'])

    return (
        <ContactSection ref={contactRef} style={{ top: contactYPosition }}>
            <ContactContent>
                <h1>Contact</h1>
            </ContactContent>
        </ContactSection>
    )
}