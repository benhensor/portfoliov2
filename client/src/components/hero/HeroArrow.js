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
	top: 10em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 10rem;
	opacity: 0.2;
	width: 3.5rem;
	height: 6rem;
	border: 3px solid #fff;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
	transition: all .12s;
	&:hover {
		opacity: 0.4;
	}
`

const Arrows = styled.div`
	position: relative;
	top: 5px;
	display: flex;
	flex-direction: column;
	color: var(--text-color);
	height: 80%;
	transition: all .12s;
	&:hover {
		gap: .5rem;
	}
`

const Arrow = styled(FaChevronDown)`
	position: relative;
	font-size: 1.2rem;
	animation: arrow 2s infinite ease-in-out;
	&:nth-child(1) {
		top: 10px;
	}
	&:nth-child(2) {
		animation-delay: -0.2s;
	}
	&:nth-child(3) {
		bottom: 10px;
		animation-delay: -0.4s;
	}
	@keyframes arrow {
		0% {
			opacity: 0;
			transform: translateY(-2rem);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(2rem);
		}
	}
`
