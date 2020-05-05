import React, { useState, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  const favNums = [7, 33, 66];

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
