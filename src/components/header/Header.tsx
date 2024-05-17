import React, { useState } from "react";
import { Else, If, Then } from "react-if";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../core/hooks/rtkHooks";

import Logo from "../../assets/webroot/img/logos/logo(38x26).png";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import { useWatchResize } from "../../core/hooks/useWatchResize";
import {
  faqPath,
  featuresPath,
  homePath,
  portfolioPath,
  round1Path,
  signPath,
  blogPath,
  contactPath
} from "../../core/util/pathBuilder.util";
import BurgerButton from "../button/burger-button/BurgerButton";
import AlertComponent from "../alert/AlertComponent";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { arbitrum, mainnet } from "wagmi/chains";
import { setRound } from "../../core/store/slices/roundSlice";
import { COMMONS } from "../../assets/i18n/commons";
import BuyWithModal from "../modal/children/modal-content/BuyWithModal";

export const navLinks = [
  {
    path: homePath(),
    title: "Home"
  },
  {
    path: portfolioPath(),
    title: "Portfolio"
  },
  {
    path: signPath(),
    title: "Pages"
  },
  {
    path: blogPath(),
    title: "Blog"
  },
  {
    path: contactPath(),
    title: "Contact"
  }
];

const projectId = "760f8d127d7a9b7c0dbb7dfc6ee6d1ca";
if (!projectId) {
  throw new Error("VITE_PROJECT_ID is not set");
}

// 2. Create wagmiConfig
const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, arbitrum],
  projectId,
  metadata: {
    name: "Web3Modal React Example",
    description: "Web3Modal React Example",
    url: "",
    icons: [],
  },
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: "light",
  themeVariables: {
    "--w3m-color-mix": "#00DCFF",
    "--w3m-color-mix-strength": 20,
  },
});

const Header = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const { smallerThanLarge } = useWatchResize();
  const dispatch = useAppDispatch();

  const { showAlert } = useAppSelector((state) => state.alert);
  const showSignInModal = useAppSelector((state) => state.modal);

  return (
    <>
      <StyledHeader style={{ zIndex: 2 }}>
        <LogoSection>
          <img
            src={Logo}
            style={{ width: "25px", height: "24px" }}
            alt="logo"
          ></img>
          <h3 style={{ color: `${colors.neutrals8}` }}>{`GVV`}</h3>
        </LogoSection>
        <NavigateSection>
          <If condition={!smallerThanLarge}>
            <Then>
              <LinkGroup>
                <StyledLink to={homePath()}>{`Home`}</StyledLink>
                <NavPageDiv>
                  {showPagesDropdown && (
                    <PageDropDownDiv
                      onMouseLeave={(e) => setShowPagesDropdown(false)}
                    >
                      <StyledPagesLink
                        to="/sign"
                        onClick={(e) =>
                          dispatch(setRound({ roundNumber: 1 }))
                        }
                      >{`Private Sales Stage 1`}</StyledPagesLink>
                      <StyledPagesLink
                        to="/sign"
                        onClick={(e) =>
                          dispatch(setRound({ roundNumber: 2 }))
                        }
                      >{`Private Sales Stage 2`}</StyledPagesLink>
                      <StyledPagesLink
                        to="/sign"
                        onClick={(e) =>
                          dispatch(setRound({ roundNumber: 3 }))
                        }
                      >{`Public Sales Round`}</StyledPagesLink>
                    </PageDropDownDiv>
                  )}
                  <StyledLink
                    to={""}
                    onMouseEnter={(e) => setShowPagesDropdown(true)}
                  >{`Page`}</StyledLink>
                </NavPageDiv>
                <StyledLink to={"/portfolio"}>{`Portfolio`}</StyledLink>
                <StyledLink to={""}>{`Features`}</StyledLink>
                <StyledLink to={""}>{`Blog`}</StyledLink>
                <StyledLink to={""}>{`Contact`}</StyledLink>
              </LinkGroup>
            </Then>
            <Else>
              <BurgerButton />
            </Else>
          </If>
          <StyledButtonGroup>
            <w3m-button />
            <StyledJoinLink to={"/sign"}>{`Join pre-Sell`}</StyledJoinLink>
          </StyledButtonGroup>
        </NavigateSection>
      </StyledHeader>
      {showAlert && <AlertComponent />}
      {showSignInModal && <BuyWithModal />}
    </>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: ${colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 1px grey;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  @media screen and (min-width: ${RESPONSIVE.bigmobile}) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: ${RESPONSIVE.small}) {
    padding: 0px 100px 0px 100px;
  }
  @media screen and (min-width: ${RESPONSIVE.xLarge}) {
    padding: 0px 300px 0px 300px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NavigateSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center !important;
  padding: 10px 0px;
  gap: 30px;
  @media screen and (max-width: ${RESPONSIVE.large}) {
    gap: 15px;
  }
  @media screen and (max-width: ${RESPONSIVE.small}) {
    gap: 5px;
  }
  @media screen and (max-width: ${RESPONSIVE.bigmobile}) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  padding: 0px 20px;
  text-decoration: none;
  font-weight: 300;
  color: ${colors.primaryYellow};
  &:hover {
    color: ${colors.primaryYellow};
  }
`;

const StyledPagesLink = styled(Link)`
  font-size: 14px;
  padding: 0px 20px;
  text-decoration: none;
  font-weight: 300;
  color: ${colors.primaryYellow};
  &:hover {
    color: ${colors.primaryYellow};
  }
`;

const StyledJoinLink = styled(Link)`
  border-radius: 0px;
  font-size: 16px;
  font-family: ABeeZee;
  font-style: italic;
  font-weight: 400;
  border: none;
  padding: 10px 20px;
  background: ${colors.primaryYellow};
  color: ${colors.mainColor};
  &:hover {
    color: ${colors.mainColor} !important;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavPageDiv = styled.div`
  position: relative;
`;
const PageDropDownDiv = styled.div`
  position: absolute;
  background-color: ${colors.neutrals2};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5px;
  padding: 10px 5px;
  border-radius: 10px;
  top: 25px;
  width: 200px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export default Header;
