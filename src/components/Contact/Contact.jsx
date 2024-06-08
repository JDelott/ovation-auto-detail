import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 text-white">
      <div data-aos="zoom-in" className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  dark:bg-white/20 bg-gray-100 text-black py-8 px-6 rounded-lg">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
              Lets collaborate on your upcoming car rental venture
            </h1>
            <p className="text-gray-40 dark:text-white">
              lortmem ipsum dolor sit amet cosectututer adipsispdicing elit.
              Bladititis atque requidjdiue accusantium voluptas.
            </p>
          </div>
          <div className="grid place-items-center">
            {/* <a
              href="#"
              className="inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300"
            >
              Contact
            </a> */}
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
