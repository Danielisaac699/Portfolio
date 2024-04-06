import "./App.css";
import Home from "./Components/Home";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { Icon } from "@iconify/react";


function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <>
      {/* <div
        className={`h-full w-full ${
          isDarkMode ? "bg-black text-white" : "bg-[#1f242d] text-black"
        }`}
      >
        {" "}
        <button
          className="p-2 rounded-full ml-[60%] mt-6 text-2xl flex-wrap"
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <Icon icon="line-md:moon-twotone" />
          ) : (
            <Icon icon="emojione:sun" />
          )}
        </button> */}
      <div>
          <Home />
        </div>
      {/* </div> */}
      
    </>
  );
}

export default App;
