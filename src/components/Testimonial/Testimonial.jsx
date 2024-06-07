import React from "react";

const TestimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "lorem ipsum dolor sit amet consecuteter adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "lorem ipsum dolor sit amet consecuteter adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "lorem ipsum dolor sit amet consecuteter adipisicing elit.",
    aosDelay: "100",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsom dolor sit amet consectutrut adidspsisc elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white"></div>
        <div>
          {TestimonialData.map((data) => {
            return (
              <div key={data.name}>
                <div>
                  <img src="https://picsum.photos/200" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
