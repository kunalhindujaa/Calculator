import React from "react";
import numbers from "./numbers.js";
import Button from "./Button";
import ResultArea from "./ResultArea";

function App() {
  return (
    <div>
      <div>
        <ResultArea />
      </div>
      <div className="btnArea">
        {numbers.map(number => (
          <Button key={number.key} text={number.number} />
        ))}
      </div>
    </div>
  );
}

export default App;
