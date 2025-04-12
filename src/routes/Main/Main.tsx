import * as S from './Main.style';
import { useEffect, useRef, useState } from 'react';
import { theme } from '@/styles/theme';
import { APP_STORE_LINK, GOOGLE_PLAY_LINK } from '../../constants/links';
import mainLogo from '../../assets/img/mainLogo.png';
import noticeIcon from '../../assets/img/notice.png';
import appleIcon from '../../assets/icon/appleLogo.svg';
import googlePlayIcon from '../../assets/icon/googlePlayLogo.svg';
import decoFirst from '../../assets/img/decoFirst.png';
import decoSecond from '../../assets/img/decoSecond.png';
import decoThird from '../../assets/img/decoThird.png';

function Main() {

	const textRef = useRef<HTMLParagraphElement>(null);
	const [textWidth, setTextWidth] = useState<number>(0);


	// 헤더용 사용 예정
	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	// 		setIsScrolled(scrollPosition > 10);
	// 	};

	// 	// 초기 스크롤 상태 확인
	// 	handleScroll();

	// 	// 이벤트 리스너 등록
	// 	window.addEventListener('scroll', handleScroll, { passive: true });

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	useEffect(() => {
		if (textRef.current) {
			const width = textRef.current.offsetWidth;
			setTextWidth(width);
		}
	}, []);

	return (
		<S.OuterContainer>
			<S.MainContainer>
				<S.MainDecoration src={decoFirst} order={1} />
				<S.MainDecoration src={decoSecond} order={2} />
				<S.MainDecoration src={decoThird} order={3} />

				<S.BubbleContainer width={textWidth}>
					<S.Bubble order={'left'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>[공모전] 키워드 알림이 도착했어요!</S.BubbleText>
					</S.Bubble>
					<S.Bubble order={'right'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>[장학] 키워드 알림이 도착했어요!</S.BubbleText>
					</S.Bubble>
					<S.Bubble order={'center'}>
						<S.BubbleIcon src={noticeIcon} alt="icon" />
						<S.BubbleText>&nbsp;</S.BubbleText>
					</S.Bubble>
				</S.BubbleContainer>

				<S.MainText ref={textRef}>
					우리 학교 공지를 가장 빠르게<span style={{ color: theme.COLOR.Yellow }}>.</span>
				</S.MainText>
				<S.MainLogo src={mainLogo} width={textWidth} />

				<S.DownloadContainer>
					<S.DownloadButton href={APP_STORE_LINK} target="_blank">
						<S.DownloadLogo src={appleIcon} alt="App Store" />
						App Store
					</S.DownloadButton>

					<S.DownloadButton href={GOOGLE_PLAY_LINK} target="_blank">
						<S.DownloadLogo src={googlePlayIcon} alt="Google Play" />
						Google Play
					</S.DownloadButton>
				</S.DownloadContainer>
			</S.MainContainer>

			<S.Section>
				
			</S.Section>
		</S.OuterContainer>
	);
}

export default Main;
