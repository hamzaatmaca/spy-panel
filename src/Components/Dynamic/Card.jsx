import React from "react";

const Card = ({ content, title, subtitle, link1, link2 }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <span className="card-text">{content}</span>
          <a href="#" className="card-link">
            {link1}
          </a>
          <a href="#" className="card-link">
            {link2}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
