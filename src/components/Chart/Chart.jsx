import React from "react";
import { Chart } from "react-google-charts";

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
      <Chart
        chartType="LineChart"
        width="300px"
        height="700px"
        data={data}
        options={options}
      />
    </>
  );
};

export default ChartComponent;
