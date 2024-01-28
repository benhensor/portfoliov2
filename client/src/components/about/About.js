import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import mugshot from '../../assets/img/profile.png'
import { aboutInfo } from '../../data'

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: 8em;
    @media screen and (max-width: 768px) {

    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 2em;
    padding-right: 45%;
    z-index: 1;
    @media screen and (max-width: 768px) {
        padding-left: 1em;
        padding-right: 1em;
    }
`

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    color: var(--highlight-color);
    h3 {
        margin-top: 1em;

    }
    @media screen and (max-width: 546px) {
        h3 {
        margin-top: 4em;
        }
    }
`

const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 1em;
`

const Sentence = styled.p`
    font-size: 1.6rem;
    color: var(--text-color-md);
`

const ImageContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -5%;
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
        top: 27%;
        transform: translateY(-50%);
        right: -5%;
        width: 17em;
        height: 17em;
        border: 2px solid var(--text-color-dk);
    }
    @media screen and (max-width: 546px) {
        top: 27%;
        transform: translateY(-50%);
        right: -17%;
        width: 17em;
        height: 17em;
        border: 2px solid var(--text-color-dk);
    }
`

const Image = styled.img`
    width: 20em;
    height: auto;
    object-position: center;
    position: relative;
    top: -6em;
    left: 1em;
    @media screen and (max-width: 768px) {
        width: 12em;
        top: -2em;
        left: 1em;
        filter: grayscale(100%);
    }
`

export default function About() {

    const aboutRef = useRef()
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
                                <Sentence key={sentence.key}>{sentence.text}</Sentence>
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