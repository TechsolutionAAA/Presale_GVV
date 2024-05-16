import { styled } from "styled-components";

import PCSrc from "../../../assets/webroot/img/front/feature/pc_image.png";
import PCShineSrc from "../../../assets/webroot/img/front/feature/pc_shine_img.png";
import { RESPONSIVE } from "../../../core/constants/responsive.const";

interface Props {
	imgSrc: string;
	className: string;
}

const PC = ( props: Props ) => {
	const { imgSrc, className } = props;
	return (
		<Container className={className}>
			<StyledContent src={imgSrc}/>
			<StyledShine src={PCShineSrc} />
		</Container>
	);
}

const Container = styled.div`
	justify-content: center;
	position: relative;
	background-image: url(${PCSrc});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	width: 300px;
	height: 250px;
	justify-content: center;
	@media screen and (min-width: ${RESPONSIVE.tablet}){
		
	width: 451px;
	height: 396px;
	}
`;

const StyledShine = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
`;

const StyledContent = styled.img`
	width: 92%;
	height: 160px;
	margin-top: 10px;
	@media screen and (min-width: ${RESPONSIVE.tablet}) {
		height: 225px;
	margin-top: 20px;
	}
`;

export default PC;