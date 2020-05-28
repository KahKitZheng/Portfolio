import React from "react";
import Segment from "../../components/Segment";

const contact = () => {
  return (
    <section id="contact">
      <Segment name={"Contact"}>
        <div className="contact container">
          <p className="contact__message">
            Currently looking for a graduate internship. Feel free to contact me
            if you think I’m the person you are looking for.
          </p>
          <div className="contact__email">
            <span className="contact__label">Contact met at:</span>
            <a href="mailto:kahkitzheng@gmail.com" className="contact__link">
              KahKitZheng@gmail.com
            </a>
          </div>
          <div className="contact__github">
            <span className="contact__label">Find me at:</span>
            <a
              href="https://github.com/KahKitZheng"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              Github.com/KahKitZheng
            </a>
          </div>
          <a
            href={"/CV-KahKitZheng.pdf"}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="contact__resume button"
          >
            Resume
          </a>
        </div>
      </Segment>
    </section>
  );
};

export default contact;
