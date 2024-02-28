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
`

const Circle = styled(motion.img)`
	position: absolute;
	width: 100em;
	height: 100em;
	mix-blend-mode: screen;
	opacity: 0.5;
	${({ $id }) => {
    const rotations = {
        circle1: { time: '20s', scale: '200%', direction: 'rotate(360deg)', blurFilter: 'blur(20px)' },
        circle2: { time: '24s', scale: '275%', direction: 'rotate(-360deg)', blurFilter: 'blur(10px)'  },
        circle3: { time: '28s', scale: '225%', direction: 'rotate(360deg)', blurFilter: 'blur(10px)'  },
        circle4: { time: '32s', scale: '300%', direction: 'rotate(-360deg)', blurFilter: 'blur(20px)'  },
    };
    const { time, scale, direction, blurFilter } = rotations[$id] || {};
        return `
            animation: ${$id} ${time} linear infinite;
            scale: ${scale};
            filter: ${blurFilter};
            @keyframes ${$id} {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: ${direction};
                }
            }
        `;
    }}
`;
