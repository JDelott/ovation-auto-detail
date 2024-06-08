// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-gray-100 dark:bg-dark dark:text-white text-justify align-items">
//       <section className="container">
//         <div className="grid md:grid-cols-3">
//           {/* company Details */}
//           <div className=" py-8 px-4 ">
//             <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
//               Car Rental
//             </h1>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Possimus, voluptate.{" "}
//             </p>
//             <br />
//             <div className="flex items-center gap-3">
//               <FaLocationArrow />
//               <p>Noida, Uttar Pradesh</p>
//             </div>
//             <div className="flex items-center gap-3 mt-3">
//               <FaMobileAlt />
//               <p>+91 123456789</p>
//             </div>
//             {/* Social Handle */}
//             <div className="flex items-center gap-3 mt-6">
//               <a href="#">
//                 <FaInstagram className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaFacebook className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaLinkedin className="text-3xl hover:text-primary duration-300" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark dark:text-white text-justify">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
          {/* Company Details */}
          <div className="mb-6 md:mb-0">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 font-serif">
              Car Rental
            </h1>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
          </div>
          {/* Location and Contact */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
          </div>
          {/* Social Handles */}
          <div className="flex items-center gap-3">
            <a href="#">
              <FaInstagram className="text-3xl hover:text-primary duration-300" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl hover:text-primary duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl hover:text-primary duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
