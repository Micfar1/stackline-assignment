import styled from "styled-components";

export const DivProductDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.black};

  h1 {
    font-size: 21px;
    margin-bottom: 0.5rem;
  }

  p {
    white-space: pre-wrap;
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    padding: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.moderateGrey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.moderateGrey};

    li {
      color: #6c6f76;
      border: 1px solid ${({ theme }) => theme.colors.moderateGrey};
      border-radius: 4px;
      padding: 0.2rem 0.8rem;
      margin: 0.4rem 0.2rem;
      font-size: 14px;
    }
  }
`;
