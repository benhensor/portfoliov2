import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Page } from './styles/GlobalStyles'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './pages/AboutPage'
import TechStack from './pages/TechStackPage'
import Projects from './pages/ProjectsPage'
import Contact from './pages/ContactPage'
import Cat from './components/cat/Cat'


export default function App() {
	const aboutRef = useRef(null)
	const techStackRef = useRef(null)
	const projectsRef = useRef(null)
	const contactRef = useRef(null)

	const [scrolled, setScrolled] = useState(false)
	const [activeLink, setActiveLink] = useState('home')

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

	return (
		<AnimatePresence>
			<AppContainer>

				<Header 
					scrolled={scrolled}
					scrollToRef={{ about: aboutRef, tech: techStackRef, projects: projectsRef, contact: contactRef }}
					activeLink={activeLink}
					setActiveLink={setActiveLink}
					/>
				<Hero scrolled={scrolled} />
				<AppContent>
					<Page>
						<About ref={aboutRef} scrolled={scrolled} setActiveLink={setActiveLink}/>
					</Page>
					<Page>
						<TechStack ref={techStackRef} activeLink={activeLink} setActiveLink={setActiveLink} />
					</Page>
					<Page>
						<Projects ref={projectsRef} setActiveLink={setActiveLink} />
					</Page>
					<Page>
						<Contact ref={contactRef} setActiveLink={setActiveLink} />
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