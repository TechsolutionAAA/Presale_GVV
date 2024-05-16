import { useState } from "react";
import styled from "styled-components";
import RoundImage from "../../assets/webroot/img/index/roundimage.svg";
import play from "../../assets/webroot/img/index/play.jpg";
import { colors } from "../../core/constants/styleguide.const";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Round = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handlePlus1 = () => {
    let c: number = count1;
    setCount1(c + 1);
  };
  
  const handleMinus1 = () => {
    let c: number = count1;
    if (c <= 0) {
      setCount1(0);
      return;
    } else {
      setCount1(c - 1);
    }
  };

  const handlePlus2 = () => {
    let c: number = count2;
    setCount2(c + 1);
  };

  const handleMinus2 = () => {
    let c: number = count2;
    if (c <= 0) {
      setCount2(0);
      return;
    } else {
      setCount2(c - 1);
    }
  };
  const handlePlus3 = () => {
    let c: number = count3;
    setCount3(c + 1);
  };

  const handleMinus3 = () => {
    let c: number = count3;
    if (c <= 0) {
      setCount3(0);
      return;
    } else {
      setCount3(c - 1);
    }
  };

  return (
    <>
      <Header />
      <GVVIndexContainer>
        <DescriptionSection>
          <VideoCard>
            <VideoCardImage src={play} />
            Video Guide to Buy GVV
          </VideoCard>
          <ChartCard>
            <RoundImageBox src={RoundImage} />
            <LeftCardGroup>
              <CardGroup>
                <CardColor style={{ backgroundColor: "#DEEBBC" }} />
                0% Purchased
              </CardGroup>
              <CardGroup>
                <CardColor style={{ backgroundColor: "#CBFB45" }} />
                0% Unclaimed
              </CardGroup>
            </LeftCardGroup>
          </ChartCard>
          <TokenDataCard>
            <Bigcounttitle>
              Total Supply - <Count> $GVV 150,000,000</Count>
            </Bigcounttitle>
            <Bigcounttitle>
              Total Supply - <Count> $GVV 150,000,000</Count>
            </Bigcounttitle>
            <Bigcounttitle>
              Listing Date - <Count> 03-03-24</Count>
            </Bigcounttitle>
            <Bigcounttitle>
              Total Buys - <Count> 100,000</Count>
            </Bigcounttitle>
            <Bigcounttitle>
              Unique Buyers - <Count> 15,000</Count>
            </Bigcounttitle>
          </TokenDataCard>
        </DescriptionSection>
        <PresaleSection>
          <PresaleMainCard>
            <RoundRightTitle>Private SALES Stage 1</RoundRightTitle>
            <RoundRightSmTitle>
              $GVV 1 - <RoundRightSmcolTitle>$0.23</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundRightSmTitle>
              The Price will be - <RoundRightSmcolTitle>$ {(0.23 * count1).toFixed(2)}</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundButtonGroup>
              <CountNumberBox>
                <Countnumberminus onClick={handleMinus1}>-</Countnumberminus>
                <Countnumber
                  value={count1}
                  onChange={(e) => setCount1(parseInt(e.target.value))}
                ></Countnumber>
                <Countnumberplus onClick={handlePlus1}>+</Countnumberplus>
              </CountNumberBox>
              <RoundButton>BUY {count1} $GVV</RoundButton>
            </RoundButtonGroup>
          </PresaleMainCard>
          <PresaleMainCard>
            <RoundRightTitle>Private SALES Stage 2</RoundRightTitle>
            <RoundRightSmTitle>
              $GVV 1 - <RoundRightSmcolTitle>$0.34</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundRightSmTitle>
              The Price will be - <RoundRightSmcolTitle>$ {(0.34 * count2).toFixed(2)}</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundButtonGroup>
              <CountNumberBox>
                <Countnumberminus onClick={handleMinus2}>-</Countnumberminus>
                <Countnumber
                  value={count2}
                  onChange={(e) => setCount2(parseInt(e.target.value))}
                ></Countnumber>
                <Countnumberplus onClick={handlePlus2}>+</Countnumberplus>
              </CountNumberBox>
              <RoundButton>BUY {count2} $GVV</RoundButton>
            </RoundButtonGroup>
          </PresaleMainCard>
          <PresaleMainCard>
            <RoundRightTitle>Public SALES Round</RoundRightTitle>
            <RoundRightSmTitle>
              $GVV 1 - <RoundRightSmcolTitle>$0.45</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundRightSmTitle>
              The Price will be - <RoundRightSmcolTitle>$ {(0.45 * count3).toFixed(2)}</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundButtonGroup>
              <CountNumberBox>
                <Countnumberminus onClick={handleMinus3}>-</Countnumberminus>
                <Countnumber
                  value={count3}
                  onChange={(e) => setCount3(parseInt(e.target.value))}
                ></Countnumber>
                <Countnumberplus onClick={handlePlus3}>+</Countnumberplus>
              </CountNumberBox>
              <RoundButton>BUY {count3} $GVV</RoundButton>
            </RoundButtonGroup>
          </PresaleMainCard>
        </PresaleSection>
      </GVVIndexContainer>
      <Footer />
    </>
  );
};

const GVVIndexContainer = styled.div`
  margin-top: 50px;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  gap: 150px;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: center;
  padding: 48px 0px 42px 0px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    margin-top: 100px;
  }
`;

const LeftCardGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescriptionSection = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const ChartCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  gap: 10px;
  font-family: ABeeZee;
  color: white;
  width: 349px;
  margin-left: 40px;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 100%;
  }
`;
const VideoCardImage = styled.img`
  width: 349px;
  height: 223px;
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
  }
`;
const RoundImageBox = styled.img`
  width: 90%;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 60%;
  }
`;
const PresaleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;
  font-family: ABeeZee;
  font-weight: 400;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const RoundRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 37.9px;
  font-style: italic;
  color: white;
  @media (max-width: 800px) {
    font-size: 23px;
  }
`;
const RoundRightSmTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 21.33px;
  font-style: italic;
  color: #b3b3b3;
  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
  }
`;
const RoundRightSmcolTitle = styled.div`
  color: #f3f3f3;
`;

const CountNumberBox = styled.div`
  display: flex;
  color: #cbfb45;
  @media (max-width: 800px) {
    margin: 0 auto;
    text-align: center;
    width: 170px;
  }
`;
const RoundButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 80%;
    flex-direction: column;
  }
`;
const Countnumber = styled.input`
  background-color: #232325;
  font-size: 20px;
  border: none;
  color: #cbfb45;
  height: 24px;
  text-align: center;
  width: 100px;
  padding: 10px 15px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Countnumberminus = styled.div`
  background-color: #232325;
  font-size: 20px;
  width: 24px;
  border: none;
  height: 24px;
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Countnumberplus = styled.div`
  background-color: #232325;
  font-size: 20px;
  width: 24px;
  border: none;
  height: 24px;
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const RoundButton = styled.div`
  background-color: #cbfb45;
  font-size: 20px;
  margin-left: 40px;
  padding: 10px 15px;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const PresaleMainCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const TokenDataCard = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const Bigcounttitle = styled.div`
  font-size: 24px;
  font-family: ABeeZee;
  font-weight: bold;
  color: #f3f3f3;
  display: flex;
  flex-direction: row;
  line-height: 34px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
const Count = styled.div`
  color: #f6f6fa;
  font-weight: 400;
  font-family: ABeeZee;
`;
const CardColor = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: space-between;
`;
const CardGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: ABeeZee;
  line-height: 40px;
  font-weight: 400;
  font-style: italic;
  font-size: 16px;
  color: white;
  margin-left: 35px;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
export default Round;
