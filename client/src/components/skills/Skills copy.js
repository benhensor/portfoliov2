import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
	motion,
	useTransform,
	useScroll,
	AnimatePresence,
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
	const { scrollYProgress } = useScroll({ domTarget: skillsRef });

	const [hoverState, setHoverState] = useState({
		languages: false,
		frontend: false,
		backend: false,
		testing: false,
		devops: false,
		design: false,
		tools: false,
	});

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

	const handleMouseEnter = (section) => {
		setHoverState((prev) => ({ ...prev, [section]: true }));
	};

	const handleMouseLeave = (section) => {
		setHoverState((prev) => ({ ...prev, [section]: false }));
	};

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ left: skillsX, opacity: opacity }}
		>
			<SkillsContent>
				{[
					{ name: "Languages", data: languages },
					{ name: "Frontend", data: frontend },
					{ name: "Backend", data: backend },
					{ name: "Testing", data: testing },
					{ name: "DevOps", data: devops },
					{ name: "Design", data: design },
					{ name: "Tools", data: tools },
				].map((section) => (
					<Section
						key={section.name}
						onMouseEnter={() =>
							handleMouseEnter(section.name.toLowerCase())
						}
						onMouseLeave={() =>
							handleMouseLeave(section.name.toLowerCase())
						}
					>
						<AnimatePresence mode="wait">
							{!hoverState[section.name.toLowerCase()] ? (
								<motion.h2
									key={`${section.name}-title`}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									{section.name}
								</motion.h2>
							) : (
								<motion.div
									key={`${section.name}-content`}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
									style={{ display: "flex", gap: "2em" }}
								>
									{section.data.map((skill, index) => (
										<motion.div key={index}>
											<img
												src={skill.icon}
												alt={skill.name}
											/>
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</Section>
				))}
			</SkillsContent>
		</SkillsSection>
	);
}

const SkillsSection = styled(motion.section)`
	position: fixed;
	left: 0;
	top: 8em;
	width: 100%;
	height: 40em;
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease-out;
	img {
		width: 5em;
		height: 5em;
	}
`;
