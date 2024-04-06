// eslint-disable-next-line no-unused-vars
import React from "react";
import Hamburger from "./Hamburger";
import { Icon } from '@iconify/react';
// import ToggleBnt from "./ToggleBnt";



// eslint-disable-next-line react/prop-types
function Navbar({ children }) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className="header">
      <a href="#" className="logo text-5xl -h-20 font-bold text-[#0ef] -ml-10"><Icon icon="simple-icons:d" /></a>
        <Hamburger />
        {/* <ToggleBnt/> */}
        <nav className="navbar hidden lg:flex overflow-hidden w-fit items-center">
        <a href="#About" style={{ '--i': 1 }} onClick={scrollToAbout}>About</a>
        <a href="#Skills" style={{ '--i': 2 }}>Skills</a>
        <a href="#Experience" style={{ '--i': 3 }}>Experience</a>
        <a href="#Portfolio" style={{ '--i': 4 }}>Projects</a>
          <a href="#Contact" style={{ '--i': 5 }}>Contact</a>
          <div>{children}</div>
        </nav>
    </div>
    </>
  )
}

export default Navbar;