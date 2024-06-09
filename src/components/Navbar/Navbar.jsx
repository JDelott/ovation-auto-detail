// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "PRICE LIST",
//     link: "/#pricelist",
//   },
//   {
//     id: 1,
//     name: "ABOUT",
//     link: "/#about",
//   },
//   {
//     id: 1,
//     name: "CONTACT",
//     link: "/#booking",
//   },
// ];
// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div
//       className="relative z-10 shadow-md w-full dark:bg-dark bg-slate-100 dark:text-white duration-300
//     "
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="text-3xl font-normal">Ovation Auto Detail</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <a
//                     href={link}
//                     className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
//                   >
//                     {name}
//                   </a>
//                 </li>
//               ))}
//               {/* DarkMode feature implement */}
//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//             </ul>
//           </nav>
//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden ">
//             {/* dark  mode */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {/* Mobile Hamburger icon */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className=" cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <ResponsiveMenu showMenu={showMenu} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { Link } from "react-scroll";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "home",
//   },
//   {
//     id: 2,
//     name: "PRICE LIST",
//     link: "priceList",
//   },
//   {
//     id: 3,
//     name: "ABOUT",
//     link: "about",
//   },
//   {
//     id: 4,
//     name: "CONTACT",
//     link: "contact",
//   },
// ];

// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="relative z-10 shadow-md w-full dark:bg-dark bg-slate-100 dark:text-white duration-300 hover:cursor-pointer">
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="text-3xl font-normal">Ovation Auto Detail</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <Link
//                     to={link}
//                     smooth={true}
//                     duration={500}
//                     className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
//                   >
//                     {name}
//                   </Link>
//                 </li>
//               ))}
//               {/* DarkMode feature implement */}
//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//             </ul>
//           </nav>
//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden">
//             {/* dark  mode */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {/* Mobile Hamburger icon */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <ResponsiveMenu showMenu={showMenu} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "PRICE LIST",
//     link: "/#pricelist",
//   },
//   {
//     id: 1,
//     name: "ABOUT",
//     link: "/#about",
//   },
//   {
//     id: 1,
//     name: "CONTACT",
//     link: "/#booking",
//   },
// ];
// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div
//       className="relative z-10 shadow-md w-full dark:bg-dark bg-slate-100 dark:text-white duration-300
//     "
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="text-3xl font-normal">Ovation Auto Detail</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <a
//                     href={link}
//                     className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
//                   >
//                     {name}
//                   </a>
//                 </li>
//               ))}
//               {/* DarkMode feature implement */}
//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//             </ul>
//           </nav>
//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden ">
//             {/* dark  mode */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {/* Mobile Hamburger icon */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className=" cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <ResponsiveMenu showMenu={showMenu} />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "home",
  },
  {
    id: 2,
    name: "PRICE LIST",
    link: "priceList",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "about",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "contact",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-dark bg-slate-100 dark:text-white duration-300 hover:cursor-pointer">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-normal">Ovation Auto Detail</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
