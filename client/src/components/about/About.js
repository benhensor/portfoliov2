import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import mugshot from '../../assets/img/profile.png'
import { aboutInfo } from '../../data'

export default function About() {

    const aboutRef = useRef(null)
    const { scrollYProgress } = useScroll({ domTarget: aboutRef })

    const left = useTransform(scrollYProgress, [0.4, 0.6, 0.65, 0.8], ['-100%', '0%', '0%', '100%'])
    const opacity = useTransform(scrollYProgress, [0.45, 0.6, 0.65, 0.75], ['0', '1', '1', '0'])

    return (
        <AboutSection id='about' ref={aboutRef} style={{ left: left, opacity: opacity }}>
            <AboutContent>
                    <TextContainer>
                        <Heading>
                            <h2>Hi, I'm Ben.</h2>
                            <h3>Welcome to my portfolio!</h3>
                        </Heading>
                        <Paragraph>
                            {aboutInfo.map((sentence) => (
                                <Sentence key={sentence.key} >{sentence.text}</Sentence>
                            ))}
                        </Paragraph>
                    </TextContainer>
                    <ImageContainer>
                        <Image src={mugshot} alt='' />
                    </ImageContainer>
            </AboutContent>
        </AboutSection>
    )
}

const AboutSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 8em;
    width: 100%;
    @media screen and (max-width: 768px) {
        top: 6em;
    }
`

const AboutContent = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: 4em;
    @media screen and (max-width: 768px) {
        padding: 4em 2em;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 40%;
    z-index: 1;
    @media screen and (max-width: 999px) {
        padding-left: 2em;
    }
    @media screen and (max-width: 768px) {
        padding-left: 1em;
        padding-right: 1em;
    }
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-bottom: 2em;
    color: var(--highlight-color);
    @media screen and (max-width: 546px) {
        gap: 0.5em;
        margin-bottom: 1em;
        h2 {
            font-size: 2rem;
        }
        h3 {
            font-size: 1.4rem;
        }
    }
`

const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 1em;
    @media screen and (max-width: 768px) {
        gap: 0.7em;
    }
    @media screen and (max-width: 546px) {
        gap: 0.5em;
    }
`

const Sentence = styled.p`
    font-size: 1.6rem;
    color: var(--text-color-md);
    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 1.5;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    top: 20em;
    transform: translateY(-50%);
    right: -4em;
    width: 25em;
    height: 25em;
    border: 2px solid var(--accent-color);
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    background: #000;
    animation: morph 10s linear infinite alternate;  
    @keyframes morph {
        0% {
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
        }
        100% {
        border-radius: 40% 60%;
        }
    }
    @media screen and (max-width: 768px) {
        top: 9em;
        right: 0em;
        width: 12em;
        height: 12em;
        border: 2px solid var(--text-color-dk);
    }
    @media screen and (max-width: 546px) {
        top: 8em;
        right: 0em;
        width: 10em;
        height: 10em;
        border: 2px solid var(--text-color-dk);
    }
`

const Image = styled.img`
    width: 18em;
    height: auto;
    object-position: center;
    position: relative;
    top: -2.7em;
    left: 2.5em;
    @media screen and (max-width: 768px) {
        width: 8em;
        top: -1em;
        left: 1em;
        filter: grayscale(100%);
    }
    @media screen and (max-width: 546px) {
        width: 6em;
        top: -0.5em;
        left: 0.5em;
    }
`