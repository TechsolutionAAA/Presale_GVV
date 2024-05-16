import styled from "styled-components";

const Card = () => {
  return (
    <>
      <CardBox>
        <CardContent>
          <CardTop>$GVV Annualized Staking Yield</CardTop>
          <CardBottom>80.66%</CardBottom>
        </CardContent>
      </CardBox>
      <CardBox>
        <CardContent>
          <CardTop>Total $GVV Staked</CardTop>
          <CardBottom>$20,000,000</CardBottom>
        </CardContent>
      </CardBox>
      <CardBox>
        <CardContent>
          <CardTop>% $GVV Staking</CardTop>
          <CardBottom>55%</CardBottom>
        </CardContent>
      </CardBox>
      <CardBox>
        <CardContent>
          <CardTop>Minimum Allowed Staking</CardTop>
          <CardBottom>$1000 </CardBottom>
        </CardContent>
      </CardBox>
    </>
  );
};

const CardBox = styled.div`
  width: 100%;
  padding: 7px;
  background-color: rgba(203, 251, 69, 0.1);
  text-align: center;
  font-size: 20px;
  font-style: italic;
  font-family: ABeeZee;
  border-radius: 10px;
  color: #cbfb45;
  margin: 10px 0px;
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 18px;
    margin: 10px auto;
  }
`;

const CardTop = styled.div`
  padding: 20px 2px;
  border-bottom: 1px solid #cbfb45;
`;
const CardBottom = styled.div`
  padding: 20px 2px;
`;
const CardContent = styled.div`
  background-color: #161617;
`;

export default Card;
