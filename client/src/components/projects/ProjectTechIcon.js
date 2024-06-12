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

const StyledIcon = styled.li`
  display: flex;
	justify-content: center;
	align-items: center;
  padding: 0.5rem 2rem;
	border-radius: 5px;
	background-color: #0c0f1199;
	backdrop-filter: blur(5px);
	border-top: 2px solid #2d363c;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.6);
	img {
		width: 1.5em;
		height: 1.5em;
    margin-right: 0.875rem;
	}
	p {
		color: var(--text-color);
		font-size: 1.2rem;
		white-space: nowrap;
	}
	@media screen and (max-width: 768px) {
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