import styled from "styled-components";

export const DivSalesTableContainer = styled.div`
  margin-top: 4rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  table {
    box-sizing: border-box;
    width: 100%;
  }

  th,
  td {
    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      text-align: right;
    }
  }

  td {
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.moderateGrey};
    color: ${({ theme }) => theme.colors.darkGrey};

    &:last-child {
      padding-right: 3rem;
    }
  }
`;

export const ThSalesTableHeader = styled.th<{ isActive: boolean }>`
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */

  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.moderateGrey};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  font-weight: 400;
  text-align: left;

  padding: 1.5rem;
  padding-right: 0;

  &:last-child {
    padding-right: 1.5rem;
  }

  svg {
    margin-left: 0.5rem;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.lightBlue : theme.colors.darkGrey};
  }
`;
