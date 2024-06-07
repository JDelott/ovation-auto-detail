import React from "react";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"></div>
      </div>
    </div>
  );
};

export default Testimonial;
