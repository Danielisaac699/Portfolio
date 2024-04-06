// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import App from "../App";
// import Navbar from './Navbar'



function ToggleBnt() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div>
        <div
          className={`h-full w-full ${
            isDarkMode ? "bg-black text-white" : "bg-[#1f242d] text-black"
          }`}
        >
          {" "}
          <button
            className="p-2 rounded-full h-20"
            onClick={toggleMode}
          >
            {isDarkMode ? (
              <Icon icon="line-md:moon-twotone" />
            ) : (
              <Icon icon="emojione:sun" />
            )}
          </button>
        </div>
        <App/>
        {/* <Navbar/> */}
      </div>
    </>
  );
}

export default ToggleBnt;
