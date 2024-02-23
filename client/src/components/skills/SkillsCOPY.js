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
	const sectionsTop = [
		{ name: "languages", data: languages },
		{ name: "frontend", data: frontend },
		{ name: "backend", data: backend },
	];
	const sectionsBottom = [
		{ name: "testing", data: testing },
		{ name: "devops", data: devops },
		{ name: "design", data: design },
		{ name: "tools", data: tools },
	];
	const sectionTopRefs = sectionsTop.map(() => React.createRef(null));
	const sectionBottomRefs = sectionsBottom.map(() => React.createRef(null));
	const { scrollYProgress } = useScroll({ domTarget: skillsRef });

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
	const [transitionProps, setTransitionProps] = useState({
		type: "spring",
		bounce: 0.85,
		stiffness: 1000,
		duration: 0.3,
		ease: "easeOut",
	});
	const [lineCoords, setLineCoords] = useState({
		topLine: { x1: 0, y1: 0, x2: 0, y2: 0 },
		bottomLine: { x1: 0, y1: 0, x2: 0, y2: 0 },
	});

	useEffect(() => {
		// Assuming SkillsNode is centered, calculate its center coordinates
		const skillsNodeX = contentRef.current
			? contentRef.current.offsetWidth / 2
			: 0;
		// Adjust centerY based on your layout specifics
		const skillsNodeY = contentRef.current
			? contentRef.current.offsetHeight / 2
			: 0;

		// Calculate positions for the first index of sectionsTop and the last of sectionsBottom
		const topSectionPos = calculatePosition(0, sectionsTop.length, true);
		const bottomSectionPos = calculatePosition(
			sectionsBottom.length - 1,
			sectionsBottom.length,
			false
		);

		setLineCoords({
			topLine: {
				x1: skillsNodeX,
				y1: skillsNodeY,
				x2: skillsNodeX + topSectionPos.x, // Adjust if necessary
				y2: skillsNodeY + topSectionPos.y, // Adjust if necessary
			},
			bottomLine: {
				x1: skillsNodeX,
				y1: skillsNodeY,
				x2: skillsNodeX + bottomSectionPos.x, // Adjust if necessary
				y2: skillsNodeY + bottomSectionPos.y, // Adjust if necessary
			},
		});
	}, [
		isAnimated,
		containerDimensions,
		sectionsTop.length,
		sectionsBottom.length,
	]);

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
		setHoveredNode(node);
	};
	const handleMouseLeave = () => {
		setHoveredNode(null);
	};

	const eighth = (containerDimensions.height - 200) / 8;

	const calculatePosition = (index, total, isAbove) => {
		const spacing = eighth;
		let y;
		if (isAbove) {
			y = -(total - index) * spacing - eighth * 1.3;
		} else {
			y = (index + 1) * spacing - eighth / 1.5;
		}
		return { x: 0, y };
	};

	const handleAnimate = () => {
		if (!isAnimated) {
			setIsAnimated(true);
			setTransitionProps({
				type: "spring",
				bounce: 0.1,
				stiffness: 1000,
				duration: 0.1,
				ease: "easeOut",
			});
		} else {
			setIsAnimated(false);
			setTransitionProps({
				type: "none",
				bounce: 0.8,
				stiffness: 1000,
				duration: 0.1,
				ease: "easeOut",
			});
		}
	};

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ top: skillsY, opacity: opacity }}
		>
			<SkillsContent ref={contentRef}>
				{sectionsTop.map((section, index) => (
					<Section
						key={section.name}
						ref={sectionTopRefs[index]}
						onMouseEnter={() => handleMouseEnter(section.name)}
						onMouseLeave={handleMouseLeave}
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
								? calculatePosition(
										index,
										sectionsTop.length,
										true
								  ).x + "px"
								: 0,
							y: isAnimated
								? calculatePosition(
										index,
										sectionsTop.length,
										true
								  ).y + "px"
								: 0,
						}}
						transition={transitionProps}
					>
						<h2>{section.name}</h2>
					</Section>
				))}
				<SkillsNode onClick={handleAnimate} eighth={eighth}>
					Skills
				</SkillsNode>
				{sectionsBottom.map((section, index) => (
					<Section
						key={section.name}
						ref={sectionBottomRefs[index]}
						onMouseEnter={() => handleMouseEnter(section.name)}
						onMouseLeave={handleMouseLeave}
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
								? calculatePosition(
										index,
										sectionsBottom.length,
										false
								  ).x + "px"
								: 0,
							y: isAnimated
								? calculatePosition(
										index,
										sectionsBottom.length,
										false
								  ).y + "px"
								: 0,
						}}
						transition={transitionProps}
					>
						<h2>{section.name}</h2>
					</Section>
				))}
				<motion.svg
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
					}}
				>
					<motion.line
						{...lineCoords.topLine}
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
						transition={transitionProps}
					/>
					<motion.line
						{...lineCoords.bottomLine}
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
						transition={transitionProps}
					/>
				</motion.svg>
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
	justify-content: center;
	align-items: center;
	position: relative;
	border: 2px solid var(--accent-color);
`;

const SkillsNode = styled(motion.h2)`
	position: absolute;
	top: calc(50% - ${(props) => props.eighth}px);
	left: 50%;
	transform: translate(-50%, -50%);
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid var(--accent-color);
	background: var(--card-background-color);
	padding: 30px;
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

const Section = styled(motion.div)`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	text-transform: capitalize;
	cursor: pointer;
	transition: all 0.05s ease-in;
	h2 {
		border: 2px solid var(--accent-color);
		background: var(--card-background-color);
		padding: 4px 16px;
		border-radius: 8px;
		font-size: 1.6rem;
	}
	&:hover {
		h2 {
			color: var(--border-color);
		}
	}
`;

const Modal = styled(motion.div)`
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
