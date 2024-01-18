import React, { useState, useEffect, useCallback } from 'react'
import NavLink from './NavLink'
import { 
    StyledHeader, 
    Navbar,
    LogoContainer, 
    HeaderMenu, 
    Contact, 
    StyledSend, 
    MenuControls, 
    StyledFaBars, 
    StyledFaTimes, 
    MobileMenu, 
    Icons 
} from '../../styles/HeaderStyles'
import NavIcon1 from '../../assets/icons/nav-icon1.svg'
import NavIcon2 from '../../assets/icons/nav-icon2.svg'
import NavIcon3 from '../../assets/icons/nav-icon3.svg'

import Logo from '../../assets/img/logo2023.png'

export default function Header () {

    const [activeLink, setActiveLink] = useState('home')
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);


      const toggleMenu = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
      }, []);

      const onUpdateActiveLink = useCallback((value) => {
        if (activeLink !== value) {
          setActiveLink(value);
          const section = document.getElementById(value);
          const headerOffset = document.querySelector('header')?.offsetHeight || 0;
          if (section) {
            window.scrollTo({
              top: section.offsetTop - headerOffset,
              behavior: 'smooth',
            });
          }
          setIsOpen(false);
        }
      }, [activeLink]);


    const scrollToTop = useCallback(() => {
        onUpdateActiveLink('home')
    }, [onUpdateActiveLink])


    return (<>
        <StyledHeader $scrolled={scrolled}>
            <Navbar className="navbar">
                
                <LogoContainer className='header-logo'>
                    <div></div>
                    <a href='#home' onClick={scrollToTop}>
                        <img src={Logo} alt='Ben Hensor Development' />
                    </a>
                    <h1>Ben Hensor Dev</h1>
                </LogoContainer>
                <HeaderMenu>
                    <NavLink to='skills' name='Skills' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
                    <NavLink to='about' name='About' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
                    <NavLink to='projects' name='Projects' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
                    <Contact><button type="button"><StyledSend/></button></Contact>              
                </HeaderMenu>
                <MenuControls className='burger' aria-label='Toggle navigation' aria-expanded={isOpen} onClick={() => toggleMenu(!isOpen)}>
                    {isOpen ? <StyledFaTimes /> : <StyledFaBars />}
                </MenuControls>
            </Navbar>
        </StyledHeader>
        <MobileMenu $isOpen={isOpen}>
            <NavLink to='skills' name='Skills' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
            <NavLink to='about' name='About' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
            <NavLink to='projects' name='Projects' activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
            <NavLink to='connect' name={<StyledSend/>} activeLink={activeLink} onClick={() => toggleMenu()} />
            <Icons>
                <a href='https://github.com/benhensor' rel='noreferrer' target='_blank'>
                    <img src={NavIcon1} alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/benhensor/' rel='noreferrer' target='_blank'>
                    <img src={NavIcon2} alt='LinkedIn' />
                </a>
                <a href='https://www.imdb.com/name/nm5978088/?ref_=rvi_nm' rel='noreferrer' target='_blank'>
                    <img src={NavIcon3} alt='IMDb' />
                </a>
            </Icons>
        </MobileMenu>
    </>)
}