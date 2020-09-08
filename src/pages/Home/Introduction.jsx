import React from "react";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import media from "styles/media";
import Button from "styles/button";

const Intro = styled.div.attrs(() => ({
  id: "home",
}))`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: -1rem;
`;

const Title = styled.p`
  font-family: "Fira Code";
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 0.25rem;
  background: -webkit-linear-gradient(
    #d6cfcf,
    ${({ theme }) => theme.color.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.laptop`
    font-size: 18px;
  `}
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.font.color.title};
  font-size: 32px;
  font-weight: bold;
  margin: 0;

  ${media.laptop`
    font-size: 48px;
  `}
`;

const Undertitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  margin: 0.5rem 0 0;
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

  ${media.laptop`
      font-size: 62px;
      line-height: 77px;
  `}
`;

const Description = styled.p`
  line-height: 30px;
  font-size: 20px;
  margin-bottom: 2rem;

  ${media.laptop`
    max-width: 65%;
  `}
`;

const Introduction = () => (
  <Intro>
    <Title>Hi, my name is</Title>
    <Name>Kah Kit Zheng</Name>
    <Undertitle>I build things for the web.</Undertitle>
    <Description>
      I’m a Software Engineer student at the Amsterdam University of Applied
      Sciences who specializes in Frontend development and occasionally likes to
      design.
    </Description>
    <Button smooth to={ROUTES.CONTACT_SECTION}>
      Get In Touch
    </Button>
  </Intro>
);

export default Introduction;
