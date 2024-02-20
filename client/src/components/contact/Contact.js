import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Contact() {

    const contactRef = useRef(null)
    const { scrollYProgress } = useScroll({ domTarget: contactRef })

    const contactYPosition = useTransform(scrollYProgress, [0.6, 0.8, 0.85, 1], ['-100em', '8em', '8em', '-100em'])
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
    padding: var(--m-desktop);
    @media screen and (max-width: 768px) {
        padding: var(--m-mobile);   
    }
`
