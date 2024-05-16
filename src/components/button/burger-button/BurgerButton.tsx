import React from "react";

import { styled } from "styled-components";

import burgerSrc from "../../../assets/webroot/img/front/device_cin.png";
import { colors } from "../../../core/constants/styleguide.const";

const BurgerButton = () => {
  return (
    <StyledButton>
      <img src={burgerSrc} alt=""></img>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${colors.neutrals8};
  border: none;
`;

export default BurgerButton;
