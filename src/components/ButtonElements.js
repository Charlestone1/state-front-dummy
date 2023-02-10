import styled from "styled-components";
// import { Link } from "react-scroll";

export const Button = styled.a`
  border-radius: 0.375rem;
  background: ${({ primary }) => (primary ? "#164E63" : "#164E63")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#164E63")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid ${({ dark }) => (dark ? "#fff" : "#164E63")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid ${({ dark }) => (dark ? "#164E63" : "#fff")};
    // background: ${({ primary }) => (primary ? "#fff" : "#164E63")};
    background: #fff;
    // color: #010606;
    color: ${({ dark }) => (dark ? "#164E63" : "#164E63")};
  }
`;
