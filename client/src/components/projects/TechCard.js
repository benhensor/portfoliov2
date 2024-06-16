import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function TechCard({ tech }) {
  return (
    <Container>
      <Icon>
				<img src={tech.icon} alt={tech.name} />
				<Name>{tech.name}</Name>
			</Icon>
    </Container>
  )
}

const Container = styled(motion.div)`
	aspect-ratio: 1/1;
	width: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	@media screen and (max-width: 768px) {
		width: 7rem;
		height: 7rem;
		gap: 0.5rem;
	}
	@media screen and (max-width: 450px) {
		width: 5rem;
		height: 5rem;
	}
`

const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	img {
		width: 5rem;
		height: 5rem;
		@media screen and (max-width: 768px) {
		width: 4rem;
		height: 4rem;
	}
	@media screen and (max-width: 450px) {
		width: 3rem;
		height: 3rem;
	}
	}
`

const Name = styled.p`
	color: var(--text-color);
	font-size: clamp(0.8rem, 2vw, 1rem);
	white-space: nowrap;
`