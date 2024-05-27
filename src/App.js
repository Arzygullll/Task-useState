import React, { useState } from "react";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";
import ResetButton from "./components/ResetButton";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <ClickCounter count={count} />
      <ClickButton onClick={handleClick} />
      <ResetButton onClick={handleReset} />
    </div>
  );
};

export default App;
