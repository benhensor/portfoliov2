import React from 'react'
import styled from 'styled-components'
import { FaCopyright } from 'react-icons/fa'

export default function Footer() {
	const year = new Date().getFullYear()
  const name = 'Ben Hensor'
	return (
		<StyledFooter>
			<FaCopyright />
			<p>{year}</p>
      <p>{name}</p>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 4em;
  gap: 0.5em;
	color: var(--text-color-dk);
	user-select: none;
	z-index: 100;
  p {
    color: var(--text-color-dk);
  }
`
