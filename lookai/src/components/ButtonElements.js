import styled from "styled-components";
import { Link } from 'react-scroll';
import {Link as Linkr} from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#B033E5" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  textDecoration: underline #b033e5;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#37A7DF" : "#37A7DF")};
    textDecoration: underline #37A7DF
  }
`;

export const Buttong = styled(Linkr)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#B033E5" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  textdecoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#37A7DF" : "#37A7DF")};
    textdecoration: underline #37a7df;
  }
`;