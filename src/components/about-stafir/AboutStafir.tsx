import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubTitle from "../sub-title/SubTitle";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import BackGroundImage from "../../assets/webroot/img/front/bg_of_blue_part.png";
import { ButtonPrimarySmall } from "../styleguide/styleguide";

const HowItWorks = () => {
  const elemRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={elemRef}>
      <SubTitle subtitle={`ABOUT STAFIR`} isWhite={false} />
      <MainTips>
        <Content>
          {`The business to business networking website to offer trading between companies like trading, manufacturing, wholesalers, retailers, contractors except government organizations. Companies can exchange between wide range of products & offered services.`}
        </Content>
      </MainTips>
			<StyledButton>
				{`About Us`}
			</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${BackGroundImage});
  background-size: cover;
	padding: 20px 0px;
`;

const MainTips = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 80%;
  }
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${colors.neutrals8};
`;

const StyledButton = styled(ButtonPrimarySmall)`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 47px;
  width: 128px;
  background: ${colors.neutrals8};
  font-family: Calibri;
	color: ${colors.middleBlue};
	font-size: 20px;
`;

export default HowItWorks;
