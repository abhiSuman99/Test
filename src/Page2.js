
// Page2.js

import React from "react";

function Page2({ count, backgroundColor, onPageChange }) {
  return (
    <div style={{ backgroundColor, padding: "20px" }}>
      <h1>Page 2</h1>
      <p>Selected Count: {count}</p>
      <p>Color: {backgroundColor}</p>
      <button onClick={onPageChange}>Go back to Page 1</button>
    </div>
  );
}

export default Page2;
