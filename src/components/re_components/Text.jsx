import React from 'react'
// import { TextLoop } from "react-text-loop-next";
import TextLoop from "react-text-loop";

function Text() {
  return (
    
      <h2>
        <TextLoop>
          <span>First item</span>
          <a href="/">Second item</a>
          <p style={{ color: "red" }}>Third item</p>
        </TextLoop>{" "}
        and something else.
      </h2>
    
  );
}

export default Text