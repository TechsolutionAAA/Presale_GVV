import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../core/constants/styleguide.const";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useAppDispatch, useAppSelector } from "../../core/hooks/rtkHooks";
import { Else, If, Then } from "react-if";
import { setShowAlertAction } from "../../core/store/slices/alertSlice";

const Sign = () => {
  const [email, SetEmail] = useState("");
  const { roundNumber } = useAppSelector((state) => state.round);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const checkEmailValidation = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleClick = () => {
    if (email === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Email cannot be blank!",
          },
        })
      );
      setTimeout(
        () => dispatch(setShowAlertAction({ showAlert: false })),
        2000
      );
    } else if (checkEmailValidation(email) === false) {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Please enter exact email type!",
          },
        })
      );
      setTimeout(
        () => dispatch(setShowAlertAction({ showAlert: false })),
        2000
      );
    } else {
      const navigateLink: string =
        roundNumber === 1 || roundNumber === 2
          ? "/round" + roundNumber
          : "/round";
      navigate(navigateLink);
    }
  };
  return (
    <>
      <Header />
      <OverviewIndexContainer>
        <SignContianer>
          <StyledInput
            placeholder="Email*"
            value={email}
            onChange={(e) => SetEmail(e.target.value as string)}
          ></StyledInput>
          <StyledSelect>
            <StyledOption>Country</StyledOption>
            <StyledOption>USA</StyledOption>
            <option>Canada</option>
            <option>United Kindom</option>
          </StyledSelect>
          <If condition={roundNumber === 1}>
            <Then>
              <ProceedButton onClick={handleClick}>
                {`Proceed to Purchase`}
                <br></br>
                {`(At Round ${roundNumber})`}
              </ProceedButton>
            </Then>
            <Else>
              <If condition={roundNumber === 2}>
                <Then>
                  <ProceedButton onClick={handleClick}>
                    {`Proceed to Purchase`}
                    <br></br>
                    {`(At Round ${roundNumber})`}
                  </ProceedButton>
                </Then>
                <Else>
                  <ProceedButton onClick={handleClick}>
                    {`Proceed to Purchase`}
                    <br></br>
                    {`(At Public Round)`}
                  </ProceedButton>
                </Else>
              </If>
            </Else>
          </If>
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
  padding: 140px 0px 42px 0px;
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
const ProceedButton = styled.div`
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
    cursor: pointer;
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
  color: ${colors.neutrals7};
`;
const StyledSelect = styled.select`
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  border-radius: 10px;
  padding: 20px 10px;
  margin: 60px auto;
  width: 93%;
  color: ${colors.neutrals7};
`;

const StyledOption = styled.option`
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  height: 50px;
`;

export default Sign;
