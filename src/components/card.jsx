import React from "react";
import folderIcon from "../folder.svg";

const card = () => {
  return (
    <div className="card">
      <img src={folderIcon} className="card__icon" alt="" />
      <h3 className="card__title">Project title</h3>
      <p className="card__description">
        Lacus, cras condimentum ornare volutpat ultricies. Mollis erat faucibus
        facilisis gravida nibh sit sapien est. Proin integer commodo sit
        malesuada aenean pellentesque ante aenean posuere.
      </p>

      <div className="card__tags">
        <p className="card__tag">React</p>
        <p className="card__tag">Vue</p>
        <p className="card__tag">Angular</p>
        <p className="card__tag">Kotlin</p>
        <p className="card__tag">Java</p>
        <p className="card__tag">React-Native</p>
      </div>
    </div>
  );
};

export default card;
