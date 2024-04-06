import Image from '../Image/Screenshot_2023-10-27_122404-removebg-preview.png'

function About() {

  return (
    <>
      <div
        className="md:px-16 h-fit md:mt-0 items-center flex-wrap flex justify-center sm:flex-col"
        id="About"
      >
        <div>
          <div className="mt-12 w-[100%]">
            <h1
              className="ml-5 text-3xl text-white text-start underline font-bold md:-mb-5"
              id="about"
            >
              <a href="#">
                <b className="text-[#0ef]">A</b>bout
              </a>
            </h1>
            <div className="anime md:mt-10 text-center flex-wrap space-y-10 md:text-xl md:text-start shadow-md shadow-[#0ef] px-10 py-4 mx-4 rounded-2xl mt-5 text-[#fff] lg:w-[50%]">
              <ul id="text">
                <li>
                  I have optimal physical abilities and also in areas related to
                  always look neat, agile and organized at work.
                </li>
                <br />
                <li>
                  Whenever possible, I also apply my passion to develop products
                  with with Laravel and CSS Libraries and Frameworks like
                  Bootstrap and Tailwindcss
                </li>
                <br />
                <li>
                  I am a vocational high school graduate with great interest for
                  a career in programming.
                </li>
                <br />
                <li>
                  Whenever possible, I also apply my passion to develop products
                  with with Laravel and CSS Libraries and Frameworks like
                  Bootstrap and Tailwindcss.
                </li>
                <br />
              </ul>
            </div>
          </div>
          <div className="about-img">
            <img
              className="md:w-[35%] md:-mt-[32%] mt-20 px-10 md:px-0 w-[80%] ml-[10%] lg:float-right"
              id="about-img"
              src={Image}
              alt="me"
            />
          </div>
        </div>
      </div>
    </>
  );
}


export default About