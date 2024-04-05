import React from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

export default function HeroArrow() {
	return (
		<Container>
			<Arrows>
				<Arrow />
				<Arrow />
				<Arrow />
			</Arrows>
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	top: 5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 10rem;
	opacity: 0.2;
`

const Arrows = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: var(--text-color);
	transition: all 0.3s ease;
	&:hover {
		gap: 4rem;
	}
`

const Arrow = styled(FaChevronDown)`
	position: relative;
	font-size: 5rem;
	animation: arrow 2s infinite ease-in-out;
	&:nth-child(1) {
		top: 40px;
	}
	&:nth-child(2) {
		animation-delay: -0.2s;
	}
	&:nth-child(3) {
		bottom: 40px;
		animation-delay: -0.4s;
	}
	@keyframes arrow {
		0% {
			opacity: 0;
			transform: translateY(-2.5rem);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(2.5rem);
		}
	}
`
