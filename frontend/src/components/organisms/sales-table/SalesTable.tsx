import React, { useEffect, useState } from "react";
import { iStacklineSales } from "../../../models/StacklineDataModel";
import { DivSalesTableContainer, ThSalesTableHeader } from "./styles";
import {
  getNextSortState,
  iSortState,
  reverseStringDateOrder,
  sortTableData,
} from "./utils";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const TABLE_HEADERS: { key: keyof iStacklineSales; label: string }[] = [
  {
    key: "weekEnding",
    label: "Week Ending",
  },
  {
    key: "retailSales",
    label: "Retail Sales",
  },
  {
    key: "wholesaleSales",
    label: "Wholesale Sales",
  },
  {
    key: "unitsSold",
    label: "Units Sold",
  },
  {
    key: "retailerMargin",
    label: "Retailer Margin",
  },
];

interface iSalesTableProps {
  className?: string;
  salesData: iStacklineSales[];
}

const SalesTable = ({ className, salesData }: iSalesTableProps) => {
  const [tableData, setTableData] = useState<iStacklineSales[]>(salesData);
  // three states: not sorted, sorted ascending, sorted descending
  const [sortState, setSortState] = useState<iSortState>({});

  useEffect(() => {
    if (sortState.order === undefined) {
      setTableData(salesData);
      return;
    }

    setTableData(sortTableData(sortState, salesData));
  }, [sortState]);

  return (
    <DivSalesTableContainer>
      <table>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <ThSalesTableHeader
                key={header.key}
                onClick={() =>
                  setSortState(getNextSortState(sortState, header.key))
                }
                data-isactive={`${header.key == sortState.key}`}
              >
                {header.label}
                {sortState.key === header.key &&
                sortState.order === "ascending" ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </ThSalesTableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((sale: iStacklineSales, index) => {
            const currencyFormat = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });

            return (
              <tr key={index}>
                <td>{reverseStringDateOrder(sale.weekEnding)}</td>
                <td>{currencyFormat.format(sale.retailSales)}</td>
                <td>{currencyFormat.format(sale.wholesaleSales)}</td>
                <td>{sale.unitsSold}</td>
                <td>{currencyFormat.format(sale.retailerMargin)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DivSalesTableContainer>
  );
};

export default SalesTable;
