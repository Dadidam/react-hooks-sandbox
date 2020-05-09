import React, { useRef } from "react";

export const HelloRef = () => {
  const renders = useRef(0);

  console.log("hello renders: ", renders.current++);

  return <div>Hi there, I'm a ref!</div>;
};
