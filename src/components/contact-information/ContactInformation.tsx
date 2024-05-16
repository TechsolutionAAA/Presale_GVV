import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styled from "styled-components";

import Logo from "../../assets/webroot/img/index/Logo.png";
import Telegram from "../../assets/webroot/img/index/telegram.png";
import Twitter from "../../assets/webroot/img/index/twitter.png";
import Facebook from "../../assets/webroot/img/index/facebook.png";
import Youtube from "../../assets/webroot/img/index/youtube.png";
import Global from "../../assets/webroot/img/index/Rectangle1.png";
import Triangle from "../../assets/webroot/img/index/Rectangle2.png";
import Discord from "../../assets/webroot/img/index/discord.png";
import AddressSrc from "../../assets/webroot/img/front/location_ins.png";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import { ButtonPrimarySmall } from "../styleguide/styleguide";
const ContactInformation = () => {
  return (
    <Container>
      <StyledGlobalImage src={Global}></StyledGlobalImage>
      <StyledTriImage src={Triangle}></StyledTriImage>
      <img src={Logo} alt=""></img>
      <StyledDiv>
        <StyledDescription>
          {`Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally`}
        </StyledDescription>
        <StyledContactInfo>
          <StyledEmailDiv>
            <StyledEmail placeholder="Your Email Address ... "></StyledEmail>
          </StyledEmailDiv>
          <StyledSubscribeButton>{`Subscribe`}</StyledSubscribeButton>
        </StyledContactInfo>
        <StyledSocialDiv>
          <img src={Telegram}></img>
          <img src={Twitter}></img>
          <img src={Facebook}></img>
          <img src={Youtube}></img>
          <img src={Discord}></img>
        </StyledSocialDiv>
      </StyledDiv>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryYellow};
  gap: 100px;
  padding-bottom: 30px;
  padding-bottom: 100px;
  @media (max-width: 924px) {
    padding: 40px;
  }
`;

const StyledDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 772px) {
    width: 100%;
  }
`;

const StyledDescription = styled.p`
  font-family: ABeeZee;
  color: ${colors.mainColor};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 772px) {
    flex-direction: column;
    width: 300px;
  }
`;

const StyledSubscribeButton = styled(ButtonPrimarySmall)`
  border-radius: 0px;
  border: solid 1px ${colors.mainColor};
  background-color: ${colors.mainColor};
  color: ${colors.primaryYellow};
  font-style: italic;
  height: 50px;
  &:hover {
    background-color: ${colors.primaryYellow};
    color: ${colors.mainColor};
    font-style: italic;
  }
`;

const StyledGlobalImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: 200px;
  filter: brightness(20%);
  @media (max-width: 924px) {
    display: none;
  }
`;

const StyledTriImage = styled.img`
  position: absolute;
  top: 0px;
  right: 200px;
  filter: brightness(20%);
  @media (max-width: 924px) {
    display: none;
  }
`;

const StyledSocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledEmailDiv = styled.div`
  padding-left: 20px;
  width: 318px;
  height: 50px;
  border: solid 1px ${colors.mainColor};
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 924px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const StyledEmail = styled.input`
  background-color: ${colors.primaryYellow};
  border: none;
  color: ${colors.mainColor};
`;
export default ContactInformation;
