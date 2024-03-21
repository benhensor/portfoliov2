import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransform, useScroll } from 'framer-motion'
import NavLink from './NavLink'
import {
	StyledHeader,
	HeaderContent,
	Block,
	Border,
	Navbar,
	LogoContainer,
	HeaderName,
	HeaderMenu,
	StyledSend,
	MenuControls,
	StyledFaBars,
	StyledFaTimes,
	MobileMenu,
	Icons,
} from '../../styles/HeaderStyles'
import Hero from '../hero/Hero'
import NavIcon1 from '../../assets/icons/nav-icon1.svg'
import NavIcon2 from '../../assets/icons/nav-icon2.svg'
import NavIcon3 from '../../assets/icons/nav-icon3.svg'
import Logo from '../../assets/img/logo2023.png'

export default function Header() {
	const headerRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: headerRef })

	const [activeLink, setActiveLink] = useState('home')
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			// Total height of the document
			const docHeight = document.documentElement.scrollHeight
			// Height of the viewport
			const viewportHeight = window.innerHeight
			// Maximum amount that can be scrolled
			const maxScroll = docHeight - viewportHeight
			// Current scroll position normalized between 0 and 1
			const normalizedScroll = window.scrollY / maxScroll

			console.log(normalizedScroll) // Log the normalized scroll position
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const toggleMenu = useCallback(() => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}, [])

	const onUpdateActiveLink = useCallback(
		(value) => {
			if (activeLink !== value) {
				setActiveLink(value)
				const siteHeight = document.documentElement.scrollHeight
				const offset = siteHeight * 0.04
				let scrollToValue = 0 // Default to top if none of the cases match

				switch (
					value // Use the value to switch, not the section element
				) {
					case 'about':
						scrollToValue = (siteHeight * 0.2) - (siteHeight * 0.02)
						break
					case 'tech':
						scrollToValue = (siteHeight * 0.4) - (siteHeight * 0.04)
						break
					case 'projects':
						scrollToValue = (siteHeight * 0.6) - (siteHeight * 0.06)
						break
					case 'contact':
						scrollToValue = (siteHeight * 0.8) - (siteHeight * 0.08)
						break
					default:
						scrollToValue = 0 // Optional, as it's already set above
						break
				}
				window.scrollTo({
					top: scrollToValue,
					behavior: 'smooth',
				})
				setIsOpen(false)
			}
		},
		[activeLink]
	)

	const scrollToTop = useCallback(() => {
		onUpdateActiveLink('home')
	}, [onUpdateActiveLink])

	const headerNameOpacity = useTransform(
		scrollYProgress,
		[0, 0.2],
		['0.3', '1']
	)

	return (
		<>
			<StyledHeader id="home" ref={headerRef} $scrolled={scrolled}>
				<HeaderContent>
					<Navbar>
						<LogoContainer>
							<Border></Border>
							<Block></Block>
							<a href="#home" onClick={scrollToTop}>
								<img src={Logo} alt="Ben Hensor Development" />
							</a>
							<HeaderName style={{ opacity: headerNameOpacity }}>
								benHensor.dev
							</HeaderName>
						</LogoContainer>
						<HeaderMenu>
							<NavLink
								to="about"
								name="About"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="tech"
								name="Tech Stack"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="projects"
								name="Projects"
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
							<NavLink
								to="contact"
								name={
									<StyledSend
										$activeLink={activeLink === 'contact'}
										style={{ rotate: '-45deg' }}
									/>
								}
								activeLink={activeLink}
								onUpdateActiveLink={onUpdateActiveLink}
							/>
						</HeaderMenu>
						<MenuControls
							aria-label="Toggle navigation"
							aria-expanded={isOpen}
							onClick={() => toggleMenu(!isOpen)}
						>
							{isOpen ? <StyledFaTimes /> : <StyledFaBars />}
						</MenuControls>
					</Navbar>
				</HeaderContent>
			</StyledHeader>
			<MobileMenu $isOpen={isOpen}>
				<NavLink
					to="about"
					name="About"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="tech"
					name="Tech Stack"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="projects"
					name="Projects"
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<NavLink
					to="contact"
					name={<StyledSend $activeLink={activeLink === 'contact'} />}
					activeLink={activeLink}
					onUpdateActiveLink={onUpdateActiveLink}
				/>
				<Icons>
					<a
						href="https://github.com/benhensor"
						rel="noreferrer"
						target="_blank"
					>
						<img src={NavIcon1} alt="Github" />
					</a>
					<a
						href="https://www.linkedin.com/in/benhensor/"
						rel="noreferrer"
						target="_blank"
					>
						<img src={NavIcon2} alt="LinkedIn" />
					</a>
					<a
						href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm"
						rel="noreferrer"
						target="_blank"
					>
						<img src={NavIcon3} alt="IMDb" />
					</a>
				</Icons>
			</MobileMenu>
			<Hero />
		</>
	)
}
