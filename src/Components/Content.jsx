import { Icon } from "@iconify/react";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "../Image/msg5320642715-7500-removebg-preview.png";
// import Image from "../Image/Screenshot_2023-10-27_122404-removebg-preview.png";
import Pic from "../Image/msg5320642715-7498.jpg";

function Content() {
  const typedText = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer.", "Graphic Designer."],
      typeSpeed: 50,
      backSpeed: 25,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedText.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home md:-mt-20 flex items-center ml-1 h-screen w-96 md:w-[900px] md:ml-0">
        <div className="home-content">
          <h3 className="text-xl font-bold">Hello, Its&apos;s Me</h3>
          <h1 className="text-2xl font-bold">Daniel Isaac</h1>
          <h3 className="text-2xl font-bold">
            And I&apos;m a{" "}
            <span className="text-[#0ef] font-bold " ref={typedText}>
              Frontend Develove
            </span>
          </h3>

          <p className="text-[15px] font-bold">
            I am a frontend developer and graphic designer with a passion for
            creating beautiful and user-friendly websites. I love turning ideas
            into reality and always striving for excellence in my work.
          </p>
          <div className="social-media flex ">
            <a href="https://github.com/isaacdaniel4" style={{ "--i": 1 }}>
              <Icon icon="ri:github-fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-isaac-353bb917b/"
              style={{ "--i": 2 }}
            >
              <Icon icon="ant-design:linkedin-filled" />
            </a>
            <a href="https://twitter.com/DanielI91636538" style={{ "--i": 3 }}>
              <Icon icon="line-md:twitter-x" />
            </a>
            <a href="https://www.instagram.com/di917470/" style={{ "--i": 4 }}>
              <Icon icon="mdi:instagram" />
            </a>
            <a href="mailto:ayomidesamson111@gmail.com" style={{ "--i": 5 }}>
              <Icon icon="uiw:mail" />
            </a>
          </div>
          <a href={Pic} className="btn bg-[#0ef] ">
            Download CV
          </a>
          <div className="home-img float-right md:-mt-80">
            <img className="img md:ml-[100%] rounded-full" src={Image} alt="me" />
          </div>
        </div>
      </div>
      {/* <a href="#About"><button className='-mt-[80%] text-[#39aeb6] ml-[47%] rounded-full font-bold text-xl md:hidden'><Icon icon="teenyicons:down-outline" /></button></a> */}
    </>
  );
}

export default Content;
