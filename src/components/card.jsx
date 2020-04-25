import React from "react";
import GithubIcon from "./githubIcon";

const card = (props) => {
  const { title, description, link, tags } = props.project;

  return (
    <div className="card">
      <div className="card__icons">
        <h3 className="card__title">{title ? title : "T.B.D."}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        ) : null}
      </div>
      <p className="card__description">
        {description ? description : "Probably something cool!"}
      </p>

      <div className="card__tags">
        {tags.length > 0 ? (
          tags.map((tag) => <p className="card__tag">{tag}</p>)
        ) : (
          <p className="card__tag">😎</p>
        )}
      </div>
    </div>
  );
};

export default card;
