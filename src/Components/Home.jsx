/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Button from "./Button";
import Experience from "./Experience";
import Footer from "./Footer";
import React, { useState } from "react";
import { Icon } from "@iconify/react";


function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

   return (
     <>
       <div
         className={`h-full w-full ${
           isDarkMode ? "bg-black text-white" : "bg-[#1f242d] text-black"
         }`}
       >
         {" "}
      
         <div>
           <Navbar>
                <button
           className="p-2 rounded-full ml-[10%] text-2xl"
           onClick={toggleMode}
         >
           {isDarkMode ? (
             <Icon icon="line-md:moon-twotone" />
           ) : (
             <Icon icon="emojione:sun" />
           )}
         </button>
         </Navbar>
         <Content />
         <About />
         <Skills />
         <Experience />
         <Portfolio />
         <Contact />
         <Button />
         <Footer />
       </div>
         
       </div>

      
     </>
   );
}


export default Home;