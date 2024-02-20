import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    list-style: none;
    
`


const A = styled.a`
    color: ${({ $activeLink }) => ($activeLink ? 'var(--button-hover)' : 'var(--text)')};
    font-size: var(--text-l);
    text-decoration: none;
    transition: 0.1s ease-in-out;
`

const NavLink = ({ to, name, activeLink, onUpdateActiveLink }) => (
    <Li>
        <A
            href={`#${to}`}
            $activeLink={activeLink === to}
            onClick={(e) => {
                e.preventDefault()
                onUpdateActiveLink(to)
            }}
        >
            {name}
        </A>
    </Li>
)

export default NavLink