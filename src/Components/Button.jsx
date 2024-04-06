// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

function Button() {
  useEffect(() => {
    // Get a reference to the button element
    const scrollTopButton = document.getElementById("scrollTopButton");

    // Function to show/hide the button based on scroll position
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    };

    // Add a scroll event listener to show/hide the button
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const handleButtonClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  return (
    <div>
      <button
        id="scrollTopButton"
        className="fixed bottom-20 font-extrabold text-xl text-black sm:text-blak sm:right-20 right-5 z-10 hidden bg-[#0ef] rounded-full p-5 cursor-pointer"
        onClick={handleButtonClick}
      >
        <Icon icon="fluent-mdl2:up" />
      </button>
    </div>
  );
}

export default Button;
