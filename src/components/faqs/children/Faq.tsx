import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import { colors } from "../../../core/constants/styleguide.const";

interface Props {
  title: string;
  description: string;
}

const Faq = (props: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const { title, description } = props;

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleMouseEnter = () => {
    setIsOpened(true);
  };

  const handleMouseLeave = () => {
    setIsOpened(false);
  };

  return (
    <Container
      isOpened={isOpened}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title isOpened={isOpened}>{title}</Title>
      {isOpened && <Description isOpened={isOpened}>{description}</Description>}
    </Container>
  );
};

interface StyleProps {
  isOpened: boolean;
}
const fadeIn = keyframes`
from {
	opacity: 0;
}
to {
	opacity: 1;
}
`;

const fadeOut = keyframes`
from {
	opacity: 1;
}
to {
	opacity: 0;
}
`;
const Container = styled.div<StyleProps>`
  width: 100%;
  padding: 40px 0px;
  border-top: 1px solid
    ${(props) => {
      return props.isOpened ? `${colors.primaryYellow}` : `${colors.neutrals8}`;
    }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
  &:hover {
    cursor: pointer;
    border-top: 1px solid ${colors.primaryYellow};
  }
  transition: all 0.3s ease-in;
`;

const Title = styled.h1<StyleProps>`
  padding-left: 20px;
  font-family: ABeezee;
  font-size: 22px;
  line-height: 24px;
  color: ${(props) => {
    return props.isOpened ? `${colors.primaryYellow}` : `${colors.neutrals8}`;
  }};
  transition: all 0.3s ease-in;
`;

const Description = styled.p<StyleProps>`
  padding-left: 20px;
  font-family: ABeeZee;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.neutrals4};
  animation: ${(props) => (props.isOpened ? fadeIn : fadeOut)} 0.5s ease-in-out;
`;

export default Faq;
