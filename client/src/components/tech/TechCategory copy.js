import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

export default function TechCategory({
	title,
	skillSet,
	scrollYProgress,
	isHovered,
	onHover,
	onHoverLeave,
}) {

	useEffect(() => {
		console.log('isHovered:', isHovered)
	}, [isHovered])

	
	const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.35, 0.4], [0, 1, 1, 0])
	const categoryFilter = useTransform(
		scrollYProgress,
		[0.15, 0.25, 0.3, 0.4],
		['blur(10px', 'blur(0px)', 'blur(0px)', 'blur(10px']
	)
	const letterSpacing = useTransform(
		scrollYProgress,
		[0.2, 0.25, 0.3, 0.375],
		['0rem', '1rem', '2rem', '4rem']
	)


	return (
		<TechSection
			layout
			onMouseEnter={onHover}
			onMouseLeave={onHoverLeave}
			$ishovered={isHovered}
			style={{ opacity: opacity, filter: categoryFilter }}
		>
			<motion.h2
				layout="position" // restricts the layout change to position only
				style={{ letterSpacing: letterSpacing }}
			>
				{title}
			</motion.h2>
			{isHovered && (
				<motion.div>
					{skillSet.map((skill, index) => {
						const totalDelay = (skillSet.length - 1) * 0.05
						const exitDelay = totalDelay - index * 0.05
						return (
							<TechCard
								key={skill.name}
								initial={{ opacity: 0, x: '-100%' }}
								animate={{
									opacity: 1,
									x: '0%',
								}}
								exit={{
									opacity: 0,
									x: '100%',
									transition: {
										duration: 0.3,
										delay: exitDelay,
									}, // Apply exit delay here
								}}
								transition={{
									opacity: {
										duration: 0.3,
										delay: index * 0.05,
									},
									x: { duration: 0.3, delay: index * 0.05 },
								}}
							>
								<img src={skill.icon} alt={skill.name} />
								<h3>{skill.name}</h3>
							</TechCard>
						)
					})}
				</motion.div>
			)}
		</TechSection>
	)
}

const TechSection = styled(motion.section)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
    &:hover {
        cursor: pointer;
    }
	h2 {
		text-transform: uppercase;
		color: ${(props) => (props.$ishovered ? 'var(--blue)' : 'var(--text-color)')};
		text-align: center;
        transition: color 0.3s ease;
		@media screen and (max-width: 768px) {
			font-size: 1.5rem;
		}
	}
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`

const TechCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 10rem;
	padding: 1rem;
	border-radius: 5px;
	background-color: #232a2f;
	border-top: 2px solid #2d363c;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	img {
		width: 3em;
		height: 3em;
	}
	h3 {
		color: var(--text-color);
		font-size: 1rem;
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
