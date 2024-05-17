import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Else, If, Then } from "react-if";
import SVG from "react-inlinesvg";
// import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { COMMONS } from "../../../../assets/i18n/commons";
import closeSrc from "../../../../assets/webroot/img/index/close.svg";
import { colors } from "../../../../core/constants/styleguide.const";
// import { useLowercasedAccount } from "../../../../core/hooks/useLowercasedAccount";
import { useWatchResize } from "../../../../core/hooks/useWatchResize";
import {
  signPath,
  round1Path,
  round2Path,
  homePath,
  portfolioPath,
  roundPath,
} from "../../../../core/util/pathBuilder.util";
// import Accordion4 from "../../../accordion/Accordion4";
import RightArrowImage from "../../../../assets/webroot/img/index/right-arrow.svg";
// import ConnectWalletButton from "../../../button/connect-wallet-button/ConnectWalletButton";
import Logo from "../../../../assets/webroot/img/logos/logo(38x26).png";
import { Body1Bold } from "../../../styleguide/styleguide";
import { navLinks } from "../../Header";
import "./lateral-menu.scss";
import { useAppDispatch } from "../../../../core/hooks/rtkHooks";
import { setRound } from "../../../../core/store/slices/roundSlice";

interface Props {
  onClose: () => void;
}

export default function LateralMenu(props: Props) {
  // const intl = useIntl();
  const location = useLocation();
  // const { address, isConnected } = useLowercasedAccount();
  const { smallerThanMobile } = useWatchResize();
  const dispatch = useAppDispatch();

  // const isBlogPage = useMemo(() => {
  //   return location.pathname.indexOf(blogPath()) >= 0;
  // }, [location]);
  const isBlogPage = true;
  const address = "";
  const isConnected = false;
  const [showPlanktonModal, setShowPlanktonModal] = useState(false);

  const [childrenSelected, setChildrenSelected] = useState(false);

  // const childrenSelected = (location.pathname == round1Path() || location.pathname == round2Path() || location.pathname == roundPath()) ? true : false;
  return createPortal(
    <div className="lateral-menu">
      <div className="header">
        <LogoSection>
          <img
            src={Logo}
            style={{ width: "25px", height: "24px" }}
            alt="logo"
          ></img>
          <h3 style={{ color: `${colors.neutrals8}` }}>{`GVV`}</h3>
        </LogoSection>
        <button onClick={props.onClose}>
          <img src={closeSrc} />
        </button>
      </div>

      {navLinks.map((navLink, index) => (
        <If key={index} condition={navLink.title === "Pages"}>
          <Then>
            <div key={index}>
              {/* <Accordion4 title={`Fans`} childrenSelected={childrenSelected}> */}
              {/* <> */}
              <StyledLink
                to={""}
                onClick={(e) => setChildrenSelected(!childrenSelected)}
                className={`link-row ${childrenSelected ? "selected" : ""}`}
              >
                <StyledRightArrow src={RightArrowImage} />
                {`Pages`}
              </StyledLink>
              {childrenSelected && (
                <>
                  <StyledChildrenLink
                    to={signPath()}
                    onClick={() => {
                      props.onClose();
                      dispatch(setRound({ roundNumber: 1 }));
                    }}
                  >
                    <StyledText>{`Private Sales Round1`}</StyledText>
                  </StyledChildrenLink>
                  <StyledChildrenLink
                    to={signPath()}
                    onClick={() => {
                      props.onClose();
                      dispatch(setRound({ roundNumber: 2 }));
                    }}
                  >
                    <StyledText>{`Private Sales Round2`}</StyledText>
                  </StyledChildrenLink>
                  <StyledChildrenLink
                    to={signPath()}
                    onClick={() => {
                      props.onClose();
                      dispatch(setRound({ roundNumber: 3 }));
                    }}
                  >
                    <StyledText>{`Public Round`}</StyledText>
                  </StyledChildrenLink>
                </>
              )}
              {/* </> */}
              {/* </Accordion4> */}
            </div>
          </Then>
          <Else>
            <StyledLink
              key={index}
              className={`link-row ${
                location.pathname == navLink.path && !childrenSelected
                  ? "selected"
                  : ""
              }`}
              to={navLink.path}
              onClick={() => props.onClose()}
            >
              {index === 2 && <StyledRightArrow src={RightArrowImage} />}
              {/* {intl.formatMessage(navLink.title)} */}
              {navLink.title}
            </StyledLink>
          </Else>
        </If>
      ))}

      <div
        className={`buttons-container ${
          isBlogPage ? "hide-section-for-blog" : ""
        }`}
      >
        {address && isConnected ? (
          <>
            {/* <CreateNFTButton onClicked={() => props.onClose()} /> */}
            <Link to={portfolioPath()} onClick={() => props.onClose()}>
              {/* <UserThumb
                address={address}
                displayLastCharacters={smallerThanMobile}
                mobileView={true}
              /> */}
            </Link>
          </>
        ) : (
          // <ConnectWalletButton />
          <></>
        )}
      </div>
      {showPlanktonModal && (
        // <PlanktonModal />
        <></>
      )}
    </div>,
    document.querySelector("body") as HTMLBodyElement
  );
}

const StyledLink = styled(Link)`
  padding-left: 24px;
  display: flex !important;
  align-items: center;
  transition: all 0.3s ease-in;
  &.selected {
    padding-left: 21px;
    border-left: solid 3px ${colors.primaryYellow};
    > * {
      color: ${colors.neutrals8};
    }
  }

  @media screen and (max-width: 320px) {
    padding-left: 3px;
  }
`;

const StyledChildrenLink = styled(Link)`
  padding-left: 24px;
  display: flex !important;
  align-items: center;
  transition: all 0.3s ease-in;
  font-size: 12px;
  &.selected {
    padding-left: 21px;
    border-left: solid 3px ${colors.primaryYellow};
    > * {
      color: ${colors.neutrals8};
    }
  }

  @media screen and (max-width: 320px) {
    padding-left: 20px;
  }
`;

const StyledRightArrow = styled.img`
  margin-right: 17.5px;
  width: 21px;
  height: 13.5px;
`;

const StyledText = styled(Body1Bold)`
  padding: 16px 0px;
  color: ${colors.neutrals4};
  &:hover {
    color: ${colors.neutrals8};
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
