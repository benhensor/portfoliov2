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

	return (
		<SkillsSection
			id="skills"
			ref={skillsRef}
			style={{ left: skillsX, opacity: opacity }}
		>
			<SkillsContent>
				<Section>
                    {languages.map((language) => (
                        <div key={language.key}>
                            <img src={language.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {frontend.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {backend.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {testing.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {devops.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {design.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
				<Section>
                    {tools.map((skill) => (
                        <div key={skill.key}>
                            <img src={skill.icon} alt='' />
                        </div>
                    ))}
                </Section>
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
	background-color: #333;
	border-radius: 2rem;
	border: 2px solid #fff;
`;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
    img {
        width: 30px;
        height: 30px;
    }
`;
