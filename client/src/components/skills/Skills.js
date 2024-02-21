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
		"Languages",
		"Frontend",
		"Backend",
		"Testing",
		"DevOps",
		"Design",
		"Tools",
	];
	const nodeRefs = nodes.map(() => React.createRef(null));
	const { scrollYProgress } = useScroll({ domTarget: skillsRef });

	const skillsX = useTransform(
		scrollYProgress,
		[0, 0.2, 0.25, 0.4],
		["-100%", "0%", "0%", "100%"]
	);

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.2, 0.25, 0.4],
		["0", "1", "1", "0"]
	);

	const [hoverState, setHoverState] = useState({
		languages: false,
		frontend: false,
		backend: false,
		testing: false,
		devops: false,
		design: false,
		tools: false,
	});

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

	const handleMouseEnter = (section) => {
		setHoverState((prev) => ({ ...prev, [section]: true }));
	};
	const handleMouseLeave = (section) => {
		setHoverState((prev) => ({ ...prev, [section]: false }));
	};

	const totalNodes = 7;
	const angleStep = (2 * Math.PI) / totalNodes;
	const nodeRadii = [116.66, 101.74, 98.95, 87.31, 93.51, 85.6, 72.4];
	const centerX = containerDimensions.width / 2;
	const centerY = containerDimensions.height / 2;

	const calculatePosition = (index) => {
		const angle = angleStep * index;
		const radius =
			Math.min(containerDimensions.width, containerDimensions.height) / 3;
		return {
			x: Math.cos(angle) * radius,
			y: Math.sin(angle) * radius,
		};
	};

	const handleAnimate = () => {
		setIsAnimated((prev) => !prev);
	};

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ left: skillsX, opacity: opacity }}
		>
			<SkillsContent ref={contentRef}>
				<SkillsNode onClick={handleAnimate}>Skills</SkillsNode>

				{nodes.map((node, index) => (
					<>
						<Node
							key={index}
							ref={nodeRefs[index]}
							custom={index}
							initial={{ opacity: 0, visibility: "visible" }}
							animate={{
								opacity: isAnimated ? 1 : 0,
								x: isAnimated
									? calculatePosition(index).x + "px"
									: "0px",
								y: isAnimated
									? calculatePosition(index).y + "px"
									: "0px",
							}}
							transition={{
								type: "spring",
								bounce: 0.6,
								duration: 0.5,
								ease: "easeOut",
							}}
						>
							{node}
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
								const nodeRadiusAdjustment = nodeRadii[index] / 2;
								const adjustmentX = Math.cos(angle) * nodeRadiusAdjustment;
								const adjustmentY = Math.sin(angle) * nodeRadiusAdjustment;
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
											type: "spring",
											bounce: 0.8,
											duration: 0.5,
											ease: "easeOut",
										}}
									/>
								);
							})}
						</motion.svg>
					</>
				))}
			</SkillsContent>
		</SkillsSection>
	);
}

const SkillsSection = styled(motion.section)`
	position: fixed;
	left: 0;
	top: 4em;
	width: 100%;
	height: 40em;
    user-select: none;
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`;

const SkillsContent = styled.div`
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
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
	&:hover {
		color: var(--accent-color);
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
	padding: 1em;
	z-index: 10;
    aspect-ratio: 1 / 1;
	cursor: pointer;
	&:hover {
		color: var(--accent-color);
	}
`;

// const Section = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	transition: all 0.5s ease-out;
// 	img {
// 		width: 5em;
// 		height: 5em;
// 	}
// `;
