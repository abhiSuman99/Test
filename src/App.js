// App.js

import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  const [currentPage, setCurrentPage] = useState("page1");
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("blue");

  const handleButtonClick = () => {
    setCount(count + 1);
    setBackgroundColor(count % 2 === 0 ? "blue" : "green");
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === "page1" && (
        <Page1
          count={count}
          backgroundColor={backgroundColor}
          onButtonClick={handleButtonClick}
          onPageChange={() => navigateToPage("page2")}
        />
      )}
      {currentPage === "page2" && (
        <Page2
          count={count}
          backgroundColor={backgroundColor}
          onPageChange={() => navigateToPage("page1")}
        />
      )}
    </div>
  );
}

export default App;
