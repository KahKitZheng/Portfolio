import React from "react";
import GithubIcon from "./githubIcon";

const card = (props) => {
  const { title, description, demo, git, tags } = props.project;

  return (
    <div className="card">
      <div className="card__top">
        <a
          href={demo === "" ? null : demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View this project live"
          className={demo === "" ? "card__title" : "card__title--link"}
        >
          {title ? title : "T.B.D."}
        </a>
        {git ? (
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View this project on Github"
            className="card__icon"
          >
            <GithubIcon />
          </a>
        ) : null}
      </div>
      <p className="card__description">
        {description ? description : "Probably something cool!"}
      </p>

      <div className="card__tags">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <p className="card__tag" key={tag}>
              {tag}
            </p>
          ))
        ) : (
          <p className="card__tag">
            <span role="img" aria-label="Sunglasses">
              😎
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default card;
