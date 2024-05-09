import React, { forwardRef, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'
import TechCategory from '../components/tech/TechCategory'
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from '../data'

const TechStack = forwardRef((props, ref) => {
	const { setActiveLink } = props
	const techRef = useRef(null)
	const isInView = useInView(techRef, { amount: 0.5 })
	const controls = useAnimation()

	const [hoveredCategory, setHoveredCategory] = useState(null)

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
			setActiveLink('tech')
		} else {
			controls.start('hidden')
			setActiveLink('')
		}
	}, [isInView, setActiveLink, controls])

	const sections = [
		{ title: 'Languages', skillSet: languages },
		{ title: 'Frontend', skillSet: frontend },
		{ title: 'Backend', skillSet: backend },
		{ title: 'Testing', skillSet: testing },
		{ title: 'DevOps', skillSet: devops },
		{ title: 'Design', skillSet: design },
		{ title: 'Tools', skillSet: tools },
	]

	const pageVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.75,
			},
		},
	}

	const contentVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
      y: 0,
			transition: {
				delay: 0.75,
				duration: 0.75,
				staggerChildren: 3,
			},
		},
	}

	const itemVariants = {
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

	return (
		<Page ref={ref}>
			<Content
				ref={techRef}
				initial="hidden"
				animate={controls}
				variants={pageVariants}
			>
				<BGWord>TECH STACK</BGWord>

				<TechCategoriesContainer
					initial="hidden"
					animate={controls}
					variants={contentVariants}
				>
					{sections.map((section, index) => (
						<TechCategory
							key={index}
							title={section.title}
							skillSet={section.skillSet}
							isHovered={hoveredCategory === section.title}
							onHover={() => setHoveredCategory(section.title)}
							onHoverLeave={() => setHoveredCategory(null)}
							initial="hidden"
							animate={controls}
							variants={itemVariants}
						/>
					))}
				</TechCategoriesContainer>
			</Content>
		</Page>
	)
})

export default TechStack

const Content = styled(motion.div)`
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const TechCategoriesContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const BGWord = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center;
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`
