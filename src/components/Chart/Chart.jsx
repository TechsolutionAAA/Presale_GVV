import React from "react";
import { Chart } from "react-google-charts";
import { styled } from "styled-components";

export const data = [
  ["x", "test"],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
];

export const options = {
  series: {
    1: { curveType: "function" },
  },
};
const ChartComponent = () => {
  return (
    <>
      <StyledChart
        chartType="LineChart"
        data={data}
        options={options}
      />
    </>
  );
};

const StyledChart = styled(Chart)`
  width: 430px;
  height: 400px;
  
  @media screen and (max-width: 450px) {
    width: 375px; 
  }
  
  @media screen and (max-width: 375px) {
    width: 300px;
  }
`;

export default ChartComponent;
