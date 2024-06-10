import React, { forwardRef, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'
import { aboutInfo } from '../data'
import profile from '../assets/img/profile.webp'
import CV from '../assets/docs/BenHensor_CV_Mar_2024.pdf'
import { 
	AboutContent,
	TextContainer,
	ImageContainer,
	Image,
	BGWord,
 } from '../styles/AboutStyles'

const About = forwardRef((props, ref) => {
	const { scrolled, setActiveLink } = props
	const contentRef = useRef(null)
	const isInView = useInView(contentRef, { amount: 0.5 })
	const controls = useAnimation()
	const isVisible = isInView && scrolled

	const { heading, subHeading, sentences } = aboutInfo

	useEffect(() => {
		if (isVisible) {
			controls.start('visible')
			if (isInView) {
				setActiveLink('about')
			}
		} else if (!isVisible) {
			controls.start('hidden')
			setActiveLink('')
		}
	}, [scrolled, isInView, isVisible, setActiveLink, controls])

	const scrollToContact = () => {
		document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
		setActiveLink('contact')
	}

	const downloadPDF = () => {
		const link = document.createElement('a')
		link.href = CV
		link.download = 'BenHensorCV.pdf'
		link.click()
	}

	const pageVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.75, ease: 'easeOut',
			},
		},
	}
 
	const contentVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.75,
				delay: 0.75,
				staggerChildren: 0.3,
			},
		},
		exit: {
			opacity: 0,
			y: 50,
			transition: {
				duration: 0.75,
			},
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.75,
			},
		},
	}

	const sentenceVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
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

	return (
		<Page ref={ref}>
			<AboutContent
				ref={contentRef}
				initial="hidden"
				animate={controls}
				variants={pageVariants}
			>

				<BGWord>
					ABOUT
				</BGWord>

				<TextContainer
					initial="hidden"
					animate={controls}
					variants={contentVariants}
				>

					<motion.h1 variants={itemVariants}>
						{heading}
					</motion.h1>

					<motion.h2 variants={itemVariants}>
						{subHeading}
					</motion.h2>

					<motion.div variants={sentenceVariants}>
						{sentences.map((sentence) => (
							<motion.p
								key={sentence.key}
							>
								{sentence.text}
							</motion.p>
						))}

						<motion.button
							type="button"
							aria-label='Contact me'
							onClick={scrollToContact}
							variants={itemVariants}
						>
							Contact me
						</motion.button>

						<motion.button
							type="button"
							aria-label='Download CV as PDF'
							onClick={downloadPDF}
							variants={itemVariants}
						>
							CV
						</motion.button>

					</motion.div>
					
				</TextContainer>

				<ImageContainer variants={imageVariants}>
					<Image src={profile} alt="" />
				</ImageContainer>

			</AboutContent>
		</Page>
	)
})

export default About