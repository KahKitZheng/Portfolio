import React from "react";
import styled from "styled-components";
import media from "styles/media";

const SectionBase = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 10vh;
  margin-bottom: 20vh;
  /* font-family: Righteous; */

  /* margin-top: 1.5rem; */
  /* margin-bottom: 6rem; */

  ${media.tablet`
    padding-top: 10vh;
    margin-bottom: 20vh;
  `}

  ${media.laptop`
    padding-top: 5vh;
    margin-bottom: 20vh;
  `}

  ${media.laptopL`
    padding-top: 10vh;
    margin-bottom: 20vh;
    /* max-width: 1200px; */
    /* padding: 0 16rem;
    margin: auto; */
  `}
`;

const SectionBackground = styled.span`
  font-family: Righteous;
  font-size: 4rem;
  text-transform: uppercase;
  position: relative;
  /* margin: 1rem 1.1rem; */
  text-shadow: 2px 2px ${({ theme }) => theme.font.color.title};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  /* -webkit-text-stroke-color: $title-color; */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  z-index: -5;

  ${media.tablet`
    font-size: 8rem;
    /* padding: 0 4rem; */
    text-shadow: none;
    -webkit-text-stroke-color: #c5cee921;
  `}

  ${media.laptop`
    /* padding: 0 6rem; */
  `}

  ${media.laptopL`
    font-size: 12rem;
    /* margin: 0;
    padding: 0; */
  `}
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.font.color.title};
  display: none;
  font-family: Righteous;
  font-size: 3rem;
  margin: -55px 0 1rem;

  &::first-letter {
    text-transform: capitalize;
  }

  ${media.tablet`
    display: initial;
    margin: -4.5rem 0 0.5rem;
  `}

  ${media.laptop`
    /* padding: 0 6rem; */
    margin: -3.5rem 0 0.5rem;
  `}

  ${media.laptopL`
    font-size: 5rem;
    margin: -5.5rem 0 1.5rem;
    /* padding: 0; */
  `}

  ${media.desktop`
  `}
`;

const SectionContent = styled.div`
  margin-top: 1.5rem;
  /* margin-bottom: 6rem; */

  /* ${media.laptop`
    margin-bottom: 20vh;
  `} */
`;

const Section = (props) => {
  const { name, id } = props;

  return (
    <SectionBase id={id}>
      <SectionBackground>{name}</SectionBackground>
      <SectionTitle>{name}.</SectionTitle>
      <SectionContent>{props.children}</SectionContent>
    </SectionBase>
  );
};

export default Section;
