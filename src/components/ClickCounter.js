import React from "react";

const ClickCounter = ({ count }) => {
  return (
    <div className="click-counter">
      <h1>Click Count: {count}</h1>
    </div>
  );
};

export default ClickCounter;
