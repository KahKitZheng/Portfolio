import styled, { css } from "styled-components";
import media from "./media";

export const Container = styled.div`
  margin: auto 1.5rem;
  max-width: 1200px;

  ${media.tablet`
    padding: 0 4rem;
  `}

  ${media.laptop`
    padding: 0 6rem;
  `}

  ${media.laptopL`
    margin: auto;
    padding: 0 16rem;
  `}

  ${media.desktop`
    margin: auto;
  `}
`;

export const TextGradient = css`
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  background: -o-linear-gradient(
    right,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  background: -moz-linear-gradient(
    right,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
