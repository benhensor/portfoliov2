import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
    width: 100vw;
    height: 30em;
    margin: 0 auto;
    background-color: linear-gradient(to bottom right, #2f3636, #171e1e);
    transition: background-color 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    overflow-x: hidden;
`

export const HeroAnimation = styled.div`
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

export const Circle = styled.img`
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


export const HeroTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const gradientAnimation = keyframes`
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

export const HeroTitle = styled.h1`
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
        font-size: 5em;
    }
`

export const Phrases = styled.div`
    position: relative;
    width: 100%;
    align-content: center;
`
  
export const Phrase = styled.h2`
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