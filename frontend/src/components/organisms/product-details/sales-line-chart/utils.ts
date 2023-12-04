import * as d3 from "d3";
import { iStacklineSales } from "../../../../models/StacklineDataModel";

export interface iLineChartSales extends iStacklineSales {
  date: Date;
}

/**
 * From the string date, creates a new date object and adds it to the sales object for
 * each item in the array.
 *
 * @param sales
 * @returns
 */
export const addDatesToSalesObject = (
  sales: iStacklineSales[]
): iLineChartSales[] => {
  const parseDate = d3.timeParse("%Y-%m-%d");
  return sales.map((d) => {
    return {
      ...d,
      date: parseDate(d.weekEnding),
    };
  });
};

/**
 * Creates the x and y scales for the line chart.
 */
export const setupXandYScales = (
  sales: iLineChartSales[],
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  width: number
): {
  x: d3.ScaleTime<number, number>;
  y: d3.ScaleLinear<number, number>;
} => {
  const x = d3
    .scaleTime()
    .domain(d3.extent(sales, (d) => d.date))
    .range([0, width - 80]);

  const y = d3
    .scaleLinear()
    .domain([
      -2 * d3.max(sales, (d) => d.retailSales),
      2 * d3.max(sales, (d) => d.retailSales),
    ])
    .range([600, 0]);

  return { x, y };
};

/**
 * Creates the x and y axis for the line chart.
 */
export const createD3Axis = (
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  x: d3.ScaleTime<number, number>,
  y: d3.ScaleLinear<number, number>
) => {
  svg
    .append("g")
    .attr("class", "x-axis")
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b")));

  svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));
};

// This type will extract only the keys from the interface that are associated with number values.
type NumberKeysOf<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

/**
 * Creates a line for the line chart.
 */
export const createD3Line = (
  yProp: NumberKeysOf<iLineChartSales>,
  x: d3.ScaleTime<number, number>,
  y: d3.ScaleLinear<number, number>,
  sales: iLineChartSales[]
) => {
  return d3
    .line<iLineChartSales>()
    .curve(d3.curveBasis)
    .x((d) => x(d.date))
    .y((d) => y(d[yProp]));
};

/**
 * Plots a line on the line chart.
 */
export const plotD3Line = (
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  sales: iLineChartSales[],
  line: d3.Line<iLineChartSales>,
  color: string
) => {
  svg.append("path").datum(sales).attr("stroke", color).attr("d", line);
};
