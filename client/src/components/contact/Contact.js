import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Contact() {

    const contactRef = useRef(null)
    const { scrollYProgress } = useScroll({ domTarget: contactRef })

    const contactYPosition = useTransform(scrollYProgress, [0.6, 0.8, 0.85, 1], ['-100em', '4em', '4em', '-100em'])
    const opacity = useTransform(scrollYProgress, [0.6, 0.8, 0.85, 1], ['0', '1', '1', '0'])

    return (
        <ContactSection ref={contactRef} style={{ top: contactYPosition, opacity: opacity }}>
            <ContactContent>
                <h1>Contact</h1>
            </ContactContent>
        </ContactSection>
    )
}

const ContactSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 4em;
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
`

const ContactContent = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-color);
    padding: var(--m-desktop);
    border: 2px solid var(--accent-color);
    @media screen and (max-width: 768px) {
        padding: var(--m-mobile);   
    }
`
