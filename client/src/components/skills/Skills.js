import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
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
	const nodes = [
		"tools",
		"design",
		"devops",
		"testing",
		"backend",
		"languages",
		"frontend",
	];
	const nodeRefs = nodes.map(() => React.createRef(null));
	const { scrollYProgress } = useScroll({ domTarget: skillsRef });

	const sectionData = [
		tools,
		design,
		devops,
		testing,
		backend,
		languages,
		frontend,
	];

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

	const [hoveredNode, setHoveredNode] = useState(null);
	const [isAnimated, setIsAnimated] = useState(false);
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

	const handleMouseEnter = (node) => {
		setHoveredNode(node.toLowerCase());
	};
	const handleMouseLeave = (node) => {
		setHoveredNode(null);
	};

	const totalNodes = 7;
	const angleStep = (2 * Math.PI) / totalNodes;
	const nodeRadii = [72.4, 85.6, 93.51, 87.31, 98.95, 116.66, 101.74];
	const centerX = containerDimensions.width / 2;
	const centerY = containerDimensions.height / 2;

	const calculatePosition = (index) => {
		const angle = angleStep * index;
		let xScale = 1;
		let yScale = 1;
		if (containerDimensions.width < 768) {
			xScale = 1;
			yScale = 1.8;
		}
		const radius =
			Math.min(containerDimensions.width, containerDimensions.height) / 3;
		return {
			x: Math.cos(angle) * radius * xScale,
			y: Math.sin(angle) * radius * yScale,
		};
	};

	const handleAnimate = () => {
		setIsAnimated((prev) => !prev);
	};

	const calculateSkillPosition = (nodeIndex, skillIndex, totalSkills) => {
		const nodePosition = calculatePosition(nodeIndex);
		const skillAngleStep = (2 * Math.PI) / totalSkills;
		const skillRadius = 50;
		const angle = skillAngleStep * skillIndex;

		
		console.log(nodePosition);
		return {
			x: nodePosition.x + Math.cos(angle) * skillRadius,
			y: nodePosition.y + Math.sin(angle) * skillRadius,
		};
	};

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ top: skillsY, opacity: opacity }}
		>
			<SkillsContent ref={contentRef}>
				<SkillsNode onClick={handleAnimate}>Skills</SkillsNode>

				{nodes.map((node, index) => (
					<React.Fragment key={node}>
						<Node
							key={index}
							ref={nodeRefs[index]}
							onMouseEnter={() =>
								handleMouseEnter(node.toLowerCase())
							}
							onMouseLeave={() =>
								handleMouseLeave(node.toLowerCase())
							}
							custom={index}
							initial={{
								opacity: 0,
								visibility: "visible",
								color: "#293030",
							}}
							animate={{
								opacity: isAnimated ? 1 : 0,
								color: isAnimated ? "#FFFFFF" : "#293030",
								x: isAnimated
									? calculatePosition(index).x + "px"
									: "0px",
								y: isAnimated
									? calculatePosition(index).y + "px"
									: "0px",
							}}
							transition={{
								duration: 0.1,
								ease: "easeOut",
							}}
						>
							{node}
							{hoveredNode === node.toLowerCase() && ((
								<Section>
									{sectionData[nodes.indexOf(hoveredNode)].map((skill, skillIndex) => {
										const skillPos = calculateSkillPosition(index, skillIndex, sectionData[nodes.indexOf(hoveredNode)].length);
										return (
											<Skill
												key={skillIndex}
												style={{
													transform: `translate(${skillPos.x}px, ${skillPos.y}px)`,
												}}
											>
												<img
													src={skill.icon}
													alt={skill.name}
												/>
												<p>{skill.name}</p>
											</Skill>
										);
									})}
								</Section>
							))}
						</Node>
						<motion.svg
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								zIndex: 0,
							}}
						>
							{nodes.map((node, index) => {
								const pos = calculatePosition(index);
								const angle = angleStep * index;
								const nodeRadiusAdjustment =
									nodeRadii[index] / 2;
								const adjustmentX =
									Math.cos(angle) * nodeRadiusAdjustment;
								const adjustmentY =
									Math.sin(angle) * nodeRadiusAdjustment;
								const x2 = centerX + pos.x - adjustmentX;
								const y2 = centerY + pos.y - adjustmentY;

								return (
									<motion.line
										key={node}
										x1={centerX}
										y1={centerY}
										x2={x2}
										y2={y2}
										stroke="var(--accent-color)"
										strokeWidth="2"
										initial={{
											pathLength: 0,
											strokeOpacity: 0,
										}}
										animate={{
											pathLength: isAnimated ? 1 : 0,
											strokeOpacity: isAnimated ? 1 : 0,
										}}
										transition={{
											duration: 0.1,
											ease: "easeOut",
										}}
									/>
								);
							})}
						</motion.svg>
					</React.Fragment>
				))}
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
	height: 90vh;
	margin: 8em auto;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
	border: 2px solid var(--accent-color);
`;

const SkillsNode = styled(motion.h2)`
	position: absolute;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid var(--accent-color);
	background: var(--card-background-color);
	padding: 40px;
	z-index: 100;
	cursor: pointer;
	transition: all 0.05s ease-in;
	&:hover {
		color: var(--accent-color);
	}
	&:focus {
		outline: none;
	}
`;

const Node = styled(motion.h4)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid var(--accent-color);
	background: var(--card-background-color);
	padding: 16px;
	z-index: 10;
	aspect-ratio: 1 / 1;
	text-transform: capitalize;
	cursor: pointer;
	transition: all 0.05s ease-in;
	&:hover {
		color: var(--accent-color);

		&::after {
			opacity: 1;
		}
	}
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: calc(100% + 8px);
		height: calc(100% + 8px);
		border-radius: 50%;
		border: 5px solid var(--button-inactive);
		opacity: 0;
		transition: opacity 0.1s ease-in, transform 0.1s ease-in;
		transform: translate(-50%, -50%) scale(1);
		box-sizing: border-box;
	}
`;

const Section = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.5s ease-out;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100000;
	}
	img {
		width: 5em;
		height: 5em;
	}
`;

const Skill = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5em;
	p {
		right: 0;
		font-size: 1.4rem;
	}
`;
