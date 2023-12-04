import { iStacklineSales } from "../../../models/StacklineDataModel";

export interface iSortState {
  key?: keyof iStacklineSales;
  order?: string;
}

/**
 * Reverses the order of the string and slices the first two digits off the year.
 */
export const reverseStringDateOrder = (date: string): string => {
  const dateArray = date.split("-");
  dateArray[0] = dateArray[0].slice(2);
  const reversedDateArray = dateArray.reverse();
  const reversedDate = reversedDateArray.join("-");
  return reversedDate;
};

/**
 *  Decides what the next sort state should be.
 *  The sort state order is, first click: ascending, second click: descending, third click: no sort.
 */
export const getNextSortState = (
  sortState: iSortState,
  key: keyof iStacklineSales
): iSortState => {
  // sort is cleared and back to normal table
  if (sortState.order === "descending" && sortState.key === key) {
    return {};
  }

  // set sortState to ascending if not sorted or sorted descending
  if (sortState.order === "ascending" && sortState.key === key) {
    return { order: "descending", key };
  } else {
    return { order: "ascending", key };
  }
};

/**
 * Sorts the table data based on the sort state.
 */
export const sortTableData = (
  sortState: iSortState,
  sales: iStacklineSales[]
): iStacklineSales[] => {
  return [...sales].sort((a, b) => {
    if (sortState.order === "ascending") {
      return a[sortState.key] > b[sortState.key] ? 1 : -1;
    } else {
      return a[sortState.key] < b[sortState.key] ? 1 : -1;
    }
  });
};
