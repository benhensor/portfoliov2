import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ReactComponent as Send } from '../assets/icons/send.svg'

export const StyledHeader = styled.header`
    position: fixed;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100vw;
    height: 100%;
	height: 4em;
    background-color: var(--background-static);
    border-bottom: 0.2em solid var(--border-color);
    user-select: none;
    z-index: 10;
`

export const Navbar = styled.nav`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background-static);
    color: white;
    padding: 1em 2em 0 2em;
    @media screen and (max-width: 768px) {
        padding: 1em 1em 0 1em;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    div {
        position: absolute;
        left: -1em;
        top: 50%;
        transform: translateY(-50%);
        width: 5em;
        height: 5em;
        border-radius: 50%;
        border: 0.2em solid var(--border-color);
        background-color: var(--background-static);
        padding: 1em;
        z-index: -1;
    }
    a { 
        position: absolute;
        left: -0.8em;
        padding: 0.8em;
        background-color: var(--background-static);
        border-radius: 50%;
        img {
            width: 3em;
            border-radius: 50%;
            z-index: 99;
            
        }
    }
    h1 {
        margin-left: 2.3em;
        z-index: 100;
        @media screen and (max-width: 375px) {
            color: transparent;
        }
    }
`

export const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 2em;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Contact = styled.li`
    button {
        border: none;
        background-color: transparent;
        rotate: -45deg;
    }
`
export const StyledSend = styled(Send)`
    width: 1.5em;
    & path {
        fill: white;
    }
    &:hover {
        & path {
            fill: var(--button-hover);
        }
    }
`

export const MenuControls = styled.button`
    display: none;
    background-color: transparent;
    border: none;
    color: white;
    &:hover {
        color: var(--button-hover);
    }
    @media screen and (max-width: 768px) {
        display: block;
    }
`
export const StyledFaBars = styled(FaBars)`
    font-size: 3rem;   
`
export const StyledFaTimes = styled(FaTimes)`
    font-size: 3rem;
`

export const MobileMenu = styled.ul`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 4em);
    gap: 2em;
    list-style-type: none;
    padding: 4em 0;
    opacity: 0;  
    background-color: var(--background-static);
    display: flex;
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 768px) {
        ${({ $isOpen }) => $isOpen && `
            opacity: 1;
            transform: translateY(0);
        `}
    }
`

export const Icons = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    a {
        width: 2.5em;
        height: 2.5em;
        background: transparent;
        display: inline-flex;
        border-radius: 25%;
        align-items: center;
        justify-content: center;
        line-height: 1;
        border: 1px solid rgba(255, 255, 255, 0.5);
        position: relative; // Added to ensure ::before works correctly
        &::before {
            content: "";
            width: 2.5em;
            height: 2.5em;
            position: absolute;
            background-color: var(--button-hover);
            border-radius: 25%;
            transform: scale(0);
            border: 1px solid var(--button-hover);
            transition: 0.1s ease-in-out;
        }
        &:hover::before {
            transform: scale(1);
        }
        img {
            width: 1.5em;
            z-index: 1;
            transition: 0.1s ease-in-out;
        }
        &:hover {
            img {
                filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
            }
        }
    }
`