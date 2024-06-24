import React, { useState } from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import PriceModal from "../PriceModal";

const carList = [
  // {
  //   package: "Wash and Quick Interior Cleaning",
  //   carPrice: 45,
  //   suvPrice: 55,
  //   image: whiteCar,
  //   aosDelay: "0",
  //   exterior: [
  //     "Hand Wash",
  //     "Windows cleaned inside/out",
  //     "Door frames cleaned",
  //     "Tires and wheels cleaned and dressed",
  //   ],
  //   interior: [
  //     "Vacuum/garbage removal",
  //     "Dust/wipe down of dashboard, steering wheel, door panels, center console, cup holders",
  //     "Light stain removal",
  //   ],
  // },
  {
    package: "Wash and Polish/Wax",
    carPrice: 95,
    suvPrice: 120,
    image: car2,
    aosDelay: "500",
    exterior: [
      "Hand Wash",
      "Windows cleaned inside/out",
      "Door frames cleaned",
      "Tires and wheels cleaned and dressed",
      "One Step Correction with polish/wax sealant",
    ],
    interior: [
      "Vacuum/garbage removal",
      "Dust/wipe down:",
      "-dashboard, steering wheel, door panels",
      "-center console, cup holders",
      "Light stain removal",
    ],
  },
  {
    package: "Interior Only",
    carPrice: 95,
    suvPrice: 125,
    image: car3,
    aosDelay: "1000",
    interior: [
      "Vacuum/ garbage removal",
      "Clean:",
      "-windows, mirrors, navigation screens",
      "-dashboard, door panels, door frames",
      "-cup holders, center console, steering wheel",
      "Shampoo seats, carpets, floor mats",
      "Headliner cleaned",
      "General stain removal",
      "Dog hair removal",
    ],
  },
  {
    package: "Full Detail",
    carPrice: 175,
    suvPrice: 245,
    image: whiteCar,
    aosDelay: "1500",
    exterior: [
      "Hand Wash",
      "Windows cleaned inside/out",
      "Door frames cleaned",
      "Tires and wheels cleaned and dressed",
      "One Step Correction with polish/wax sealant",
    ],
    interior: [
      "Vacuum/garbage removal",
      "windows, mirrors, screens",
      "dashboard, door panels & frames",
      "cup holders",
      "center console, steering wheel",
      "steering wheel",
      "Shampoo seats, carpets, floor mats",
      "Headliner cleaned",
      "General stain removal",
      "Dog hair removal",
    ],
  },
];

const CarList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <div className="pb-24 pt-12 dark:bg-dark bg-slate-100">
      <span id="priceList"></span>
      <div className="container mx-auto px-4">
        <h1
          data-aos="fade-up"
          className="text-center text-3xl sm:text-4xl font-semibold mb-3 dark:text-white text-black"
        >
          Price List
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-lg font-light pb-10 text-center dark:text-gray-300 text-black max-w-2xl mx-auto"
        >
          At Ovation Auto Detail, we offer competitive pricing for premium
          mobile auto detailing services, ensuring you get the best value for
          your money.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carList.map((service) => (
            <div
              key={service.package}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.package}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {service.package}
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium dark:text-gray-300">
                    Car: ${service.carPrice}
                  </span>
                  <span className="text-lg font-medium dark:text-gray-300">
                    SUV: ${service.suvPrice}
                  </span>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            data-aos="fade-up"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 text-lg font-medium"
          >
            Contact Us Now!
          </button>
        </div>
      </div>
      {modalOpen && (
        <PriceModal
          isOpen={modalOpen}
          closeModal={closeModal}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default CarList;
