import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, useInView } from 'framer-motion'
import { Page } from './styles/GlobalStyles'
import { useActiveLink } from './context/useActiveNavLink'
import { useWindowSize } from './hooks/useWindowSize'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './pages/AboutPage'
import TechStack from './pages/TechStackPage'
import Projects from './pages/ProjectsPage'
import Contact from './pages/ContactPage'
import Cat from './components/cat/Cat'

export default function App() {
	const { activeLink, setActiveLink } = useActiveLink()
	const size = useWindowSize()
	const aboutRef = useRef(null)
	const techStackRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const [scrolled, setScrolled] = useState(false)

	const isAboutInView = useInView(aboutRef, { amount: 0.5 })
	const isTechInView = useInView(techStackRef, { amount: 0.5 })
	const isProjectsInView = useInView(projectsRef, { amount: 0.5 })
	const isContactInView = useInView(contactRef, { amount: 0.5 })

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [scrolled])

	useEffect(() => {
		if (isAboutInView && scrolled) {
			setActiveLink('about')
		} else if (isTechInView) {
			setActiveLink('tech')
		} else if (isProjectsInView) {
			setActiveLink('projects')
		} else if (isContactInView) {
			console.log(size)
			setActiveLink('contact')
			console.log(activeLink)
		} else {
			setActiveLink('')
		}
	}, [ 
		isAboutInView,
		isTechInView,
		isProjectsInView,
		isContactInView,
		activeLink,
		setActiveLink,
		size,
		scrolled,
	])

	return (
		<AnimatePresence>
			<AppContainer>
				<Header
					scrolled={scrolled}
					scrollToRef={{
						about: aboutRef,
						tech: techStackRef,
						projects: projectsRef,
						contact: contactRef,
					}}
				/>
				<Hero scrolled={scrolled} />
				<AppContent>
					<Page>
						<About ref={aboutRef} scrolled={scrolled} />
					</Page>
					<Page>
						<TechStack ref={techStackRef} />
					</Page>
					<Page>
						<Projects ref={projectsRef} />
					</Page>
					<Page>
						<Contact ref={contactRef} />
					</Page>
					<Page>
						<Cat />
					</Page>
				</AppContent>
			</AppContainer>
		</AnimatePresence>
	)
}

const AppContainer = styled.main`
	display: flex;
	flex-direction: column;
`

const AppContent = styled.div`
	margin-top: 4em;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
`
