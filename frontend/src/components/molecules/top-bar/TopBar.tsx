import React from "react";
import styled from "styled-components";
import StacklineSVG from "../../../../assets/svg/stackline_logo.svg";

const TopBarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  height: 70px;
  display: flex;
  align-items: center;
`;

const StacklineLogo = styled.div`
  width: 18px;
  height: 60px;
  position: relative;
  overflow: hidden;
  background-image: url(${StacklineSVG});
  background-size: 800%;
  background-position: left;
  background-repeat: no-repeat;
  margin-left: 15px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: 8px;
  }
`;

interface iTopBarProps {
  className?: string;
}

const TopBar = ({ className }: iTopBarProps) => {
  return (
    <TopBarWrapper className={className}>
      <StacklineLogo />
    </TopBarWrapper>
  );
};

export default TopBar;
