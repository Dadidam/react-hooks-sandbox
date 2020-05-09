import { useState, useLayoutEffect } from "react";

export const useMeasure = (ref, dependencies) => {
  const [rect, setRect] = useState({});

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
  }, dependencies);

  return rect;
};
