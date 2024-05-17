import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styled from "styled-components";
import ModalTemplate from "./ModalTemplet";

import { RESPONSIVE } from "../../../../core/constants/responsive.const";
import { colors } from "../../../../core/constants/styleguide.const";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../core/hooks/rtkHooks";
import { setShowAlertAction } from "../../../../core/store/slices/alertSlice";
import {
  setShowBuyWithModalAction,
  setShowSignUpModalAction,
} from "../../../../core/store/slices/modalSlice";
import { CREATE_USER } from "../../../../graphql/Mutations";
import SelectSmall from "../../../select/SelectSmall";
import { ButtonPrimarySmall } from "../../../styleguide/styleguide";

const SignUpModal = () => {
  const dispatch = useAppDispatch();
  const { showSignUpModal } = useAppSelector((state) => state.modal);

  const [companyName, setCompanyName] = useState("");
  const [companyProfileOwnerName, setCompanyProfileOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [industrySubCategory, setIndustrySubCategory] = useState("");

  const go_to_sign_in = () => {
    dispatch(setShowSignUpModalAction(false));
    dispatch(setShowBuyWithModalAction(true));
  };

  const [createUser] = useMutation(CREATE_USER);

  const sign_up = async () => {
    if (companyName === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Company Name can't be blank!",
          },
        })
      );
    } else if (companyProfileOwnerName === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Company Profile Owner Name can't be blank!",
          },
        })
      );
    } else if (email === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Email cannot be blank!",
          },
        })
      );
    } else if (password === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Please Enter Password!",
          },
        })
      );
    } else if (location === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Please enter location!",
          },
        })
      );
    } else if (industry === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Please select industry!",
          },
        })
      );
    } else if (industrySubCategory === "") {
      dispatch(
        setShowAlertAction({
          showAlert: true,
          props: {
            type: "error",
            content: "Please select industry sub category!",
          },
        })
      );
    } else {
      try {
        const response = await createUser({
          variables: {
            company_name: companyName,
            company_profile_owner_name: companyProfileOwnerName,
            email: email,
            password: password,
            location: location,
            industry: industry,
            industry_sub_category: industrySubCategory,
          },
        });

        if (response.data) {
          dispatch(setShowSignUpModalAction(false));
          dispatch(setShowBuyWithModalAction(true));
          dispatch(
            setShowAlertAction({
              showAlert: true,
              props: {
                type: "success",
                content: "Registeration successed!",
              },
            })
          );
        }
      } catch (error) {
        dispatch(
          setShowAlertAction({
            showAlert: true,
            props: {
              type: "error",
              content: "Registeration failed!",
            },
          })
        );
      }
    }
  };

  return (
    <ModalTemplate
      showsModal={showSignUpModal}
      title={
        <StyledModalTitle>
          <StyledLogoTitle>{`STAFIR`}</StyledLogoTitle>
          <StyledGeneralTitle>{`SIGN UP`}</StyledGeneralTitle>
        </StyledModalTitle>
      }
      content={
        <StyledModalContent>
          <StyledMainContent>
            <StyledTextField
              placeholder={`Company name`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCompanyName(event.target.value)
              }
            />
            <StyledTextField
              placeholder={`Company Profile Owner name`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCompanyProfileOwnerName(event.target.value)
              }
            />
            <StyledTextField
              placeholder={`Email`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <StyledTextField
              placeholder={`Password`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              type="password"
            />
            <StyledTextField
              placeholder={`Location`}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLocation(event.target.value)
              }
            />
            <SelectSmall
              label={`Industry`}
              items={["Computer", "Clothing", "Gaming"]}
              setValue={(data: string) => setIndustry(data)}
            />
            <SelectSmall
              label={`Industry Sub Category`}
              items={["Computer", "Clothing", "Gaming"]}
              setValue={(data: string) => setIndustrySubCategory(data)}
            />
          </StyledMainContent>
          <StyledButton onClick={sign_up}>{`SIGN UP`}</StyledButton>
        </StyledModalContent>
      }
      footer={
        <StyledFooter>
          <StyledP>{`If you are already registered, Please`}</StyledP>
          <StyledA onClick={go_to_sign_in}>Sign In</StyledA>
        </StyledFooter>
      }
    />
  );
};

const StyledModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const StyledLogoTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.middleBlue};
`;

const StyledGeneralTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.neutrals3};
`;

const StyledModalContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px;
`;

const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    width: 500px;
  }
`;

const StyledButton = styled(ButtonPrimarySmall)`
  border-radius: 5px;
  font-size: 16px;
  border: none;
  height: 32px;
  width: 83px;
  background: ${colors.middleBlue};
  font-family: Calibri;
`;

const StyledFooter = styled.div`
  border-radius: 5px;
  background-color: ${colors.neutrals6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 6px;
  }
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 17px;
  text-align: center;
`;

const StyledA = styled.a`
  color: ${colors.middleBlue};
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;
  margin-top: -12px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    margin-top: 0px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default SignUpModal;
