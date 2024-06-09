import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    // name: "BMW UX",
    price: 50,
    image: whiteCar,
    description: "Car Wash & Vacuum",
    aosDelay: "0",
    package: "Gold",
  },
  {
    // name: "KIA UX",
    price: 100,
    image: car2,
    aosDelay: "500",
    package: "Platinum",
    description: "Mini-Detail",
  },
  {
    // name: "BMW UX",
    price: 200,
    image: car3,
    aosDelay: "1000",
    package: "Diamond",
    description: "Full Detail",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 dark:bg-dark bg-slate-100">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-center text-3xl sm:text-4xl font-normal mb-3 dark:text-white text-black"
        >
          Price List
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-2xl pb-10 dark:text-gray-300 text-black"
        >
          At Ovation Auto Detail, we offer competitive pricing for premium
          mobile auto detailing services, ensuring you get the best value for
          your money.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                key={data.package}
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
                  {/* <h1 className="text-primary font-semibold dark:text-white"></h1> */}
                  <div className="justify-between items-center text-xl font-semibold dark:text-gray-300 text-black">
                    <p key={data.price}>${data.price}</p>
                    <div>{data.description}</div>
                    {/* <a href="#" className="dark:text-primary text-primary">
                      Details
                    </a> */}
                  </div>
                </div>
                <p
                  key={data.package}
                  className="text-xl font-semibold absolute top-0 left-3 dark:text-gray-300 text-black"
                >
                  {data.package}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Contact Us Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
