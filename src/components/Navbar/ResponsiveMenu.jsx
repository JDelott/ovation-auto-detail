// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { MdClose } from "react-icons/md"; // Importing the close icon

// import { Navlinks } from "./Navbar";

// const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
//   console.log("showMenu", showMenu);
//   return (
//     <div
//       className={`${
//         showMenu ? "left-0" : "-left-[100%]"
//       } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
//     >
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <FaUserCircle size={50} />
//           <div>
//             <h1>Hello User</h1>
//             <h1 className="text-sm text-slate-500">Premium user</h1>
//           </div>
//         </div>
//         <button onClick={toggleMenu} className="text-2xl">
//           <MdClose size={30} />
//         </button>
//       </div>
//       <nav className="mt-12">
//         <ul className="space-y-4 text-xl">
//           {Navlinks.map((data) => (
//             <li key={data.link}>
//               <Link
//                 to={data.link}
//                 smooth={true}
//                 duration={500}
//                 className="mb-5 inline-block cursor-pointer"
//                 onClick={toggleMenu} // Close the menu when a link is clicked
//               >
//                 {data.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <div className="footer">
//         <h1>
//           Made with ❤ by <a href="">Domino Web Services</a>{" "}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveMenu;

// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { Navlinks } from "./Navbar";

// const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
//   return (
//     <div
//       className={`${
//         showMenu ? "left-0" : "-left-[100%]"
//       } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
//     >
//       <div className="card">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center justify-start gap-3">
//             <FaUserCircle size={50} />
//             <div>
//               <h1>Hello User</h1>
//               <h1 className="text-sm text-slate-500">Premium user</h1>
//             </div>
//           </div>
//           <button onClick={toggleMenu} className="text-2xl">
//             &times;
//           </button>
//         </div>
//         <nav className="mt-12">
//           <ul className="space-y-4 text-xl">
//             {Navlinks.map((data) => (
//               <li key={data.link}>
//                 <Link
//                   to={data.link}
//                   smooth={true}
//                   duration={500}
//                   className="mb-5 inline-block cursor-pointer"
//                   onClick={toggleMenu}
//                 >
//                   {data.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <div className="footer">
//         <h1>
//           Made with ❤ by <a href="">Domino Web Services</a>{" "}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveMenu;

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
          <button onClick={toggleMenu} className="text-2xl">
            &times;
          </button>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.link}>
                <Link
                  to={data.link}
                  smooth={true}
                  duration={500}
                  className="mb-5 inline-block cursor-pointer"
                  onClick={toggleMenu}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="">Domino Web Services</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
