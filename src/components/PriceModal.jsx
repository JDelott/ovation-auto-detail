// import React from "react";

// const PriceModal = ({ isOpen, closeModal, service }) => {
//   if (!isOpen) return null;

//   const modalBackgroundClass =
//     "fixed top-0 left-0 w-full h-full p-4 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50";
//   const modalContainerClass =
//     "bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative";
//   const closeButtonClass =
//     "absolute top-2 right-2 text-black dark:text-white text-2xl sm:text-4xl rounded-full hover:bg-primary-dark p-2";
//   const textColorClass = "text-black dark:text-white";

//   return (
//     <div className={modalBackgroundClass}>
//       <div className={modalContainerClass}>
//         <button className={closeButtonClass} onClick={closeModal}>
//           x
//         </button>
//         <div className="flex flex-col items-center space-y-4">
//           <h2 className={`text-2xl font-semibold ${textColorClass}`}>
//             {service.package}
//           </h2>
//           <div className="flex justify-between w-full">
//             <p className={`text-lg ${textColorClass}`}>
//               Car: ${service.carPrice}
//             </p>
//             <p className={`text-lg ${textColorClass}`}>
//               SUV: ${service.suvPrice}
//             </p>
//           </div>
//           {service.exterior && (
//             <div className="w-full">
//               <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
//                 Exterior:
//               </h3>
//               <ul className={`list-disc list-inside ${textColorClass}`}>
//                 {service.exterior.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {service.interior && (
//             <div className="w-full">
//               <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
//                 Interior:
//               </h3>
//               <ul className={`list-disc list-inside ${textColorClass}`}>
//                 {service.interior.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceModal;

// import React from "react";

// const PriceModal = ({ isOpen, closeModal, service }) => {
//   if (!isOpen) return null;

//   const modalBackgroundClass =
//     "fixed top-0 left-0 w-full h-full p-4 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50";
//   const modalContainerClass =
//     "bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative";
//   const closeButtonClass =
//     "absolute top-2 right-2 text-black dark:text-white text-2xl sm:text-4xl rounded-full hover:bg-primary-dark p-2";
//   const textColorClass = "text-black dark:text-white";

//   return (
//     <div className={modalBackgroundClass}>
//       <div className={modalContainerClass}>
//         <button className={closeButtonClass} onClick={closeModal}>
//           x
//         </button>
//         <div className="flex flex-col items-center space-y-4">
//           <h2 className={`text-2xl font-semibold ${textColorClass}`}>
//             {service.package}
//           </h2>
//           <div className="flex justify-between w-full">
//             <p className={`text-lg ${textColorClass}`}>
//               Car: ${service.carPrice}
//             </p>
//             <p className={`text-lg ${textColorClass}`}>
//               SUV: ${service.suvPrice}
//             </p>
//           </div>
//           {service.exterior && (
//             <div className="w-full">
//               <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
//                 Exterior:
//               </h3>
//               <ul className={`list-disc list-inside ${textColorClass}`}>
//                 {service.exterior.map((item, index) => (
//                   <li key={index} className="ml-4">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {service.interior && (
//             <div className="w-full">
//               <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
//                 Interior:
//               </h3>
//               <ul className={`list-disc list-inside ${textColorClass}`}>
//                 {service.interior.map((item, index) => (
//                   <li key={index} className="ml-4">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceModal;

import React from "react";

const PriceModal = ({ isOpen, closeModal, service }) => {
  if (!isOpen) return null;

  const modalBackgroundClass =
    "fixed top-0 left-0 w-full h-full p-4 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50";
  const modalContainerClass =
    "bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative";
  const closeButtonClass =
    "absolute top-2 right-2 text-black dark:text-white text-2xl sm:text-4xl rounded-full hover:bg-primary-dark p-2";
  const textColorClass = "text-black dark:text-white";

  return (
    <div className={modalBackgroundClass}>
      <div className={modalContainerClass}>
        <button className={closeButtonClass} onClick={closeModal}>
          x
        </button>
        <div className="flex flex-col items-center space-y-4">
          <h2 className={`text-2xl font-semibold ${textColorClass}`}>
            {service.package}
          </h2>
          <div className="flex justify-between w-full">
            <p className={`text-lg ${textColorClass}`}>
              Car: ${service.carPrice}
            </p>
            <p className={`text-lg ${textColorClass}`}>
              SUV: ${service.suvPrice}
            </p>
          </div>
          {service.exterior && (
            <div className="w-full">
              <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
                Exterior:
              </h3>
              <ul className={`list-disc list-inside ${textColorClass}`}>
                {service.exterior.map((item, index) => (
                  <li key={index} className="ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {service.interior && (
            <div className="w-full">
              <h3 className={`text-xl font-semibold ${textColorClass} mb-2`}>
                Interior:
              </h3>
              <ul className={`list-disc list-inside ${textColorClass}`}>
                {service.interior.map((item, index) => (
                  <li key={index} className="ml-4">
                    {item.startsWith("-") ? (
                      <span>{item.substring(1)}</span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceModal;
