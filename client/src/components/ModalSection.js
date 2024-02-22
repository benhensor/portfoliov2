import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ModalAlertContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const ModalContent = styled.div`
	background-color: var(--background-static);
	width: 80%;
	max-width: 500px;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function ModalSection({ show, onClose, children }) {
	if (!show) return null;

	return (
		<ModalAlertContainer
			onClick={onClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}
			exit={{ opacity: 0 }}
		>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				{children}
			</ModalContent>
		</ModalAlertContainer>
	);
}
