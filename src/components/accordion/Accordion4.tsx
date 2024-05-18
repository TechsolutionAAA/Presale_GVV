// This component is used in `Header` navigation
import React, { ForwardedRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import chevronSrc from "../../assets/images/chevron.svg";
import { colors } from "../../core/constants/styleguide.const";
import { Body1Bold } from "../styleguide/styleguide";

interface IAccordion4Props {
  title: string;
  id?: string;
  children?: JSX.Element;
  childrenSelected: boolean;
}

const Accordion4 = React.forwardRef((props: IAccordion4Props, ref: ForwardedRef<HTMLElement>) => {
  const [isOpened, setIsOpened] = useState(false);
  const childrenRef = useRef(null as null | HTMLDivElement);
  const { childrenSelected } = props;
  useEffect(() => {
    if (childrenRef.current) {
      childrenRef.current.style.setProperty(
        "max-height",
        isOpened ? (childrenRef.current.scrollHeight + "px") : "0"
      );
    }
  }, [isOpened, childrenRef.current]);

  const onClickHead = (e: any) => {
    e.currentTarget.parentElement.parentElement.childNodes.forEach((accordion: any) => {
      if (accordion.lastChild.style.maxHeight !== "0px") {
        accordion.firstChild.click();
      }
    });
    setIsOpened(!isOpened);
  };

  return (
    <></>
    // <StyledContainer className={isOpened ? "isOpened" : ""}>
    //   <StyledHead onClick={onClickHead} ref={ref} id={props.id} className={ childrenSelected ? "selected" : "" }>

    //     <StyledTitle isOpened={isOpened} className={isOpened ? "isOpened" : ""}>
    //       {props.title}
    //     </StyledTitle>

    //     <StyledArrow src={chevronSrc} isOpened={isOpened} />
    //   </StyledHead>

    //   <StyledBody isOpened={isOpened} ref={childrenRef}/*  style={{display: isOpened ? "block" : "none"}} */>
    //     {props.children}
    //   </StyledBody>
    // </StyledContainer>
  );
});

const StyledContainer = styled.div`
  align-items: center;
  width: 728px;
  &:last-child > div:first-child {
    border-bottom: 0px !important;
    padding-bottom: 0px !important;
  }
  @media screen and (max-width: 768px) {
    width: 546px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  &.isOpened {
    background-color: ${colors.neutrals2};
  }
`;


const StyledHead = styled.div`
  display: flex;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${colors.neutrals3};
  transition: all 0.5s ease-out;
  cursor: pointer;

  &.selected {
    padding-left: 21px;
    border-left: solid 3px ${colors.primaryBlue};
    > * {
     color: ${colors.neutrals8} 
    }
  }
  @media screen and (max-width: 320px){
    padding: 0px 2px;
  }
`;
const StyledTitle = styled(Body1Bold)`
  color: ${colors.neutrals4};
`;

const StyledArrow = styled.img`
  margin-left: 18px;
  margin-right: 9px;
  object-fit: contain;
  transition: transform 0.2s ease-out;
  transform: rotate(${(props: any) => props.isOpened ? 90 : 0}deg);
`;
const StyledBody = styled.div`
  overflow: hidden;
  transition: all 0.2s ease-out;
  opacity: ${(props: any) => props.isOpened ? 1 : 0};
`;

export default React.memo(Accordion4);