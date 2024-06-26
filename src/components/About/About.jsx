// import React from "react";
// import CarPng from "../../assets/car1.png";

// const About = () => {
//   return (
//     <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
//       <div className="container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
//           <div data-aos="slide-right" data-aos-duration="1500">
//             <img
//               src={CarPng}
//               alt=""
//               className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
//             />
//           </div>
//           <div>
//             <div className="space-y-5 sm:p-16 pb-6">
//               <h1
//                 data-aos="fade-up"
//                 className="text-3xl sm:text-4xl font-bold font-serif"
//               >
//                 About us
//               </h1>
//               <p data-aos="fade-up" className="leading-8 tracking-wide">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Aspernatur, magnam! Tenetur odio quo et maxime?
//               </p>
//               <p data-aos="fade-up">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
//                 tempora.
//               </p>
//               <button data-aos="fade-up" className="button-outline">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useState } from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300`}
    >
      <span id="about"></span>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="fade-up" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-3xl sm:text-4xl font-normal dark:text-white text-black"
              >
                About us
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="leading-8 tracking-wide dark:text-white text-black"
              >
                Welcome to Ovation Auto Detail, your go-to service for top-notch
                car care in Los Angeles, California. We bring the shine and
                protection your car deserves right to your doorstep.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="dark:text-white text-black"
              >
                Whether it&rsquo;s a luxury sedan or a family SUV, our expert
                team is equipped to handle all your detailing needs. Experience
                convenience, quality, and a pristine finish with our mobile
                detailing services.
              </p>

              {/* <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
