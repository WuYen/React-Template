import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <h1>
      React App
      <Hello />
    </h1>
  );
};

function Hello(props) {
  useEffect(() => {
    console.log("mount");
  }, []);
  return <div>Hello world4</div>;
}

export default App;
