import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "styled-components";
import { colors } from "../../core/constants/styleguide.const";

interface Props {
	label: string;
}

const CheckBox = ( props: Props ) => {
	const { label } = props;

  return (
		<MainContent>
			<Checkbox />
			<StyledP>{label}</StyledP>
		</MainContent>
  );
};

const MainContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const StyledP = styled.p`
	color: ${colors.middleBlue};
`;
export default CheckBox;
