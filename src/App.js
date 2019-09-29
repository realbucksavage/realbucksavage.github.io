import React from "react";
import "./App.css";

import MastHead from "./components/MastHead";
import Content from "./components/Content";

import conf from "./configuration";

function App() {
  return (
    <body class="bg-white min-height-full">
      <div class="d-md-flex min-height-full border-md-bottom">
        <MastHead />

        <Content content="Test Content Bois" />
      </div>
    </body>
  );
}

export default App;
