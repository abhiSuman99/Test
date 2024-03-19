// Page1.js

import React from "react";

function Page1({ count, backgroundColor, onButtonClick, onPageChange }) {
  return (
    <div style={{ backgroundColor, padding: "20px" }}>
      <h1>Page 1</h1>
      <p>Current Count: {count}</p>
      <button onClick={onButtonClick}>Increment</button>
      <br />
      <button onClick={onPageChange}>Go to Page 2</button>
    </div>
  );
}

export default Page1;
