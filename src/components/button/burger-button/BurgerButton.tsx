import React from "react";

import { styled } from "styled-components";

import burgerSrc from "../../../assets/webroot/img/front/device_cin.png";
import { colors } from "../../../core/constants/styleguide.const";
import Discord from "../../../assets/webroot/img/index/burger.svg";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/rtkHooks";
import { setShowLateralMenu } from "../../../core/store/slices/modalSlice";
import LateralMenu from "../../header/children/lateral-menu/LateralMenu";

const BurgerButton = () => {
  const dispatch = useAppDispatch();
  const showLateralMenu = useAppSelector(state => state.modal.showLateralMenu);
  return (
    <StyledDiv>
      <StyledButton>
        <img src={Discord} alt="" onClick={() => dispatch(setShowLateralMenu(!showLateralMenu))}></img>
        {showLateralMenu && <LateralMenu onClose={() => dispatch(setShowLateralMenu(false))}/>}
      </StyledButton>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  border: none;
`;

export default BurgerButton;
