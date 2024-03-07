import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import CircleVec1 from '../../assets/img/circleVec1.svg'
import CircleVec2 from '../../assets/img/circleVec2.svg'
import CircleVec3 from '../../assets/img/circleVec3.svg'
import CircleVec4 from '../../assets/img/circleVec4.svg'

export default function HeroAnimation({ circleBottom }) {
  return (
    <HeroAnimationContainer>
        {[CircleVec1, CircleVec2, CircleVec3, CircleVec4].map((src, index) => (
            <Circle
                key={index}
                src={src}
                $id={`circle${index + 1}`}
                style={{ bottom: circleBottom }}
            />
        ))}
    </HeroAnimationContainer>
  )
}

const HeroAnimationContainer = styled.div`
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
    scroll-behavior: none;
`

const Circle = styled(motion.img)`
    position: absolute;
    width: 100em;
    height: 100em;
    mix-blend-mode: screen;
    opacity: 0.5;
    ${({ $id }) => {
        const rotations = {
        circle1: { time: '20s', initialScale: 2.00, maxScale: 1.90, fullRotation: 360, blurFilter: 'blur(20px)' },
        circle2: { time: '24s', initialScale: 2.75, maxScale: 2.85, fullRotation: -360, blurFilter: 'blur(10px)' },
        circle3: { time: '28s', initialScale: 2.25, maxScale: 2.45, fullRotation: 360, blurFilter: 'blur(10px)' },
        circle4: { time: '32s', initialScale: 3.00, maxScale: 2.90, fullRotation: -360, blurFilter: 'blur(20px)' },
        };
        const { time, initialScale, maxScale, fullRotation, blurFilter } = rotations[$id] || {};
        return `
        animation: ${$id}-animation ${time} linear infinite;
        transform: scale(${initialScale});
        filter: ${blurFilter};
        @keyframes ${$id}-animation {
            0% {
            transform: scale(${initialScale}) rotate(0deg);
            }
            50% {
            // Increase scale and rotate halfway through the full rotation
            transform: scale(${maxScale}) rotate(${fullRotation / 2}deg);
            }
            100% {
            // Return to initial scale and complete the rotation
            transform: scale(${initialScale}) rotate(${fullRotation}deg);
            }
        }
        `;
    }}
`;

