import React from 'react'
import styled from 'styled-components'
import { useActiveLink } from '../../context/useActiveNavLink';
import { StyledSend } from '../../styles/HeaderStyles';

export default function NavLink({ name, onClick, isMobile }) {

    const { activeLink } = useActiveLink();
    const isActive = activeLink === name.toLowerCase();

    let displayName =''
    switch (name) {
        case 'home':
            displayName = 'Home';
            break;
        case 'about':
            displayName = 'About';
            break;
        case 'tech':
            displayName = 'Tech Stack';
            break;
        case 'projects':
            displayName = 'Projects';
            break;
        case 'contact':
            displayName = isMobile ? 'Contact' : <StyledSend $activeLink={activeLink === 'contact'} style={{ rotate: '-45deg' }}/>;
            break;
        default:
            displayName = '';
    }


    return (
        <Li>
            <Button 
                type="button"
                aria-label={`Scroll to ${name} section`}
                onClick={onClick}
                $isActive={isActive}
            >
                {displayName}
            </Button>
        </Li>
    );
}

const Li = styled.li`
    list-style: none;
`;

const Button = styled.button`
    background: none;
    border: none;
    color: ${({ $isActive }) => $isActive ? 'var(--orange)' : 'var(--white)'};
    font-size: var(--text-l);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: var(--orange); 
    }
    &:focus {
        outline: none;
    }
`;