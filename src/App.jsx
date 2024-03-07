import React from "react";
import Donar from "./components/Donar";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <ErrorBoundary>
        <Donar />
      </ErrorBoundary>
    </div>
  );
};

export default App;
