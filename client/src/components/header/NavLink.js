import React from 'react'
import styled from 'styled-components'

export default function NavLink({ name, activeLink, onClick }) {

    return (
        <Li>
            <Button 
                type="button"
                aria-label={`Scroll to ${name} section`}
                onClick={onClick}
                $activeLink={activeLink}
            >
                {name}
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
    color: ${({ $activeLink }) => $activeLink ? 'var(--orange)' : 'var(--white)'};
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