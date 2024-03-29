import React, { forwardRef, useRef, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'
import { aboutInfo } from '../data'
import profile from '../assets/img/profile.png'
import { 
	AboutContent,
	BGWord,
	TextContainer,
	ImageContainer,
	Image,
 } from '../styles/AboutStyles'

const About = forwardRef((props, ref) => {
	const { scrolled } = props
	const contentRef = useRef(null)
	const isInView = useInView(contentRef, { amount: 0.5 })
	const controls = useAnimation()
	const isVisible = isInView && scrolled
	const mousePosition = useMousePosition()

	const { heading, subHeading, sentences } = aboutInfo

	const yPercent = (mousePosition.y / window.innerHeight) * 100 - 50
	const transformElement1 = `translateY(${yPercent / 0}px)`

	useEffect(() => {
		controls.start(isVisible ? 'visible' : 'hidden')
	}, [isVisible, controls])

	const contentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.75,
			},
		},
	}
 
	const primaryVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.5,
			},
		},
	}

	const secondaryVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 1,
			},
		},
	}

	const sentenceVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.25,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	const text = {
		heading: {
			fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
			color: 'var(--orange)',
		},
		subHeading: {
			fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
			marginBottom: '1rem',
			color: 'var(--ltOrange)',
		},
		sentences: {
			fontSize: 'clamp(1rem, 3vw, 1.6rem)',
			marginBottom: '1.6rem',
			color: 'var(--text-color-md)',
		},
	}

	return (
		<Page ref={ref}>
			<AboutContent
				ref={contentRef}
				initial="hidden"
				animate={controls}
				variants={contentVariants}
			>
				<BGWord style={{ transform: transformElement1 }}>ABOUT</BGWord>
				<TextContainer>
					<motion.h1 variants={primaryVariants} style={text.heading}>
						{heading}
					</motion.h1>
					<motion.h2 variants={secondaryVariants} style={text.subHeading}>
						{subHeading}
					</motion.h2>
					<motion.div variants={sentenceVariants}>
						{sentences.map((sentence) => (
							<motion.p
								key={sentence.key}
								style={text.sentences}
								variants={itemVariants}
							>
								{sentence.text}
							</motion.p>
						))}
					</motion.div>
				</TextContainer>
				<ImageContainer variants={primaryVariants}>
					<Image src={profile} alt="" />
				</ImageContainer>
			</AboutContent>
		</Page>
	)
})

export default About