import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function TechCard({ tech }) {
  return (
    <Container>
      <Icon src={tech.icon} alt={tech.name} />
      <Name>{tech.name}</Name>
    </Container>
  )
}

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	@media screen and (max-width: 768px) {
		width: 7rem;
		height: 7rem;
		gap: 0.5rem;
	}
`

const Icon = styled.img`
	max-width: 3em;
	max-height: 3em;
`

const Name = styled.p`
	color: var(--text-color);
	font-size: 1rem;
	white-space: nowrap;
	margin: 0;
	padding: 0;
`