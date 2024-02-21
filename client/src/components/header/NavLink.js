import React from 'react'
import styled from 'styled-components'

export default function NavLink({ to, name, activeLink, onUpdateActiveLink }) {
    return (
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
}

const Li = styled.li`
    list-style: none;
`

const A = styled.a`
    color: ${({ $activeLink }) => ($activeLink ? 'var(--button-hover)' : 'var(--text)')};
    font-size: var(--text-l);
    text-decoration: none;
    transition: 0.1s ease-in-out;
`