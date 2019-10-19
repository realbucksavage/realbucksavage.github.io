import React from "react";
import "./App.css";
import Content from "./components/Content";
import MastHead from "./components/MastHead";

function App() {
  return (
    <body className="bg-white min-height-full">
      <div className="d-md-flex min-height-full border-md-bottom">
        <MastHead />

        <Content />
      </div>
    </body>
  );
}

export default App;
