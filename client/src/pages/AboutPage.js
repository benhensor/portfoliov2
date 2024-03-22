import React, { forwardRef, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'
import { aboutInfo } from '../data'
import profile from '../assets/img/profile.png'

const About = forwardRef((props, ref) => {

  const { scrolled } = props
  const contentRef = useRef(null) 
  const headingRef = useRef(null)

  const isInView = useInView(headingRef)

  const [isVisible, setIsVisible] = useState(false)

  // useEffect to listen for scrolled to be true.
  // if scrolled true, render the About component.
  useEffect(() => {
    if (scrolled) {
      setIsVisible(true)
      contentRef.current.style.display = 'flex'
    } else {
      setIsVisible(false)
      contentRef.current.style.display = 'none'
    }
  }, [scrolled])
  
	const heading = aboutInfo.heading

  const defaultAnimations = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      delay: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

	return (
		<Page ref={ref}>
			<AboutContent ref={contentRef}>
				<TextContainer>
					<motion.h1
            ref={headingRef}
            key={isVisible ? 'visible' : 'hidden'}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            variants={defaultAnimations}
          >
						{heading.split('').map((char) => (
							<motion.span
                key={char}
                variants={defaultAnimations}
                className='inline-block'
              >{char}</motion.span>
						))}
					</motion.h1>
					<h2>{aboutInfo.subHeading}</h2>
					{aboutInfo.sentences.map((sentence) => (
						<p key={sentence.key}>{sentence.text}</p>
					))}
				</TextContainer>
				<ImageContainer>
					<Image src={profile} alt="" />
				</ImageContainer>
			</AboutContent>
		</Page>
	)
})

export default About

const AboutContent = styled.div`
	display: none;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

const TextContainer = styled.div`
	h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		color: var(--orange);
	}
	h2 {
		font-size: clamp(1.6rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
		color: var(--ltOrange);
	}
	p {
		font-size: clamp(1rem, 3vw, 1.6rem);
		margin-bottom: 1.6rem;
		color: var(--text-color-md);
	}
	@media screen and (max-width: 768px) {
		text-align: center;
		padding: 0 7rem;
	}
`

const ImageContainer = styled(motion.div)`
	position: relative;
	z-index: -1;
	min-width: 35rem;
	height: 35rem;
	margin-left: 2rem;
	border: 2px solid var(--orange);
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
		margin-bottom: 4rem;
		min-width: 23rem;
		height: 23rem;
	}
	@media screen and (max-width: 546px) {
		min-width: 15rem;
		height: 15rem;
		margin-top: 5rem;
		margin-bottom: 2rem;
	}
`

const Image = styled.img`
	width: 25rem;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
	@media screen and (max-width: 768px) {
		top: -2.5em;
		left: 2.5em;
		width: 15rem;
	}
	@media screen and (max-width: 546px) {
		top: -2rem;
		left: 2rem;
		width: 10rem;
	}
`
