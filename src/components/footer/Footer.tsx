import React from "react";
import { styled } from "styled-components";
import { colors } from "../../core/constants/styleguide.const";
import Telegram from "../../assets/webroot/img/index/telegram.svg";
import Twitter from "../../assets/webroot/img/index/twitter.svg";
import Facebook from "../../assets/webroot/img/index/facebook.svg";
import Youtube from "../../assets/webroot/img/index/youtube.svg";
import Discord from "../../assets/webroot/img/index/discord.svg";

const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterText>Copyright © 2022 GVV. All Rights Reserved.</FooterText>
        <FooterAction>
          <img src={Telegram} style={{ cursor: "pointer" }}></img>
          <img src={Twitter} style={{ cursor: "pointer" }}></img>
          <img src={Facebook} style={{ cursor: "pointer" }}></img>
          <img src={Youtube} style={{ cursor: "pointer" }}></img>
          <img src={Discord} style={{ cursor: "pointer" }}></img>
        </FooterAction>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161617;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 30px;
  width: 80%;
  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const FooterText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  gap: 30px;
  color: white;
  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const FooterAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 0px 20px;
  gap: 30px;
  color: white;
  @media (max-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`;

export default Footer;
