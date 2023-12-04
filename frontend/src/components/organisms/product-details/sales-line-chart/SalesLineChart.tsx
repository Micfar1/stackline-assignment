import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { DivLineChartContainer } from "./styles";
import { iStacklineSales } from "../../../../models/StacklineDataModel";
import {
  addDatesToSalesObject,
  createD3Axis,
  createD3Line,
  plotD3Line,
  setupXandYScales,
} from "./utils";
import useWindowSize from "./windowSizeHook";
import { useTheme } from "styled-components";

interface iLineChartProps {
  className?: string;
  salesData: iStacklineSales[];
}

const LineChart = ({ className, salesData }: iLineChartProps) => {
  const theme = useTheme();
  // Custom hook detecting window size
  const [width, height] = useWindowSize();
  const d3Container = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (salesData.length && d3Container.current) {
      const svg = d3.select(d3Container.current);
      const graphWidth = d3Container.current.parentElement.offsetWidth;

      // Parse dates
      const sales = addDatesToSalesObject(salesData);

      // Set up scales
      const { x, y } = setupXandYScales(sales, svg, graphWidth);

      // Add x axis
      createD3Axis(svg, x, y);

      // Generating lines
      const retailSalesLine = createD3Line("retailSales", x, y, sales);
      const retailMarginLine = createD3Line("retailerMargin", x, y, sales);

      // Plotting lines
      plotD3Line(svg, sales, retailSalesLine, theme.colors.lightBlue);
      plotD3Line(svg, sales, retailMarginLine, theme.colors.darkGrey);

      // Clean up
      return () => {
        svg.selectAll("*").remove();
      };
    }
  }, [salesData, width, height]);

  return (
    <DivLineChartContainer className={className}>
      <h1>Retail Sales</h1>
      <svg className="d3-component" height={460} ref={d3Container} />
    </DivLineChartContainer>
  );
};

export default LineChart;
