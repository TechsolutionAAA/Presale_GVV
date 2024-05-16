import React from "react";
import { styled } from "styled-components";
import { H1 } from "../../../components/styleguide/styleguide";
import { colors } from "../../../core/constants/styleguide.const";

interface Props {
	content: string;
}

const DateTab = (props: Props) => {
	const { content } = props;
  return (
		<Container>
			<TabContent>{content}</TabContent>
		</Container>
	);
};

const Container = styled.div`
	width: 68px;
	height: 31px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: ${colors.neutrals5};
	&:hover {
		background-color: ${colors.primaryYellow};
		cursor: pointer;
	}
`;

const TabContent = styled(H1)`
	font-family: ABeeZee;
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: ${colors.mainColor};
	&:hover {
		font-style: italic;
	}
`;

export default DateTab;