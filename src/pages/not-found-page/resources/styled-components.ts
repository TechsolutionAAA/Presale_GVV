import styled from "styled-components";
import { Body2 } from "../../../components/styleguide/styleguide";
import { RESPONSIVE } from "../../../core/constants/responsive.const";
import { colors } from "../../../core/constants/styleguide.const";

export const getCSSOfStyledComponent = (component: any) => {
    return (component.componentStyle.rules.join() + component.componentStyle?.baseStyle?.rules.join() || "").replace(/,/g, "").replace(/undefined/g, "");
  };

export const Styled404 = styled.div`
  position: absolute;
  width: 100%;
  left: -4px;
  text-align: center;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 210px;
  line-height: 210px;
  color: ${colors.neutrals3};
  text-align: center;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  @media screen and (min-width: ${RESPONSIVE.mobile}) {
    font-size: 240px;
    line-height: 240px;
  }
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    left: -6px;
    font-size: 420px;
    line-height: 420px;
  }
  @media screen and (min-width: ${RESPONSIVE.large}) {
    left: -8px;
    font-size: 580px;
    line-height: 580px;
  }
  @media screen and (min-width: ${RESPONSIVE.xLarge}) {
    left: -10px;
    font-size: 726px;
    line-height: 726px;
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 114px;
  margin-bottom: 90px;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    margin-top: 106px;
    margin-bottom: 206px;
  }
  @media screen and (min-width: ${RESPONSIVE.large}) {
    margin-top: 189px;
    margin-bottom: 275px;
  }
  @media screen and (min-width: ${RESPONSIVE.xLarge}) {
    margin-top: 269px;
    margin-bottom: 365px;
  }
  .oops {
    z-index: 2;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${colors.neutrals8};
    @media screen and (min-width: ${RESPONSIVE.tablet}) {
      font-size: 48px;
      line-height: 56px;
    }
    @media screen and (min-width: ${RESPONSIVE.large}) {
      font-size: 64px;
      line-height: 64px;
    }
  }
  .description {
    z-index: 2;
    ${getCSSOfStyledComponent(Body2)}
    color: ${colors.neutrals8};
    margin-top: 24px;
    margin-bottom: 32px;
    width: 290px;
    text-align: center;
    @media screen and (min-width: ${RESPONSIVE.tablet}) {
      margin-top: 32px;
      width: 192px;
    }
    @media screen and (min-width: ${RESPONSIVE.large}) {
      width: 242px;
    }
    @media screen and (min-width: ${RESPONSIVE.xLarge}) {
      width: 290px;
    }
  }
  button {
    z-index: 2;
  }
`;