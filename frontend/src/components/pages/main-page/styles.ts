import styled from "styled-components";

export const DivMainPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-gap: 4rem;
  grid-template-rows: auto 1fr;
  padding-bottom: 1rem;
`;

export const DivMainPageBody = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin: 0 1rem;
  grid-gap: 20px;
  height: 100%;
`;

export const SectionProductDetails = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SectionDataAnalytics = styled.section`
  width: 100%;
`;
