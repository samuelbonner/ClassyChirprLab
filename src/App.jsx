import React from "react";
import Input from "./components/Input";

// App links to Input which links to Timeline
const App = () => {
  return (
    <>
      <h1 className="mx-auto col-10 my-3">
        Meowster: Engage in the latest cat conversations
      </h1>

      <Input />
    </>
  );
};

export default App;