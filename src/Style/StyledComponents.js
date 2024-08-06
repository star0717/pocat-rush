import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const WholeWrapper = styled.div`
  max-width: 1440px;
`;
export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr};
  justify-content: ${(props) => props.ju};
  align-items: ${(props) => props.al};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background-color: ${(props) => props.bgColor};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
  position: ${(props) => (props.isFixed ? `fixed` : ``)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin || `0`};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  transition: ${(props) => props.transition || `0.3s`};
  background-image: ${(props) => props.bgImg};
`;

export const Text = styled.p`
  margin: ${(props) => props.margin || `0`};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};

  &span {
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
  }

  @media (max-width: 1440) {
  }
`;

export const PocatRushButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: ${(props) => (props.isPink ? `pink` : `#242424`)};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 800;
`;

// Header.js
export const HeaderText = styled.p`
  margin: ${(props) => props.margin || `0`};
  font-size: ${(props) => (props.isSmall ? `14px` : `16px`)};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || `10px 32px`};
  cursor: pointer;

  @media (max-width: 1440) {
  }
`;

// -----------------------------------------------------

// SmallTable.js
export const SmallTableWrapper = styled.table`
  width: 650px;
  display: flex;
  flex-direction: column;
`;

export const SmallTableTr = styled.tr`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isHead ? `2px solid #181818` : `1px solid #ccc`};
  padding: 6px 0;
  cursor: pointer;
`;

export const SmallTableTh = styled.th``;

export const SmallTableTd = styled.td``;

export const SmallTablePlusButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #878787;
  color: #878787;
  font-size: 20px;
`;

// -----------------------------------------------------

// Footer.js
export const Form = styled.form``;

export const Select = styled.select`
  background: transparent;
  width: 160px;
  height: 40px;
  color: #fff;
  text-align: center;

  &focus {
    border: none;
  }
`;

export const Option = styled.option`
  color: #000;
`;

// -----------------------------------------------------

// main.js
export const GameStartButton = styled.button`
  width: 200px;
  background-color: #181818;
  color: #fff;
  height: 60px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  border: 0;
  margin-right: 100px;
  justify-content: flex-end;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.color || `#fff`};
  text-decoration: none;
`;
