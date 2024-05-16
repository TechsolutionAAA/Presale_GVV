import React from "react";
import { styled } from "styled-components";

import { colors } from "../../core/constants/styleguide.const";
import { RESPONSIVE } from "../../core/constants/responsive.const";

interface Props {
  subtitle: string;
	isWhite: boolean;
  className?: string;
}

const SubTitle = (props: Props) => {
  const { subtitle, isWhite, className } = props;

  return (
    <Container className={className}>
      <BarDiv className={ isWhite ? "white" : "" } />
      <Title className={ isWhite? "white" : "" }>{subtitle}</Title>
      <BarDiv className={ isWhite ? "white" : "" } />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
`;

const BarDiv = styled.div`
  background-color: ${colors.neutrals8};
  width: 30px;
  height: 3px;
	&.white {
		background-color: ${colors.middleBlue};
	}
  @media screen and (min-width: ${RESPONSIVE.small}) {
    width: 100px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 23px;
  color: ${colors.neutrals8};
	&.white {
		color: ${colors.neutrals2};
	}
`;

export default SubTitle;
