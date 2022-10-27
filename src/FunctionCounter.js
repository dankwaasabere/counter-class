import React, { useState } from "react";

export default function FunctionCounter() {
  const [count, setCount] = useState(0);
  const handleincrease = () => {
    setCount(count + 1);
  };
  const handledecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>FunctionCounter</h1>
      <h4>count: {count}</h4>
      <button onClick={handleincrease}>Increase</button>
      <button onClick={handledecrease}>Decrease</button>
    </div>
  );
}
