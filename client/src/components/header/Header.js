import React, { useRef, useState, useCallback } from 'react'
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
	MenuControls,
	StyledFaBars,
	StyledFaTimes,
	MobileMenu,
	Icons,
} from '../../styles/HeaderStyles'
import { useActiveLink } from '../../context/useActiveNavLink'
import NavIcon1 from '../../icons/NavIcon1'
import NavIcon2 from '../../icons/NavIcon2'
import NavIcon3 from '../../icons/NavIcon3'
import Logo from '../../assets/img/logo2023.webp'

export default function Header({ scrolled, scrollToRef }) {
	
	const { setActiveLink } = useActiveLink()
	const headerRef = useRef(null)
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = useCallback(() => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}, [])

	const navigateToSection = (pageRef) => {
		setActiveLink(pageRef)
		const ref = scrollToRef[pageRef]
		if (ref && ref.current) {
			setTimeout(() => {
				ref.current.scrollIntoView({ behavior: 'smooth' })
				setIsOpen(false)
			}, 100)
		}
	}

	const scrollToTop = useCallback(() => {
		setActiveLink('home')
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [setActiveLink])

	return (
		<>
			<StyledHeader id="home" ref={headerRef} $scrolled={scrolled}>
				<HeaderContent>
					<Navbar>
						<LogoContainer>
							<Border></Border>
							<Block></Block>
							<button type="button" aria-label="Logo, scroll to top" onClick={scrollToTop}>
								<img src={Logo} alt="Ben Hensor Development" />
							</button>
							<HeaderName $scrolled={scrolled}>
								benHensor.dev
							</HeaderName>
						</LogoContainer>
						<HeaderMenu>
							<NavLink
								name="about"
								onClick={() => navigateToSection('about')}
							/>
							<NavLink
								name="tech"
								onClick={() => navigateToSection('tech')}
							/>
							<NavLink
								name="projects"
								onClick={() => navigateToSection('projects')}
							/>
							<NavLink
								name='contact'
								onClick={() => navigateToSection('contact')}
							/>
						</HeaderMenu>
						<MenuControls
							type="button"
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
					name="about"
					onClick={() => navigateToSection('about')}
				/>
				<NavLink
					name="tech"
					onClick={() => navigateToSection('tech')}
				/>
				<NavLink
					name="projects"
					onClick={() => navigateToSection('projects')}
				/>
				<NavLink
					name='contactMobile'
					onClick={() => navigateToSection('contact')}
				/>
				<Icons>
					<a
						aria-label="Visit my Github profile"
						href="https://github.com/benhensor"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon1 />
					</a>
					<a
						aria-label="Visit my LinkedIn profile"
						href="https://www.linkedin.com/in/benhensor/"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon2 />
					</a>
					<a
						aria-label="Visit my IMDb profile"
						href="https://www.imdb.com/name/nm5978088/?ref_=rvi_nm"
						rel="noreferrer"
						target="_blank"
					>
						<NavIcon3 />
					</a>
				</Icons>
			</MobileMenu>
		</>
	)
}
