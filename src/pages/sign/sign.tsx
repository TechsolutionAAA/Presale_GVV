import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../core/constants/styleguide.const";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Sign = () => {
  return (
    <>
      <Header />
      <OverviewIndexContainer>
        <SignContianer>
          <StyledInput placeholder="Email*"></StyledInput>
          <StyledSelect>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </StyledSelect>
          <ProceedButton to={"/round"}>{`Proceed to Purchase`}</ProceedButton>
        </SignContianer>
      </OverviewIndexContainer>
      <Footer />
    </>
  );
};

const OverviewIndexContainer = styled.div`
  margin-top: 50px;
  align-items: center;
  width: 100%;
  flex-direction: row;
  display: flex;
  gap: 150px;
  background-color: ${colors.mainColor};
  justify-content: center;
  align-items: center;
  font-family: ABeeZee;
  padding: 48px 0px 42px 0px;
`;

const SignContianer = styled.div`
  display: flex;
  padding: 100px 0px;
  flex-direction: column;
  gap: 10px;
  width: 42%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  font-weight: 400;
  text-align: center;
  font-style: italic;
  @media (max-width: 800px) {
    width: 90%;
    margin-top: 80px;
  }
`;
const ProceedButton = styled(Link)`
  width: 190px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 15px 20px;
  background-color: rgba(203, 251, 69, 0.5);
  font-weight: 400;
  text-align: center;
  font-style: italic;
  &:hover {
    color: black !important;
  }
`;
const StyledInput = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 10px;
  margin: 0px auto;
  width: 90%;
`;
const StyledSelect = styled.select`
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 10px;
  margin: 60px auto;
  width: 93%;
`;
export default Sign;
