import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {
	motion,
	useTransform,
	useScroll,
} from "framer-motion";
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from "../../data";

export default function Skills() {
	const skillsRef = useRef(null);
	const contentRef = useRef(null);
	const { scrollYProgress } = useScroll({ domTarget: skillsRef });

	const [isExpanded, setIsExpanded] = useState(false);
	const [hoveredSection, setHoveredSection] = useState(null);
	const [containerDimensions, setContainerDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const updateDimensions = () => {
			if (contentRef.current) {
				const dimensions = contentRef.current.getBoundingClientRect();
				setContainerDimensions({
					width: dimensions.width,
					height: dimensions.height,
				});
			}
		};
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const skillsY = useTransform(
		scrollYProgress,
		[0, 0.2, 0.25, 0.3],
		["200%", "0%", "0%", "-100%"]
	);

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.25, 0.27],
		["0", "1", "1", "0"]
	);

	const handleSkillsNodeClick = () => {
		setIsExpanded((prev) => !prev);
		console.log("Skills Node Clicked", isExpanded);
	};

	const handleMouseEnter = (section) => {
		setHoveredSection(section);
		console.log("Hello");
	};

	const handleMouseLeave = () => {
		setHoveredSection(null);
	};

	const SkillCategory = ({ section, data, initial, animate }) => {
		return (
			<Section
				onMouseEnter={() => handleMouseEnter(section)}
				onMouseLeave={() => handleMouseLeave()}
				initial={initial}
				animate={animate}
			>
				<h2>{section}</h2>
				{hoveredSection === section ? (
					<SkillsBox>
						<ArrowDiv></ArrowDiv>
						<ArrowCover></ArrowCover>
						{data.map((item, index) => (
							<Skill key={index}>
								<img src={item.icon} alt={item.name} />
								<h3>{item.name}</h3>
							</Skill>
						))}
					</SkillsBox>
				) : null}
			</Section>
		);
	};

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ top: skillsY, opacity: opacity }}
		>
			<SkillsContent ref={contentRef}>
				<SkillCategory
					section="Languages"
					data={languages}
				/>
				<SkillCategory 
					section="Frontend" 
					data={frontend}
				/>
				<SkillCategory 
					section="Backend" 
					data={backend}
				/>
				<SkillsNode onClick={handleSkillsNodeClick}>Skills</SkillsNode>
				<SkillCategory 
					section="Testing" 
					data={testing}
				/>
				<SkillCategory 
					section="DevOps" 
					data={devops}
				/>
				<SkillCategory 
					section="Design" 
					data={design}
				/>
				<SkillCategory
					section="Tools" 
					data={tools}
				/>
			</SkillsContent>
		</SkillsSection>
	);
}

const SkillsSection = styled(motion.section)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`;

const SkillsContent = styled.div`
	max-width: 1000px;
	height: 80vh;
	margin: 8em auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border: 2px solid var(--accent-color);

`;

const SkillsNode = styled(motion.h2)`
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid var(--accent-color);
	background: var(--card-background-color);
	padding: 40px;
	z-index: 0;
	cursor: pointer;
	transition: all 0.05s ease-in;
	&:hover {
		color: var(--accent-color);
	}
	&:focus {
		outline: none;
	}
`;

const Section = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease-out;
	margin: 2rem 0;
	z-index: 1;
	h2 {
		border: 2px solid var(--accent-color);
		background: var(--card-background-color);
		padding: 4px 16px;
		border-radius: 8px;
		font-size: 2rem;
	}
	img {
		width: 5em;
		height: 5em;
	}
`;

const SkillsBox = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid var(--accent-color);
	background: var(--card-background-color);
	border-radius: 8px;
	position: relative;
	margin: 3rem 0 2rem 0;
	padding: 2rem;
	gap: 2rem;
	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		width: 100%;
		padding: 1rem 2rem;
		margin: 3rem 0 1rem 0;
	}
`;

const ArrowDiv = styled.div`
	position: absolute;
	left: 50%;
	top: -1rem;
	transform: translateX(-50%) rotate(45deg);
	width: 4rem;
	height: 4rem;
	background: var(--card-background-color);
	border: 2px solid var(--accent-color);
	z-index: -2;
`;

const ArrowCover = styled.div`
	position: absolute;
	left: 50%;
	top: -0.75rem;
	transform: translateX(-50%) rotate(45deg);
	width: 4rem;
	height: 4rem;
	background: #282f2f;
	z-index: 1;
`;

const Skill = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	z-index: 2;
	img {
		width: 5rem;
		height: 5rem;
	}
	h3 {
		font-size: 1.2rem;
		color: var(--text-color-md);
	}
`;
