import styled from "styled-components";

export const DivLineChartContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 40px 1rem 40px;

  h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    width: 100%;
    overflow: visible;

    path {
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      transform: translate(2px, 0);
      fill: none;
    }

    .y-axis {
      display: none;
    }

    .x-axis {
      transform: translate(0, 400px);
    }

    // x-axis text
    .x-axis .domain {
      display: none;
    }

    .x-axis text {
      text-anchor: middle;
      transform: translate(1rem, 2rem);
      font-size: 14px;
      color: ${({ theme }) => theme.colors.darkGrey};
      text-transform: uppercase;
    }

    .x-axis .tick line {
      stroke: none;
    }
  }

  // creating the line between x-axis and graph
  &:after {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.moderateGrey};
  }
`;
