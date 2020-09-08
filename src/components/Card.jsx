import React from "react";
import Github from "icons/Github";
import styled from "styled-components";
import media from "styles/media";
import { TextGradient } from "styles/mixin";

const CardBase = styled.div`
  background-color: ${({ theme }) => theme.background.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 6px;
  padding: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  margin-top: 0.5rem;
`;

const CardLink = styled.a`
  color: ${({ theme }) => theme.font.color.subtitle};
  font-family: Righteous;
  font-size: 28px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.15s linear;

  :hover {
    ${({ demo }) => (demo ? TextGradient : null)}
  }
`;

const CardIcon = styled.a`
  margin-left: 0.5rem;
`;

const CardDescription = styled.p`
  font-weight: 400;
  height: 12rem;
  line-height: 24px;
  margin-top: 1.5rem;

  ${media.laptop`
    max-height: 14rem;
  `}

  /* ${media.laptopL` */
    /* height: 12rem; */
    /* max-height: 14rem; */
  /* `} */
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  margin: 1rem 0 0 0;
`;

const CardTag = styled.p`
  display: inline-block;
  font-family: "Fira Code";
  font-size: 14px;
  margin: 4px 16px 4px 0;
  color: #878fa7;
`;

const card = (props) => {
  const { title, description, demo, git, tags } = props.project;

  return (
    <CardBase className="card">
      <CardHeader className="card__top">
        <CardLink
          href={demo === "" ? null : demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View this project live"
          demo={demo}
          // className={demo === "" ? "card__title" : "card__title--link"}
        >
          {title ? title : "T.B.D."}
        </CardLink>
        {git ? (
          <CardIcon
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View this project on Github"
            // className="card__icon"
          >
            <Github />
          </CardIcon>
        ) : null}
      </CardHeader>
      <CardDescription className="card__description">
        {description ? description : "Probably something cool!"}
      </CardDescription>

      <CardTags className="card__tags">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <CardTag className="card__tag" key={tag}>
              {tag}
            </CardTag>
          ))
        ) : (
          <CardTag className="card__tag">
            <span role="img" aria-label="Sunglasses">
              😎
            </span>
          </CardTag>
        )}
      </CardTags>
    </CardBase>
  );
};

export default card;
