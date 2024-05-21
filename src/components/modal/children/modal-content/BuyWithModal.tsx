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
import { ethers } from "ethers";
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

import {
  USDTAddr,
  GVVAddr,
  PresaleVestingAddr,
  Poly_GVVAddr,
  Poly_USDTAddr,
  Poly_PresaleVestingAddr,
  BSC_GVVAddr,
  BSC_USDTAddr,
  BSC_PresaleVestingAddr
} from "../../../../contractABI/index";
import USDTABIJson from "../../../../contractABI/USDT.json";
import PreSaleVestingABIJson from "../../../../contractABI/PreSaleVesting.json";
import { useEffect } from "react";
import LoaderSrc from "../../../../assets/webroot/img/front/camera-loader.gif";

const BuyWithModal = () => {
  const [isBuyingETH, setIsBuyingETH] = useState(false);
  const [isBuyingErc20, setIsBuyingErc20] = useState(false);
  const dispatch = useAppDispatch();
  const { showSignInModal } = useAppSelector((state) => state.modal);
  const { roundNumber, amount } = useAppSelector((state) => state.round);

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

  const [account, setAccounts] = useState("");

  const handleConnect = () => {
    // wallet connection part
    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts: string[]) => {
          setAccounts(accounts[0]);
        })
        .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
          window.location.href = "/";
        });
    } else {
      alert("Please install Metamask wallet!");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    handleConnect();
  }, []);

  const switchNetwork = async (chainId: any) => {
    console.log(chainId);
    const ethereum = (window as any).ethereum;
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Ethereum
  const BuyGVV_ETH = async () => {

    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const chainId = await ethereum.request({ method: "eth_chainId" });
    if (chainId != "0xaa36a7") {
      await switchNetwork("0xaa36a7");
    } else {
      setIsBuyingETH(true);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const data = await response.json();

      const PreSaleContract = new ethers.Contract(
        PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const GVVAmount = amount;
      const round = roundNumber - 1;
      const USDTAmount =
        window.location.pathname === "/round1"
          ? GVVAmount * 0.23
          : window.location.pathname === "/round2"
            ? GVVAmount * 0.34
            : GVVAmount * 0.45;
      const ethAmount = (Number(USDTAmount) / Number(data.ethereum.usd)).toFixed(
        2
      );
      setIsBuyingETH(false);
      try {
        const BuyToken = await PreSaleContract.buyTokensByNativeCoin(
          String(GVVAmount),
          String(round),
          { from: account, value: ethers.utils.parseEther(ethAmount) }
        );
        setIsBuyingETH(true);
        await BuyToken.wait();
        setIsBuyingETH(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const buyGVV_ERC20 = async () => {
    setIsBuyingErc20(true);
    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const chainId = await ethereum.request({ method: "eth_chainId" });

    if (chainId != "0xaa36a7") {
      await switchNetwork("0xaa36a7");
    } else {
      const PreSaleContract = new ethers.Contract(
        PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const USDTContract = new ethers.Contract(USDTAddr, USDTABIJson, signer);
      setIsBuyingErc20(false);

      try {
        const GVVAmount = amount;
        const round = roundNumber - 1;
        const USDTAmount =
          window.location.pathname === "/round1"
            ? GVVAmount * 0.23
            : window.location.pathname === "/round2"
              ? GVVAmount * 0.34
              : GVVAmount * 0.45;
        const ApproveTx = await USDTContract.approve(
          PresaleVestingAddr,
          ethers.utils.parseUnits(String(USDTAmount), 6),
          { from: account }
        );
        setIsBuyingErc20(true);
        await ApproveTx.wait();
        setIsBuyingErc20(false);
        try {
          console.log(GVVAmount, round)
          const BuyToken = await PreSaleContract.buyTokensByUSDT(
            String(GVVAmount),
            String(round),
            { from: account }
          );
          setIsBuyingErc20(true);
          await BuyToken.wait();
          setIsBuyingErc20(false);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // Ethereum

  // BSC
  const BuyGVV_BNB = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
    );
    const data = await response.json();

    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const chainId = ethereum.request({ method: "eth_chainId" });
    if (chainId != "0x61") {
      await switchNetwork("0x61");
    } else {
      const PreSaleContract = new ethers.Contract(
        BSC_PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const GVVAmount = amount;
      const round = roundNumber - 1;
      const USDTAmount =
        window.location.pathname === "/round1"
          ? GVVAmount * 0.23
          : window.location.pathname === "/round2"
            ? GVVAmount * 0.34
            : GVVAmount * 0.45;
      const ethAmount = (Number(USDTAmount) / Number(data.binancecoin.usd)).toFixed(
        2
      );
      try {
        const BuyToken = await PreSaleContract.buyTokensByNativeCoin(
          String(GVVAmount),
          String(round),
          { from: account, value: ethers.utils.parseEther(ethAmount) }
        );
        await BuyToken.wait();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const buyGVV_BRC20 = async () => {
    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const chainId = ethereum.request({ method: "eth_chainId" });
    if (chainId != "0x61") {
      await switchNetwork("0x61");
    } else {

      const PreSaleContract = new ethers.Contract(
        BSC_PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const USDTContract = new ethers.Contract(BSC_USDTAddr, USDTABIJson, signer);

      try {
        const GVVAmount = amount;
        const round = roundNumber - 1;
        const USDTAmount =
          window.location.pathname === "/round1"
            ? GVVAmount * 0.23
            : window.location.pathname === "/round2"
              ? GVVAmount * 0.34
              : GVVAmount * 0.45;
        const ApproveTx = await USDTContract.approve(
          PresaleVestingAddr,
          ethers.utils.parseUnits(String(USDTAmount), 6),
          { from: account }
        );
        await ApproveTx.wait();
        try {
          console.log(GVVAmount, round)
          const BuyToken = await PreSaleContract.buyTokensByUSDT(
            String(GVVAmount),
            String(round),
            { from: account }
          );
          await BuyToken.wait();
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  // BSC

  // Polygon
  const BuyGVV_Matic = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd"
    );
    const data = await response.json();


    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const chainId = ethereum.request({ method: "eth_chainId" });
    if (chainId != "0x1388a") {
      await switchNetwork("0x1388a");
    } else {
      const PreSaleContract = new ethers.Contract(
        Poly_PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const GVVAmount = amount;
      const round = roundNumber - 1;
      const USDTAmount =
        window.location.pathname === "/round1"
          ? GVVAmount * 0.23
          : window.location.pathname === "/round2"
            ? GVVAmount * 0.34
            : GVVAmount * 0.45;
      const ethAmount = (Number(USDTAmount) / Number(data["matic-network"].usd)).toFixed(
        2
      );
      try {
        const BuyToken = await PreSaleContract.buyTokensByNativeCoin(
          String(GVVAmount),
          String(round),
          { from: account, value: ethers.utils.parseEther(ethAmount) }
        );
        await BuyToken.wait();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const buyGVV_Poly_USDT = async () => {
    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const chainId = ethereum.request({ method: "eth_chainId" });
    if (chainId != "0x1388a") {
      await switchNetwork("0x1388a");
    } else {

      const PreSaleContract = new ethers.Contract(
        Poly_PresaleVestingAddr,
        PreSaleVestingABIJson,
        signer
      );
      const USDTContract = new ethers.Contract(Poly_USDTAddr, USDTABIJson, signer);

      try {
        const GVVAmount = amount;
        const round = roundNumber - 1;
        const USDTAmount =
          window.location.pathname === "/round1"
            ? GVVAmount * 0.23
            : window.location.pathname === "/round2"
              ? GVVAmount * 0.34
              : GVVAmount * 0.45;
        const ApproveTx = await USDTContract.approve(
          PresaleVestingAddr,
          ethers.utils.parseUnits(String(USDTAmount), 6),
          { from: account }
        );
        await ApproveTx.wait();
        try {
          console.log(GVVAmount, round)
          const BuyToken = await PreSaleContract.buyTokensByUSDT(
            String(GVVAmount),
            String(round),
            { from: account }
          );
          await BuyToken.wait();
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
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
              <BuyWithDivCoin onClick={() => BuyGVV_ETH()}>
                {isBuyingETH === true ? (
                  <img src={LoaderSrc} alt=""></img>
                ) : (
                  <>
                    <img src={EtherSrc} alt=""></img>
                    <StyledText>{`ETH`}</StyledText>
                  </>
                )}
              </BuyWithDivCoin>
              <BuyWithDivCoin onClick={() => buyGVV_ERC20()}>
                {isBuyingErc20 === true ? (
                  <img src={LoaderSrc} alt=""></img>
                ) : (
                  <>
                    <img src={ERCSrc} alt=""></img>
                    <StyledText>{`ERC20 USDT`}</StyledText>
                  </>
                )}
              </BuyWithDivCoin>
            </BuyWithChainDiv>
            <BuyWithChainDiv>
              <BuyWithDivCoin onClick={() => BuyGVV_BNB()}>
                <img src={BNBSrc} alt=""></img>
                <StyledText>{`BNB`}</StyledText>
              </BuyWithDivCoin>
              <BuyWithDivCoin onClick={() => buyGVV_BRC20()}>
                <img src={BEPSrc} alt=""></img>
                <StyledText>{`BEP20 USDT`}</StyledText>
              </BuyWithDivCoin>
            </BuyWithChainDiv>
            <BuyWithChainDiv>
              <BuyWithDivCoin onClick={() => BuyGVV_Matic()}>
                <img src={MaticSrc} alt=""></img>
                <StyledText>{`MATIC`}</StyledText>
              </BuyWithDivCoin>
              <BuyWithDivCoin onClick={() => buyGVV_Poly_USDT()}>
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
