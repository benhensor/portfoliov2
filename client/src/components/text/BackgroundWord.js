import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function BackgroundWord({
  text,
  once,
  repeatDelay,
  animation,
  top,
  left
}) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper $top={top} $left={left}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
          <span className="inline-block">
                
                  <motion.span
   
                    className="inline-block"
                    variants={animation}
                  >
                    {text}
                  </motion.span>
  
                <span className="inline-block">&nbsp;</span>
              </span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}

export const Wrapper = styled(motion.span)`
	position: absolute;
	top: ${({ $top }) => $top};
	left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		width: 100%;
		top: 60%;
		left: 0;
		text-align: center;
	}
`