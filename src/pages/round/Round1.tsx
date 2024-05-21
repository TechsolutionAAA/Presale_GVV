import styled from "styled-components";
import ChatBrowser from "../../assets/webroot/img/index/chart_browser_scaled.svg";
import RoundImage from "../../assets/webroot/img/index/roundimage.svg";
import play from "../../assets/webroot/img/index/play.jpg";
import Gloval from "../../assets/webroot/img/index/Group.png";
import LinerChat from "../../assets/webroot/img/index/liner_chat.png";
import Rectangle from "../../assets/webroot/img/index/rectangle.png";
import { colors } from "../../core/constants/styleguide.const";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../core/hooks/rtkHooks";
import { setShowBuyWithModalAction } from "../../core/store/slices/modalSlice";
import { setAmount } from "../../core/store/slices/roundSlice";
import { ethers } from "ethers";
import PreSaleVestingABIJson from "../../contractABI/PreSaleVesting.json";

import { Poly_PresaleVestingAddr, BSC_PresaleVestingAddr, PresaleVestingAddr } from "../../contractABI";

const Round = () => {
  const [count, setCount] = useState(0);
  const [ClaimAmount, setClaimAmount] = useState(0);
  const [account, setAccount] = useState("");
  const dispatch = useAppDispatch();
  const handlePlus = () => {
    let c: number = count;
    setCount(c + 1);
  };

  const handleMinus = () => {
    let c: number = count;
    setCount(c - 1);
    if (c <= 0) {
      setCount(0);
      return;
    } else {
      setCount(c - 1);
    }
  };

  useEffect(() => {
    // wallet connection part
    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (accounts: string[]) => {
          setAccount(accounts[0]);
          const ethereum = (window as any).ethereum;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const chainId = await ethereum.request({ method: "eth_chainId" });
          if (chainId == "0x1388a") {
            try {
              const PreSaleContract = new ethers.Contract(Poly_PresaleVestingAddr, PreSaleVestingABIJson, signer);
              const res = await PreSaleContract.getUserBuyAmount(accounts[0], "0");
              setClaimAmount(res.toString());
            } catch (error) {
              console.log(error);
            }
          } else if (chainId == "0xaa36a7") {
            try {
              const PreSaleContract = new ethers.Contract(PresaleVestingAddr, PreSaleVestingABIJson, signer);
              const res = await PreSaleContract.getUserBuyAmount(accounts[0], "0");
              setClaimAmount(res.toString());
            } catch (error) {
              console.log(error);
            }
          } else if (chainId == "0x61") {
            try {
              const PreSaleContract = new ethers.Contract(BSC_PresaleVestingAddr, PreSaleVestingABIJson, signer);
              const res = await PreSaleContract.getUserBuyAmount(accounts[0], "0");
              setClaimAmount(res.toString());
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      // alert("Please install Metamask wallet!");
      // window.open('https://metamask.io/download/', '_blank');
    }
  }, [])

  return (
    <>
      <Header />
      <GVVIndexContainer>
        <LeftPart>
          <LeftTopCard>
            <RoundImageBox src={RoundImage} />
            <LeftCardGroup>
              <CardGroup>
                <CardColor style={{ backgroundColor: "#DEEBBC" }} />
                67% Purchased
              </CardGroup>
              <CardGroup>
                <CardColor style={{ backgroundColor: "#CBFB45" }} />
                33% Unclaimed
              </CardGroup>
            </LeftCardGroup>
          </LeftTopCard>
          <LeftBottomCard>
            <LeftBottomCardImage src={play} />
            Video Guide to Buy GVV
          </LeftBottomCard>
        </LeftPart>
        <Rightpart>
          <RightTopCard>
            <RoundRightTitle>Private SALES Stage 1</RoundRightTitle>
            <RoundRightSmTitle>
              $GVV 1 - <RoundRightSmcolTitle>$0.23</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundContent>
              Invest in $GVV and be a part of building the next frontier of
              emerging tech lasting across generations. Your $GVV is your
              tokenized financial freedom
            </RoundContent>
            <br></br>
            <RoundRightSmTitle>
              The Price will be - <RoundRightSmcolTitle>$ {(0.23 * count).toFixed(2)}</RoundRightSmcolTitle>
            </RoundRightSmTitle>
            <RoundButtonGroup>
              <CountNumberBox>
                <Countnumberminus onClick={handleMinus}>-</Countnumberminus>
                <Countnumber
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                ></Countnumber>
                <Countnumberplus onClick={handlePlus}>+</Countnumberplus>
              </CountNumberBox>
              <RoundButton onClick={(e: any) => { dispatch(setShowBuyWithModalAction(true)); dispatch(setAmount({ amount: Number(count) })) }}>BUY {count} $GVV</RoundButton>
              <RoundButton>Claim {ClaimAmount} $GVV</RoundButton>
            </RoundButtonGroup>
          </RightTopCard>
          <RightBottomCard>
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
          </RightBottomCard>
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
const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const LeftTopCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const LeftBottomCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  gap: 10px;
  font-family: ABeeZee;
  color: white;
  width: 349px;
  margin-top: 40px;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 100%;
  }
`;
const LeftBottomCardImage = styled.img`
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
const Rightpart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const RoundContent = styled.div`
  margin-top: 50px;
  color: #b3b3b3;
  font-size: 24px;
  width: 550px;
  @media (max-width: 800px) {
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
  }
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
  @media (max-width: 800px) {
    font-size: 17px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const RightTopCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const RightBottomCard = styled.div`
  margin-top: 20px;
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
