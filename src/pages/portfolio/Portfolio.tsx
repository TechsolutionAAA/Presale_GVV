import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/portfolio-card/Card";
import RdioChat from "../../assets/webroot/img/index/RadioChat.svg";
import { colors } from "../../core/constants/styleguide.const";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ChartComponent from "../../components/Chart/Chart";

const Portfolio = () => {
  return (
    <>
      <Header />
      <GVVIndexContainer>
        <LeftPart>
          <LeftTopButton>$GVV Overview</LeftTopButton>
          <Card />
        </LeftPart>
        <CenterPart>
          <CenterTitle>
            $GVV STAKING <br />
            ACCOUT BALANCE
          </CenterTitle>
          <CountTitle>$GVV 500,000</CountTitle>
          <CenterContent>
            <ContentLeft>
              Profits ( 1 month ) +<GreenText>165%</GreenText>
            </ContentLeft>
            <ContentRight>$GVV 1000</ContentRight>
          </CenterContent>
          <CenterContent>
            <ContentLeft>Withdraw in Progress</ContentLeft>
            <ContentRight>$GVV 10</ContentRight>
          </CenterContent>
          <CenterContent></CenterContent>
          <CenterAction>
            <LeftButton>STAKE $GVV</LeftButton>
            <RightButton>WITHDRAW $GVV</RightButton>
          </CenterAction>
          <RadioChatImg src={RdioChat} />

          <CardGroup>
            <CardColor style={{ backgroundColor: "#093679" }} />
            55% Staked
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#CBFB45" }} />
            45% Unstaked
          </CardGroup>
        </CenterPart>
        <Rightpart>
          <ChartComponent />
        </Rightpart>
      </GVVIndexContainer>
      <Footer />
    </>
  );
};

const GVVIndexContainer = styled.div`
  margin-top: 50px;
  align-items: center;
  width: 100%;
  flex-direction: row;
  display: flex;
  background-color: ${colors.mainColor};
  justify-content: space-around;
  align-items: center;
  padding: 48px 0px 42px 0px;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    margin-top: 50px;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const LeftTopButton = styled.div`
  padding: 4px 0px;
  width: 100%;
  border: 3px solid #cbfb45;
  margin: 10px auto;
  text-align: center;
  color: #cbfb45;
  font-size: 40px;
  font-style: italic;
  font-weight: 400;
  font-family: ABeeZee;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 30px;
    margin: 0 auto;
  }
`;
const CenterPart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const CenterTitle = styled.div`
  font-size: 32px;
  font-family: BankGothic Md BT;
  text-align: center;
  font-weight: 400;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;
const CountTitle = styled.div`
  text-align: center;
  font-size: 32px;
  color: #cbfb45;
  font-family: Abhaya Libre ExtraBold;
  border-bottom: 1px solid white;
  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;
const CenterContent = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 800;
  color: white;
  width: 100%;
  font-family: Abhaya Libre ExtraBold;
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 16px;
    margin: 0 auto;
  }
`;
const ContentLeft = styled.div`
  font-weight: 800;
  display: flex;
`;
const ContentRight = styled.div`
  font-weight: 800;
`;
const GreenText = styled.div`
  color: #23f51f;
`;
const CenterAction = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-style: italic;
  font-weight: 400;
`;
const LeftButton = styled.button`
  width: 145px;
  height: 39px;
  color: #23f51f;
  border: 3px solid #23f51f;
  border-radius: 5px;
`;
const RightButton = styled.button`
  width: 145px;
  height: 39px;
  color: #f51f1f;
  border: 3px solid #f51f1f;
  border-radius: 5px;
`;
const RadioChatImg = styled.img`
  width: 90%;
  padding: 20px 20px;
`;

const CardGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: ABeeZee;
  line-height: 40px;
  font-weight: 400;
  color: white;
  font-style: italic;
  font-size: 16px;
`;

const CardColor = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: space-between;
`;
const Rightpart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: ABeeZee;
  font-weight: 400;
`;
export default Portfolio;
