// import domify from "dom/lib/domify";
import { useState } from "react";
import { Icon } from '@iconify/react';



function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('no-background-animation'); // Toggle the no-background-animation class on the body
  };
  return (
    <div className="flex">
      <button className="lg:hidden h-12" onClick={toggleMenu}>
        <svg
          className="h-12 -mt-4 absolute top-9 right-6 z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              className="dark:text-white text-black"
              strokeLinecap="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}{" "}
        </svg>
      </button>
      {isOpen && (
        <div className="hamburger-logo -ml-[24%] -mr-[73px] text-3xl flex flex-col w-screen -mt-5 md:h-[60%] h-screen items-center md:gap-y-28 space-y-7 justify-center top-0 right-0 md:mt-16 rounded-sm p-4 py-5 dark:text-white dark:bg-black bg-gray-700">
          <span>
            <a to="/About">About</a>
          </span>
          <span>
            <a to="/Contact">Contact</a>
          </span>
          <span>
            <a to="/Resume">Resume</a>
          </span>

          <div className="flex justify-center space-x-10 flex-row hover:cursor-pointer">
            <a href="https://github.com/isaacdaniel4">
              <Icon className="bg-white rounded-lg" icon="devicon:github" />
            </a>
            <a href="https://twitter.com/DanielI91636538">
              <Icon icon="line-md:twitter-x-alt" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-isaac-353bb917b/">
              <Icon icon="bi:linkedin" />
            </a>
            <a href="https://www.instagram.com/di917470/">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="mailto:ayomidesamson111@gmail.com">
              <Icon icon="octicon:mail-24" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamburger;