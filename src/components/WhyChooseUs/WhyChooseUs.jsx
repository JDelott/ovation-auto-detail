import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "At Ovation Auto Detail, we offer competitive pricing for premium mobile auto detailing services, ensuring you get the best value for your money.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Our team at Ovation Auto Detail guarantees fast and safe detailing services, using top-of-the-line products and techniques to protect your vehicle.",
    aosDelay: "500",
  },
  {
    name: "Experienced Detailers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Trust our experienced and professional detailers at Ovation Auto Detail to treat your car with the utmost care and precision.",
    aosDelay: "1000",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl text-center font-normal sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
              {/* <a href={skill.link}>Learn More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
