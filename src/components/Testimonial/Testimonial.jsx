// import React from "react";

// const TestimonialData = [
//   {
//     name: "-Thom",
//     image: "",
//     description:
//       "Ovation Auto Detail exceeded my expectations with their thorough and professional service.",
//     aosDelay: "0",
//   },
//   {
//     name: "-Miles",
//     image: "",
//     description:
//       "The convenience and quality of their mobile service are unmatched.",
//     aosDelay: "300",
//   },
//   {
//     name: "-Serena",
//     image: "",
//     description:
//       "My car looks brand new thanks to Ovation Auto Detail's meticulous attention to detail.",
//     aosDelay: "500",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <>
//       <span id="about"></span>
//       <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
//         <div className="container">
//           {/* Header */}
//           <div className="space-y-4 pb-12">
//             <p
//               data-aos="fade-up"
//               className="text-3xl font-semibold text-center sm:text-4xl font-serif"
//             >
//               What Our Clients Say About Us
//             </p>
//             <p data-aos="fade-up" className="text-center sm:px-44">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perferendis iure consectetur tempora amet.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
//             {TestimonialData.map((skill) => (
//               <div
//                 key={skill.name}
//                 data-aos="fade-up"
//                 data-aos-delay={skill.aosDelay}
//                 className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
//               >
//                 <div className="grid place-items-center ">
//                   <img
//                     src="https://picsum.photos/200"
//                     alt=""
//                     className="rounded-full w-20 h-20"
//                   />
//                 </div>
//                 <div className="text-2xl">⭐⭐⭐⭐⭐</div>
//                 <p>{skill.description}</p>
//                 <p className="text-center font-semibold">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

import React from "react";

const TestimonialData = [
  {
    name: "-Thom",
    image: "https://picsum.photos/id/1005/200", // Unique image URL for Thom
    description:
      "Ovation Auto Detail exceeded my expectations with their thorough and professional service.",
    aosDelay: "0",
  },
  {
    name: "-Ithana",
    image: "https://picsum.photos/id/1011/200", // Unique image URL for Miles
    description:
      "The convenience and quality of their mobile service are unmatched.",
    aosDelay: "300",
  },
  {
    name: "-Anthony",
    image: "https://picsum.photos/id/1012/200", // Unique image URL for Serena
    description:
      "My car looks brand new thanks to Ovation Auto Detail's meticulous attention to detail.",
    aosDelay: "500",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-normal text-center sm:text-4xl"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Our clients appreciate the exceptional service and convenience we
              offer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {TestimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
