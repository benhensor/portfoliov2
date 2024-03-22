import React, { useRef, useState, useEffect, useCallback } from 'react'
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
import NavIcon1 from '../../assets/icons/nav-icon1.svg'
import NavIcon2 from '../../assets/icons/nav-icon2.svg'
import NavIcon3 from '../../assets/icons/nav-icon3.svg'
import Logo from '../../assets/img/logo2023.png'

export default function Header({ scrolled, scrollToRef }) {
	const headerRef = useRef(null)

	const [activeLink, setActiveLink] = useState('home')
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = useCallback(() => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}, [])

	const onUpdateActiveLink = useCallback((pageRef) => {
		setActiveLink(pageRef)
	}, [])


	const navigateToSection = (pageRef) => {
		setActiveLink(pageRef)
		const ref = scrollToRef[pageRef]
		if (ref && ref.current) {
			setTimeout(() => {
				ref.current.scrollIntoView({ behavior: 'smooth' })
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
							<button onClick={scrollToTop}>
								<img src={Logo} alt="Ben Hensor Development" />
							</button>
							<HeaderName $scrolled={scrolled}>
								benHensor.dev
							</HeaderName>
						</LogoContainer>
						<HeaderMenu>
							<NavLink
								name="About"
								activeLink={activeLink === 'about'}
								onClick={() => navigateToSection('about')}
							/>
							<NavLink
								name="Tech Stack"
								activeLink={activeLink === 'tech'}
								onClick={() => navigateToSection('tech')}
							/>
							<NavLink
								name="Projects"
								activeLink={activeLink === 'projects'}
								onClick={() => navigateToSection('projects')}
							/>
							<NavLink
								name={
									<StyledSend
										$activeLink={activeLink === 'contact'}
										style={{ rotate: '-45deg' }}
									/>
								}
								activeLink={activeLink === 'contact'}
								onClick={() => navigateToSection('contact')}
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
					name="About"
					activeLink={activeLink === 'about'}
					onClick={() => navigateToSection('about')}
				/>
				<NavLink
					name="Tech Stack"
					activeLink={activeLink === 'tech'}
					onClick={() => navigateToSection('tech')}
				/>
				<NavLink
					name="Projects"
					activeLink={activeLink === 'projects'}
					onClick={() => navigateToSection('projects')}
				/>
				<NavLink
					name={<StyledSend $activeLink={activeLink === 'contact'} />}
					activeLink={activeLink === 'contact'}
					onClick={() => navigateToSection('contact')}
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
		</>
	)
}
