import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContent = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const BGWord = styled.span`
	position: absolute;
	top: 20rem;
	left: 30rem;
	transform: translate(-50%, -50%);
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		top: 50%;
		left: 50%;
	}
`

export const TextContainer = styled(motion.div)`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		color: var(--orange);
		span {
			color: var(--orange);
		}
	}
	h2 {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
		color: var(--ltOrange);
	}
	p {
		font-size: clamp(1rem, 3vw, 1.6rem);
		margin-bottom: 1.6rem;
		color: var(--text-color-md);
	}
	div {}
	button {
		margin: 2rem 2rem 0 0;
		padding: 1rem 2rem;
		font-size: 1.6rem;
		font-weight: 700;
		background: var(--orange);
		color: var(--text-color-dk);
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.1s ease;
		&:hover {
			background: var(--ltOrange);
			color: var(--text-color-dk);
		}
	}
	@media screen and (max-width: 768px) {
		text-align: center;
		padding: 0 5rem;
	}
`

export const ImageContainer = styled(motion.div)`
	z-index: -1;
	min-width: 35rem;
	height: 35rem;
	margin-left: 2rem;
	border: 2px solid var(--orange);
	border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
	background: #000;
	animation: morph 10s linear infinite alternate;
	@keyframes morph {
		0% {
			border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
		}
		100% {
			border-radius: 40% 60%;
		}
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 4rem;
		min-width: 23rem;
		height: 23rem;
	}
	@media screen and (max-width: 546px) {
		min-width: 15rem;
		height: 15rem;
		margin-top: 5rem;
		margin-bottom: 2rem;
	}
`

export const Image = styled.img`
	width: 25rem;
	height: auto;
	object-position: center;
	position: relative;
	top: -2.7em;
	left: 2.5em;
	@media screen and (max-width: 768px) {
		top: -2.5em;
		left: 2.5em;
		width: 15rem;
	}
	@media screen and (max-width: 546px) {
		top: -2rem;
		left: 2rem;
		width: 10rem;
	}
`
