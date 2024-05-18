import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RESPONSIVE } from "../../../../core/constants/responsive.const";
import { colors } from "../../../../core/constants/styleguide.const";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../core/hooks/rtkHooks";
import { setShowAlertAction } from "../../../../core/store/slices/alertSlice";
import {
  setShowBuyWithModalAction,
  setShowSignUpModalAction,
} from "../../../../core/store/slices/modalSlice";
import { LOGIN_USER } from "../../../../graphql/Mutations";
import CheckBox from "../../../checkbox/CheckBox";
import { ButtonPrimarySmall, H1 } from "../../../styleguide/styleguide";
import ModalTemplate from "./ModalTemplet";
import { StorageKeys } from "../../../../core/constants/base.const";
import { dashboardPath } from "../../../../core/util/pathBuilder.util";
import EtherSrc from "../../../../assets/webroot/img/index/ether.png";
import BNBSrc from "../../../../assets/webroot/img/index/bnb.png";
import MaticSrc from "../../../../assets/webroot/img/index/matic.png";
import ERCSrc from "../../../../assets/webroot/img/index/erc20.png";
import BEPSrc from "../../../../assets/webroot/img/index/bep20.png";
import PTETHERSrc from "../../../../assets/webroot/img/index/ptether.png";

const BuyWithModal = () => {
  const dispatch = useAppDispatch();
  const { showSignInModal } = useAppSelector((state) => state.modal);

  const [loginUser] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const go_to_sign_up = () => {
    dispatch(setShowBuyWithModalAction(false));
    dispatch(setShowSignUpModalAction(true));
  };

  const sign_in = async () => {
    if (email === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: { type: "error", content: "Email cannot be blank!" },
        })
      );
    } else if (password === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: { type: "error", content: "Please Enter Password!" },
        })
      );
    } else {
      try {
        const response = await loginUser({
          variables: {
            email: email,
            password: password,
          },
        });

        const alertMessage = response.data.loginUser.message;
        console.log("resoponse.data", response.data);
        console.log("alertMessage", alertMessage);
        console.log(
          "response.data.loginUser.successful",
          response.data.loginUser.successful
        );
        if (response.data.loginUser.successful) {
          dispatch(setShowBuyWithModalAction(false));
          dispatch(
            setShowAlertAction({
              showAlert: true,
              props: { type: "success", content: alertMessage },
            })
          );
          localStorage.setItem(StorageKeys.EMAIL, email);
          navigate(dashboardPath());
        } else {
          dispatch(
            setShowAlertAction({
              showAlert: true,
              props: { type: "error", content: alertMessage },
            })
          );
        }
      } catch (error) {
        dispatch(
          setShowAlertAction({
            showAlert: true,
            props: { type: "error", content: "error occured!" },
          })
        );
      }
    }
  };

  return (
    <ModalTemplate
      showsModal={showSignInModal}
      title={
        <StyledModalTitle>
          <StyledLogoTitle>{`BUY`}</StyledLogoTitle>
          <StyledGeneralTitle>{`WITH`}</StyledGeneralTitle>
        </StyledModalTitle>
      }
      content={
        <StyledModalContent>
          <StyledMainContent>
            <BuyWithChainDiv>
              <BuyWithDivCoin>
                <img src={EtherSrc} alt=""></img>
                <StyledText>{`ETH`}</StyledText>
              </BuyWithDivCoin>
              <BuyWithDivCoin>
                <img src={ERCSrc} alt=""></img>
                <StyledText>{`ERC20 USDT`}</StyledText>
              </BuyWithDivCoin>
            </BuyWithChainDiv>
            <BuyWithChainDiv>
              <BuyWithDivCoin>
                <img src={BNBSrc} alt=""></img>
                <StyledText>{`BNB`}</StyledText>
              </BuyWithDivCoin>
              <BuyWithDivCoin>
                <img src={BEPSrc} alt=""></img>
                <StyledText>{`BEP20 USDT`}</StyledText>
              </BuyWithDivCoin>
            </BuyWithChainDiv>
            <BuyWithChainDiv>
              <BuyWithDivCoin>
                <img src={MaticSrc} alt=""></img>
                <StyledText>{`MATIC`}</StyledText>
              </BuyWithDivCoin>
              <BuyWithDivCoin>
                <img src={PTETHERSrc} alt=""></img>
                <StyledText>{`Polygon USDT`}</StyledText>
              </BuyWithDivCoin>
            </BuyWithChainDiv>
          </StyledMainContent>
        </StyledModalContent>
      }
      footer={
        <StyledFooter>
          <StyledP>{`Don't have wallet?`}</StyledP>
          <StyledA
            onClick={(e) => console.log("okay")}
          >{`Connect Wallet`}</StyledA>
        </StyledFooter>
      }
    />
  );
};

const StyledModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  background-color: ${colors.mainColor};
  border-radius: 10px;
  padding: 10px;
`;

const StyledLogoTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primaryYellow};
`;

const StyledGeneralTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.neutrals8};
`;

const StyledModalContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px;
`;

const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 500px;
  }
`;

const BuyWithChainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    flex-direction: row;
  }
`;

const BuyWithDivCoin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: ${colors.mainColor};
  border-radius: 5px;
  padding: 10px 5px;
  gap: 30px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 250px;
  }
`;

const StyledButton = styled(ButtonPrimarySmall)`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 32px;
  width: 83px;
  background: ${colors.middleBlue};
  font-family: Calibri;
`;

const StyledExtraActionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledFooter = styled.div`
  border-radius: 0px 0px 5px 5px;
  background-color: ${colors.mainColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 6px;
  }
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 17px;
  color: ${colors.neutrals7};
  text-align: center;
`;

const StyledA = styled.a`
  color: ${colors.primaryYellow};
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;
  margin-top: -12px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    margin-top: 0px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledText = styled(H1)`
  color: ${colors.primaryYellow};
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  margin: -12px 0px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    font-size: 17px;
  }
`;

const ForgetPassword = styled.p`
  color: ${colors.neutrals3};
  &:hover {
    cursor: pointer;
  }
`;

export default BuyWithModal;
