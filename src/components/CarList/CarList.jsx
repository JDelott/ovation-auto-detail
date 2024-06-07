import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 dark:bg-dark bg-slate-100">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 dark:text-white text-black"
        >
          Lorem ipsum dolor
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-sm pb-10 dark:text-gray-300 text-black"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 dark:border-gray-700 hover:border-primary p-3 rounded-xl relative group bg-white dark:bg-dark"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold dark:text-white">
                    {data.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold dark:text-gray-300 text-black">
                    <p>${data.price}/Day</p>
                    <a href="#" className="dark:text-primary text-primary">
                      Details
                    </a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3 dark:text-gray-300 text-black">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
