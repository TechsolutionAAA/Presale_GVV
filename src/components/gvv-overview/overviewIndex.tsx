import styled from "styled-components";
import ChatBrowser from "../../assets/webroot/img/index/chart_browser_scaled.svg";
import Clients from "../../assets/webroot/img/index/Clients.png";
import Gloval from "../../assets/webroot/img/index/Group.png";
import LinerChat from "../../assets/webroot/img/index/liner_chat.png";
import Rectangle from "../../assets/webroot/img/index/rectangle.png";
import { colors } from "../../core/constants/styleguide.const";
import { ButtonPrimarySmall } from "../styleguide/styleguide";

const GVVIndex = () => {
  return (
    <>
      <GVVIndexContainer>
        <LeftPart>
          <SummaryPart>
            <p>{`$GVV tokens is an investment system that integrates multiple liquidity pools of investors into A SINGLE BUSINESS CAPITAL INFRASTRUCTURE. $GVV is banking on the rapidly growing blockchain technology to create a business that invests in emerging tech startups and gives longlasting returns to liquidity providers in proportion to their shares . The $GVV TOKEN COMPRISES DEVELOPERS , TECHNOLOGY EXPERTS , FINANCIAL EXPERTS AND BRANDS WHO ARE AT THE FOREFRONT OF MAKING SURE INVESTOR’S LIQUIDITY POOLS ARE PROPERLY MANAGED TO GIVE HIGH RETURNS OVER AN EXTENSIVE PERIOD OF TIME. BUILT ON THE POLYGON NETWORK , SECURED WITH HIGH END PROTOCOLS AND TAILORED FOR CUSTOM HANDS-OFF INVESTOR MANAGEMENT , $GVV AIMS TO BUILD A SUSTAINABLE AND PROFITABLE VENTURE THAT CUTS ACROSS GENERATIONS AND TIMELINES.`}</p>
          </SummaryPart>
          <SummaryImg src={Rectangle} alt=""></SummaryImg>
        </LeftPart>
        <CenterPart>
          <StyledGlobalImage src={Gloval}></StyledGlobalImage>
          <CenterImgChart
            src={ChatBrowser}
            alt=""
            style={{ zIndex: 1 }}
          ></CenterImgChart>
          <CenterImg src={LinerChat} alt="" style={{ zIndex: 1 }}></CenterImg>
          <StyledButtonsPart>
            <BuyGVVButton>{`Buy $GVV`}</BuyGVVButton>
            <ReadWhitePaperButton>{`Read White Paper`}</ReadWhitePaperButton>
          </StyledButtonsPart>
        </CenterPart>
        <RightPart>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#cbfb45" }} />
            Private Round Stage 1
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#195818" }} />
            Private Round Stage 2
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#FA5757" }} />
            Public Round
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#6E8727" }} />
            Top Influencer’s Award
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#CBFB45" }} />
            Private Round Stage 1
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#B8379C" }} />
            Team
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#96B837" }} />
            Marketing , R&D , Staking
          </CardGroup>
          <CardGroup>
            <CardColor style={{ backgroundColor: "#CBFB45" }} />
            Treasury
          </CardGroup>
        </RightPart>
      </GVVIndexContainer>
      <ClientsPart>
        <img src={Clients} alt=""></img>
      </ClientsPart>
    </>
  );
};

const GVVIndexContainer = styled.div`
  align-items: center;
  width: 80%;
  margin: 50px auto;
  flex-direction: row;
  display: flex;
  gap: 50px;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: start;
  padding: 48px 0px 42px 0px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const ClientsPart = styled.div`
  margin-top: 100px;
  align-items: center;
  width: 100%;
  display: flex;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: center;
  padding: 48px 0px 42px 0px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const LeftPart = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 10px;
`;
const SummaryImg = styled.img`
  width: 90%;
  margin: 0 auto;
`;

const CenterPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
const CenterImgChart = styled.img`
  width: 90%;
  margin: 0 auto;
`;
const CenterImg = styled.img`
  width: 90%;
  margin: 0 auto;
`;

const RightPart = styled.div`
  padding-top: 50px;
  padding-left: -30px;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 auto;
`;

const StyledGlobalImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  opacity: 0.2;
`;

const SummaryPart = styled.div`
  width: 554px;
  font-family: Azeret Mono;
  font-style: italic;
  font-size: 13px;
  line-height: 29px;
  color: ${colors.neutrals8};

  @media (max-width: 1100px) {
    width: 300px;
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledButtonsPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;

const BuyGVVButton = styled(ButtonPrimarySmall)`
  border-width: 0px;
  border-radius: 0px;
  font-style: italic;
  color: ${colors.mainColor};
  z-index: 2;
`;

const ReadWhitePaperButton = styled(ButtonPrimarySmall)`
  border: solid 1px ${colors.neutrals8};
  border-radius: 0px;
  background-color: ${colors.mainColor};
  z-index: 2;
`;

export default GVVIndex;
