import React, { useState } from "react";

import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const prevHandler = (index) => {
    if (index > 0 && index < data.length) {
      setIndex(index - 1);
    } else if (index === 0) {
      setIndex(data.length - 1);
    }
  };

  const nextHandler = (index) => {
    if (index >= 0 && index < data.length - 1) {
      setIndex(index + 1);
    } else if (index === data.length - 1) {
      setIndex(0);
    }
  };

  const randomHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={() => prevHandler(index)}>
            <FaChevronLeft />
          </button>
          <button className="random-btn" onClick={randomHandler}>
            Random Button
          </button>
          <button className="next-btn" onClick={() => nextHandler(index)}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </>
  );
};

export default Reviews;
