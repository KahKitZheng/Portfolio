import React, { Fragment } from "react";

const segment = (props) => {
  const { name } = props;

  return (
    <Fragment>
      <div className="segment">
        <span className="segment__background">{name}</span>
        <h2 className="segment__title">{name}</h2>
      </div>

      {props.children}
    </Fragment>
  );
};

export default segment;
