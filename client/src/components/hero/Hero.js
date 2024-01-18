import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import CircleVec1 from '../../assets/img/circleVec1.svg'
import CircleVec2 from '../../assets/img/circleVec2.svg'
import CircleVec3 from '../../assets/img/circleVec3.svg'
import CircleVec4 from '../../assets/img/circleVec4.svg'
import { HeroWave } from '../Waves'
import 'animate.css'

const HeroSection = styled.section`
    width: 100%;
    height: 30em;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 49;
    background-color: linear-gradient(to bottom right, #2f3636, #171e1e);
    transition: background-color 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    z-index: 1;
`

const Curve = styled.div`
    position: absolute;
    top: -4em;
    left: 0.8em;
    width: 5.4em;
    height: 5.2em;
    background-color: var(--background-static);
    border-radius: 50%;
    z-index: 10;
    @media screen and (max-width: 768px) {
        left: -0.2em;
    }
`

const HeroAnimation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    width: 100vw;
    height: calc(100% - 5.5em);
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    z-index: 0;
`

const Circle = styled.img`
    position: absolute;
    mix-blend-mode:screen;
    opacity: 0.5;
    ${({ $id }) => $id === 'one' && `
        animation: rotateA 25s linear infinite;
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
        animation: rotateB 20s linear infinite;
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
        animation: rotateC 25s linear infinite;
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
        animation: rotateD 20s linear infinite;
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


const HeroTitleContainer = styled.div`
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
    z-index: 2;
    animation: ${gradientAnimation} 20s ease infinite;
    @media screen and (max-width: 999px) {
        font-size: 6em;
    }
    @media screen and (max-width: 768px) {
        font-size: 5em;
    }
`

const Phrases = styled.div`
    position: relative;
    width: 100%;
    align-content: center;
`
  
const Phrase = styled.h2`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: var(--text-xxxxl);
    text-align: center;
    letter-spacing: 1rem;
    line-height: 1;
    display: block;
    text-transform: uppercase;
    word-wrap: normal;
`

export default function Hero () {

    const textRotate = ['Full Stack Developer', 'React Wizard', 'Cat Fanatic!']
    const [currentPhrase, setCurrentPhrase] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentPhrase(prevPhrase =>
            (prevPhrase + 1) % textRotate.length
        )
        }, 5000) 

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
        <HeroSection>
            <Curve />
            <HeroAnimation>
                <Circle $id='one' src={CircleVec1} />
                <Circle $id='two' src={CircleVec2} />
                <Circle $id='three' src={CircleVec3} />
                <Circle $id='four' src={CircleVec4} />
                <HeroWave />
            </HeroAnimation>
            <HeroTitleContainer>
                <HeroTitle>Ben Hensor</HeroTitle>
                <Phrases>
                    {renderPhrases()}
                </Phrases>
            </HeroTitleContainer>
        </HeroSection>
    )
}