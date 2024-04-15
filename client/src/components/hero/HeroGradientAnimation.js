import React, { useEffect } from 'react'
import styled from 'styled-components'

export default function HeroGradientAnimation() {

  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let curX = centerX
    let curY = centerY
    let mouseX = 0;
    let mouseY = 0;

    function move() {
      curX += (mouseX - curX) / 10;
      curY += (mouseY - curY) / 10;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    function updateMousePosition(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener('mousemove', updateMousePosition);
    move();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);


  return (
    <GradientBG className="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <GradientsContainer className="gradients-container">
      <Gradient1 className="g1"></Gradient1>
      <Gradient2 className="g2"></Gradient2>
      <Gradient3 className="g3"></Gradient3>
      <Gradient4 className="g4"></Gradient4>
      <Gradient5 className="g5"></Gradient5>
      <Interactive className="interactive"></Interactive>
    </GradientsContainer>
  </GradientBG>
  )
}

const GradientBG = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
  top: 0;
  left: 0;

  svg {
    display: none;
  }
`

const GradientsContainer = styled.div`
  filter: url(#goo) blur(40px);
  width: 100%;
  height: 100%;
`

const Gradient1 = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: center center;
  animation: moveVertical 30s ease infinite;

  opacity: 1;

  @keyframes moveVertical {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`
  
const Gradient2 = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 400px);
  animation: moveInCircle 20s reverse infinite;

  opacity: 1;

  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Gradient3 = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);

  transform-origin: calc(50% + 400px);
  animation: moveInCircle 40s linear infinite;

  opacity: 1;

  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Gradient4 = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 200px);
  animation: moveHorizontal 40s ease infinite;

  opacity: 0.7;

  @keyframes moveHorizontal {
    0% {
      transform: translateX(-50%) translateY(-10%);
    }
    50% {
      transform: translateX(50%) translateY(10%);
    }
    100% {
      transform: translateX(-50%) translateY(-10%);
    }
  }
`

const Gradient5 = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));

  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: moveInCircle 20s ease infinite;

  opacity: 1;

  @keyframes moveInCircle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Interactive = styled.div`
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;

  opacity: 0.7;
`