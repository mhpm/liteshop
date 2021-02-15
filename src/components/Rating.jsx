import React from "react";

const Rating = ({ value, text }) => {
  function getStar(index) {
    return (
      <i
        key={index}
        className={
          value >= 1 + index
            ? "fas fa-star"
            : value >= index + 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
    );
  }

  return (
    <small className="text-muted">
      <span>{[...Array(5)].map((e, index) => getStar(index))}</span> from {text}{" "}
      reviews
    </small>
  );
};

export default Rating;
