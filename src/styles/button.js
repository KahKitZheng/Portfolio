import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Button = styled(Link)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  max-width: max-content;
  padding: 12px 18px;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.tertiary};
    color: ${({ theme }) => theme.color.tertiary};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
