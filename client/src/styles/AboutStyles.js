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
	top: 5rem;
	left: 5rem;
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		width: 100%;
		top: 60%;
		left: 0;
		text-align: center;
	}
`

export const TextContainer = styled(motion.div)`
	position: relative;
	z-index: 1;
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
