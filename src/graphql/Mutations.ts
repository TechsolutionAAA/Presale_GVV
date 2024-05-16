import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $company_name: String!
    $company_profile_owner_name: String!
    $email: String!
    $password: String!
    $location: String!
    $industry: String!
    $industry_sub_category: String!
  ) {
    createUser(
      company_name: $company_name
      company_profile_owner_name: $company_profile_owner_name
      email: $email
      password: $password
      location: $location
      industry: $industry
      industry_sub_category: $industry_sub_category
    ) {
      id
      company_name
      company_profile_owner_name
      email
      password
      location
      industry
      industry_sub_category
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
	  successful
      message
    }
  }
`;
