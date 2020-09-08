import React from "react";
import Section from "pages/Home/Section";
import styled, { css } from "styled-components";
import media from "styles/media";
import Button from "styles/button";

const ContactBase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
  grid-auto-flow: row;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 2rem;
  `}

  ${media.laptop`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 4rem;
  `}
`;

const ContactMessage = styled.p`
  font-family: "Fira Code";
  font-size: 18px;
  /* // grid-row: 1; */
  line-height: 32px;
  margin: 0;
  text-align: justify;

  ${media.tablet`
    grid-column: 1 / 3;
  `}

  ${media.tablet`
    grid-column: 1;
    grid-row: 1 / 3;
    text-align: start;
  `}
`;

const ContactSection = css`
  font-family: Righteous;
  margin-top: 2.5rem;
  margin-bottom: 0;
`;

const ContactEmail = styled.div`
  ${ContactSection};
  grid-row: 2;

  ${media.tablet`
    grid-row: 1;
    margin-top: 0;
    margin-bottom: 2rem;
  `}

  ${media.laptop`
    grid-column: 2;
    grid-row: 1;
  `}
`;

const ContactGithub = styled.div`
  ${ContactSection};
  grid-row: 3;

  ${media.tablet`
    grid-row: 2;
    margin-top: 0;
    margin-bottom: 2rem;
  `}

  ${media.laptop`
    grid-column: 2;
    /* grid-row: 2; */
  `}
`;

const ContactLabel = styled.span`
  color: ${({ theme }) => theme.font.color.subtitle};
  font-size: 1.1rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  display: block;
  font-size: 1.5rem;
  line-height: 30px;
  margin-top: 0.25rem;
  text-decoration: none;
  transition: color 0.3s linear;
  width: max-content;

  ${media.tablet`
    font-size: 1.25rem;

    &:hover {
      color: ${({ theme }) => theme.color.tertiary};
    }
  `}
`;

const ResumeButton = styled(Button).attrs({
  as: "a",
})`
  ${ContactSection};
  grid-row: 4;

  ${media.tablet`
    grid-column: 2;
    margin: 0;
  `}
`;

const contact = () => (
  <Section id="contact" name={"Contact"}>
    <ContactBase>
      <ContactMessage>
        Currently looking for a graduate internship. Feel free to contact me if
        you think I’m the person you are looking for.
      </ContactMessage>
      <ContactEmail>
        <ContactLabel>Contact met at:</ContactLabel>
        <ContactLink href="mailto:kahkitzheng@gmail.com">
          KahKitZheng@gmail.com
        </ContactLink>
      </ContactEmail>
      <ContactGithub>
        <ContactLabel>Find me at:</ContactLabel>
        <ContactLink
          href="https://github.com/KahKitZheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github.com/KahKitZheng
        </ContactLink>
      </ContactGithub>
      <ResumeButton
        href={"/CV-KahKitZheng.pdf"}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Resume
      </ResumeButton>
    </ContactBase>
  </Section>
);

export default contact;
