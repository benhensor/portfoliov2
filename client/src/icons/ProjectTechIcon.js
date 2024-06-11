import React from 'react'
import styled from 'styled-components'

export default function ProjectTechIcon({ icon }) {

  return (
    <StyledIcon>
      <img src={icon.icon} alt={icon.name} />
      <p>{icon.name}</p>
    </StyledIcon>
  )
}

const StyledIcon = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
	border-radius: 5px;
	background-color: #232a2f99;
	backdrop-filter: blur(5px);
	border-top: 2px solid #2d363c;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	img {
		width: 3em;
		height: 3em;
	}
	p {
		color: var(--text-color);
		font-size: 1.2rem;
		white-space: nowrap;
	}
	@media screen and (max-width: 768px) {
		width: 7rem;
		gap: 0.5rem;
		img {
			width: 2em;
			height: 2em;
		}
		h3 {
			color: var(--text-color);
			font-size: 0.7rem;
			white-space: nowrap;
		}
	}
`