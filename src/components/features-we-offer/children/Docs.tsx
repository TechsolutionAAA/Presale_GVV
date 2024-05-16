import { styled } from "styled-components";
import { colors } from "../../../core/constants/styleguide.const";
import { RESPONSIVE } from "../../../core/constants/responsive.const";

interface Props {
  icon: string;
  title: string;
  className: string;
}

const Feature = (props: Props) => {
  const { icon, title, className } = props;
  return (
    <Content className={className}>
      <Icon>
        <img src={icon} alt=""></img>
      </Icon>
      <Title>{title}</Title>
    </Content>
  );
};

const Content = styled.div`
  border-radius: 20px;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.neutrals2};
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 166px;
  height: 165px;
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 16px;
  line-height: 18px;
  font-family: "ABeeZee";
  color: ${colors.neutrals8};
`;

export default Feature;
