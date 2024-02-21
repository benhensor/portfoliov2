import React, { useRef, useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import CircleVec1 from '../../assets/img/circleVec1.svg'
import CircleVec2 from '../../assets/img/circleVec2.svg'
import CircleVec3 from '../../assets/img/circleVec3.svg'
import CircleVec4 from '../../assets/img/circleVec4.svg'
import 'animate.css'

export default function Hero () {

    const heroRef = useRef(null) 
    const { scrollYProgress } = useScroll({ domTarget: heroRef })
    const heroHeight = useTransform(scrollYProgress, [0, 0.2], ['100vh', '3.1vh'])
    const heroBorder = useTransform(scrollYProgress, [0, 0.2], ['0.2em solid, #00c5c500', '0.2em solid #00c5c5'])
    const circleOneBottom = useTransform(scrollYProgress, [0, 0.2], ['29em', '-48em'])
    const circleTwoBottom = useTransform(scrollYProgress, [0, 0.2], ['29em', '-48em'])
    const circleThreeBottom = useTransform(scrollYProgress, [0, 0.2], ['29em', '-48em'])
    const circleFourBottom = useTransform(scrollYProgress, [0, 0.2], ['29em', '-48em'])
    const textPaddingTop = useTransform(scrollYProgress, [0, 0.2], ['14em', '-4em'])
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [0.75, 0])
       

    const textRotate = ['Frontend Developer', 'Sound Designer', 'Cat Fanatic!']
    const [currentPhrase, setCurrentPhrase] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentPhrase(prevPhrase =>
            (prevPhrase + 1) % textRotate.length
        )
        }, 3500) 

        return () => clearInterval(interval)
    }, [textRotate.length])

    const renderPhrases = () => {
        return textRotate.map((phrase, index) => (
        <Phrase key={index} 
            className={`text-phrase ${index === currentPhrase ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}`}
        >
            {phrase}
        </Phrase>
        ))
    }

    return (
        <HeroSection ref={heroRef} style={{ height: heroHeight, borderBottom: heroBorder }}>
            <HeroContent>
                <HeroAnimation>
                    <Circle $id='one' src={CircleVec1} style={{ bottom: circleOneBottom }}/>
                    <Circle $id='two' src={CircleVec2} style={{ bottom: circleTwoBottom }}/>
                    <Circle $id='three' src={CircleVec3} style={{ bottom: circleThreeBottom }}/>
                    <Circle $id='four' src={CircleVec4} style={{ bottom: circleFourBottom }}/>
                </HeroAnimation>
                <HeroTitleContainer style={{ paddingTop: textPaddingTop, opacity: textOpacity }}>
                    <HeroTitle>Ben Hensor</HeroTitle>
                    <Phrases>
                        {renderPhrases()}
                    </Phrases>
                </HeroTitleContainer>
            </HeroContent>
        </HeroSection>
    )
}

const HeroSection = styled(motion.section)`
    width: 100vw;
    margin: 4em auto 0 auto;
    background-color: #000;
    transition: background-color 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    overflow-x: hidden;
    position: fixed;
    z-index: 10;
`

const HeroContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const HeroAnimation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled(motion.img)`
    position: absolute;
    width: 100em;
    height: 100em;
    mix-blend-mode:screen;
    opacity: 0.5;
    ${({ $id }) => $id === 'one' && `
        animation: rotateA 20s linear infinite;
        scale: 200%;
        filter: var(--blurA);
        @keyframes rotateA {
            0% {
            transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `}
    ${({ $id }) => $id === 'two' && `
        animation: rotateB 24s linear infinite;
        scale: 300%;
        filter: var(--blurB);
        @keyframes rotateB {
            0% {
                transform: rotate(360deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    `}
    ${({ $id }) => $id === 'three' && `
        animation: rotateC 28s linear infinite;
        scale: 200%;
        filter: var(--blurC);
        @keyframes rotateC {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `}
    ${({ $id }) => $id === 'four' && `
        animation: rotateD 32s linear infinite;
        scale: 300%;
        filter: var(--blurD);
        @keyframes rotateD {
            0% {
                transform: rotate(360deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    `}
`

const HeroTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50% ;
  }
`

const HeroTitle = styled.h1`
    font-family: 'Centra', sans-serif;
    font-size: 7em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1rem;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: #ffffff75;
    mix-blend-mode: overlay;
    animation: ${gradientAnimation} 20s ease infinite;
    @media screen and (max-width: 999px) {
        font-size: 6em;
    }
    @media screen and (max-width: 768px) {
        font-size: 4em;
    }
    @media screen and (max-width: 546px) {
        font-size: 2.2em;
    }
`

const Phrases = styled.div`
    position: relative;
    width: 100%;
    align-content: center;
`
  
const Phrase = styled(motion.h2)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: 3em;
    text-align: center;
    letter-spacing: 1rem;
    line-height: 1;
    display: block;
    text-transform: uppercase;
    word-wrap: normal;
    opacity: 0;
    @media screen and (max-width: 999px) {
        font-size: 2.5em;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.5em;
    }
    @media screen and (max-width: 546px) {
        font-size: 0.7em;
    }
`