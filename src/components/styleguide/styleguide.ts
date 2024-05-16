import styled, { css } from "styled-components";

import { RESPONSIVE } from "../../core/constants/responsive.const";
import ModalContent from "../modal/children/modal-content/ModalContent";
import { colors, sizes } from "./../../core/constants/styleguide.const";

export const H1 = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${sizes.xxxxxl};
  line-height: ${sizes.xxxxxl};
  letter-spacing: -0.02em;
`;

export const H2 = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${sizes.xxxl};
  line-height: ${sizes.xxxxl};
  letter-spacing: -0.02em;
`;

export const H3 = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${sizes.xxl};
  line-height: ${sizes.xxxl};
  letter-spacing: -0.01em;
`;

export const H4 = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700 !important;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.01em;
`;

export const Body1 = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const Body1Bold = styled(Body1)`
  font-weight: 600 !important;
`;

export const Body2 = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Body2Bold = styled(Body2)`
  font-weight: 500 !important;
`;

export const Caption1 = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const Caption1Bold = styled(Caption1)`
  font-weight: 600 important;
`;

export const Caption2 = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

export const Caption2Bold = styled(Caption2)`
  font-weight: 600 !important;
`;

export const HairlineLarge = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;

export const HairlineSmall = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
`;

export const ButtonDefault = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;

export const Hairline2 = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
`;

export const ButtonSmall = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export const Button2 = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export const Flex = styled.span`
  display: flex !important;
`;

export const Sub = styled.sub`
  padding: 0;
  margin: 0;
  font-size: 12px;
  line-height: 12px;
`;

export const Caption = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.neutrals4};
`;

export const CaptionBold = styled(Caption)`
  font-weight: 500 !important;
`;

export const Col = styled.div``;

export const Block = styled.div``;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 27px;
  height: ${sizes.xxxl};
  line-height: 16px;
  border-radius: 90px;
  color: ${colors.neutrals8};
  font-size: 16px;
  font-weight: 700;
  font-family: "DM Sans";
  white-space: nowrap;
`;

export const ButtonPrimary = styled(Button)`
  background: ${colors.primaryBlue};

  &:hover {
    transition: all 0.25s ease;
    background-color: ${colors.darkBlue};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    background-color: ${colors.neutrals4};
  }
`;
export const ButtonPrimarySmall = styled(Button)`
  background: ${colors.primaryYellow};
  font-size: 15px;
  font-family: ABeeZee;
  height: ${sizes.xxl};
  &:hover {
    transition: all 0.25s ease;
    background-color: ${colors.primaryYellow};
    color: ${colors.mainColor};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    background-color: ${colors.neutrals4};
  }
`;

export const ButtonSecondary = styled(Button)`
  background: none;
  box-shadow: inset 0 0 0 2px ${colors.neutrals3};

  &:hover {
    transition: all 0.25s ease;
    box-shadow: inset 0 0 0 2px ${colors.neutrals8};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    color: ${colors.neutrals3};
    box-shadow: inset 0 0 0 2px ${colors.neutrals3};
  }
`;
export const ButtonSecondarySmall = styled(Button)`
  background: none;
  box-shadow: inset 0 0 0 2px ${colors.neutrals3};
  font-size: 14px;
  height: ${sizes.xxl};
  &:hover {
    transition: all 0.25s ease;
    box-shadow: inset 0 0 0 2px ${colors.neutrals8};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    color: ${colors.neutrals3};
    box-shadow: inset 0 0 0 2px ${colors.neutrals3};
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 100%;
  }
`;

export const Padding = css`
  padding: 0 76px;
  @media (max-width: ${RESPONSIVE.large}) {
    padding: 0 76px;
  }
  @media (max-width: ${RESPONSIVE.medium}) {
    padding: 0 64px;
  }
  @media (max-width: ${RESPONSIVE.small}) {
    padding: 0 32px;
  }
  @media (max-width: ${RESPONSIVE.xSmall}) {
    padding: 4px;
  }
`;

export const IconButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${colors.primaryBlue};
  border-radius: 100%;
  &:hover {
    transition: all 0.25s ease;
    background-color: ${colors.darkBlue};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    background-color: ${colors.neutrals4};
  }
`;

export const IconSecondaryButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: none;
  border-radius: 100%;
  box-shadow: inset 0 0 0 2px ${colors.neutrals4};
  &:hover {
    transition: all 0.25s ease;
    box-shadow: inset 0 0 0 2px ${colors.neutrals8};
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    color: ${colors.neutrals4};
    box-shadow: inset 0 0 0 2px ${colors.neutrals3};
  }
`;

export const FundsManageModalContainer = styled(ModalContent)`
  background-color: ${colors.neutrals1};
  min-height: 670px;
  display: flex;
  position: relative;
  padding: 32px;

  height: 741px;

  @media (max-width: 660px) {
    max-width: 375px;
  }

  @media (max-width: 375px) {
    height: inherit;
    border-radius: 0px;
    min-height: 100%;
    padding-right: 24px;
    padding-left: 24px;
  }
  @media (max-width: 320px) {
    padding-right: 18px;
    padding-left: 18px;
  }
`;

export const ShareButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: inset 0 0 0 2px #353945;
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: inset 0 0 0 2px #fcfcfd;
    filter: brightness(2);
  }
`;

export const Headline1 = styled.h1`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.012em;
  color: ${colors.neutrals8};
`;

export const Headline4 = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${colors.neutrals8};
`;

export const ContainerBox = styled.div`
  padding: 0 4px;
  @media screen and (min-width: 375px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 56px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 80px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 160px;
  }
`;
