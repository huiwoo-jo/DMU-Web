import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const OuterContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
	overscroll-behavior: none;
`;

export const MainContainer = styled.section`
	background: linear-gradient(to bottom, #95a7ee 0%, #4967e2 31%, #354dae 100%);
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	color: white;
	padding: 3rem;
	padding-bottom: 10%;

	@media (max-width: 768px) {
		padding-bottom: 15%;
	}

	@media (max-width: 480px) {
		padding-bottom: 30%;
	}
`;

export const MainDecoration = styled.img<{ order: 1 | 2 | 3 }>`
	position: absolute;
	opacity: 0.2;
	z-index: 1;

	${({ order }) => {
		const widthMap = {
			1: '8rem',
			2: '9rem',
			3: '15rem',
		};

		const topMap = {
			1: '-2%',
			2: '26%',
			3: '54%',
		};

		const leftMap = {
			1: '25%',
			2: '66%',
			3: '24%',
		};

		const filterMap = {
			1: 'blur(5px)',
			2: 'blur(8px)',
			3: 'blur(8px)',
		};

		return `
      width: ${widthMap[order]};
      top: ${topMap[order]};
      left: ${leftMap[order]};
	  filter: ${filterMap[order]};
    `;
	}}
`;

export const BubbleContainer = styled.div<{ width?: number }>`
	width: ${({ width }) => (width ? `${width + 150}px` : 'auto')};
	left: 50%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-top: 3rem;
	margin-bottom: 5rem;

	@media (max-width: 768px) {
		width: ${({ width }) => (width ? `${width + 140}px` : 'auto')};
	}

	@media (max-width: 480px) {
		width: ${({ width }) => (width ? `${width + 130}px` : 'auto')};
	}
`;

export const Bubble = styled.div<{ order: 'left' | 'center' | 'right' }>`
	width: fit-content;
	min-width: 420px;
	background-color: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(4px);
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	margin-left: ${({ order }) => {
		if (order === 'left') {
			return '0';
		} else if (order === 'center') {
			return 'auto';
		} else if (order === 'right') {
			return 'auto';
		}
	}};

	margin-right: ${({ order }) => (order === 'right' ? '0' : 'auto')};

	@media (max-width: 768px) {
		min-width: 370px;
	}

	@media (max-width: 480px) {
		min-width: 300px;
	}
`;

export const BubbleText = styled.text`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${theme.COLOR.White};

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}

	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const BubbleIcon = styled.img`
	width: 2rem;
	height: 2rem;
`;

export const MainText = styled.p`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 1.9rem;
	}

	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const MainLogo = styled.img<{ width?: number }>`
	width: ${({ width }) => (width ? `${width}px` : 'auto')};
	margin-bottom: 3rem;
`;

export const DownloadContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const DownloadButton = styled.a`
	background-color: white;
	color: ${theme.COLOR.Blue400};
	padding: 0.8rem 1rem;
	border-radius: 1rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	font-weight: 600;
	border: 2px solid transparent;
	cursor: pointer;
	gap: 0.5rem;

	&:hover {
		color: white;
		background-color: ${theme.COLOR.Blue400};
		border: 2px solid white;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media (max-width: 480px) {
		font-size: 1rem;
	}
`;

export const DownloadLogo = styled.img`
	width: 3rem;
	height: 3rem;
	${DownloadButton}:hover & {
		filter: brightness(0) invert(1);
	}
`;

export const Section = styled.div `
	background: white;
	width: 100vw;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	padding: 4rem 0rem;
	text-align: center;
`;

export const SectionCategory = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
	color: ${theme.COLOR.Blue400};
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 480px) {
		font-size: 1.1rem;
		margin-bottom: 0.8rem;
	}
`;

export const SectionTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${theme.COLOR.Text};
  	line-height: 1.2;
	margin-bottom: 1.7rem;

	@media (max-width: 768px) {
		font-size: 1.8rem;
		margin-bottom: 2.4rem;
	}

	@media (max-width: 480px) {
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
	}
`;

export const SectionSubtitle = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	color: ${theme.COLOR.Gray400};
  	line-height: 1.2;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		font-size: 1.7rem;
	}

	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const SectionImg = styled.img`
	object-fit: cover;
	object-position: left;
	margin-left: 20vw;
	min-height: 50vh;
`;
