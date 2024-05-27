import React from "react";

const ClickButton = ({ onClick }) => {
  return (
    <button className="click-button" onClick={onClick}>
      Click Me!
    </button>
  );
};

export default ClickButton;
