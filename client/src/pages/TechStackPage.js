import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import TechCategory from '../components/tech/TechCategory'
import { useActiveLink } from '../context/useActiveNavLink'
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from '../data'

const TechStackPage = forwardRef((props, ref) => {
	const { setActiveLink } = useActiveLink()
	const techRef = useRef(null)
	const isInView = useInView(techRef, { amount: 0.5 })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
			setActiveLink('tech')
		} else {
			controls.start('hidden')
		}
	}, [isInView, setActiveLink, controls])

	const sections = [
		{ key: 1, title: 'Languages', skillSet: languages },
		{ key: 2, title: 'Frontend', skillSet: frontend },
		{ key: 3, title: 'Backend', skillSet: backend },
		{ key: 4, title: 'Testing', skillSet: testing },
		{ key: 5, title: 'DevOps', skillSet: devops },
		{ key: 6, title: 'Design', skillSet: design },
		{ key: 7, title: 'Tools', skillSet: tools },
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

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
				ease: "easeOut",
				duration: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeOut",
				duration: 0.5,
			},
		},
	};

	return (
		<TechStack ref={ref} id='tech'>
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
					variants={containerVariants}
				>
					{sections.map((section) => (
						<TechCategory
							key={section.key}
							title={section.title}
							skillSet={section.skillSet}
							initial="hidden"
							variants={itemVariants}
						/>
					))}
				</TechCategoriesContainer>
			</Content>
		</TechStack>
	)
})

export default TechStackPage

const TechStack = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Content = styled(motion.div)`
	width: 100%;
	display: flex;
	justify-content: center;
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
	font-size: clamp(3rem, 15vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`
