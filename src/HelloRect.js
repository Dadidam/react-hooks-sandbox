import React, { useRef, useState, useEffect } from "react";
import { useMeasure } from "./useMeasure";
import { useFetch } from "./useFetch";

export const HelloRect = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const divRef = useRef();

  const url = `http://numbersapi.com/${count}/trivia`;
  const { data } = useFetch(url);

  const rect = useMeasure(divRef, [data]);

  return (
    <div style={{ display: "flex" }}>
      <div ref={divRef}>{!data ? "loading..." : data}</div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
