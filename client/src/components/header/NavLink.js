import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    list-style: none;
    &:hover {
        a {
            color: var(--button-hover);
        }
    }
`

const A = styled.a`
        color: #fff;
        font-size: var(--text-l);
        text-decoration: none;
        transition: 0.1s ease-in-out;
        ${({ $activeLink }) => $activeLink && `
        `}
`

const NavLink = ({ to, name, activeLink, onUpdateActiveLink }) => (
    <Li>
        <A
            href={`#${to}`}
            $activeLink={activeLink}
            onClick={() => onUpdateActiveLink(to)}
        >
            {name}
        </A>
    </Li>
)

export default NavLink