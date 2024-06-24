// // import React, { useState, useEffect } from "react";
// // import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// // import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// // import { Link } from "react-scroll";
// // import ResponsiveMenu from "./ResponsiveMenu";

// // export const Navlinks = [
// //   {
// //     id: 1,
// //     name: "HOME",
// //     link: "home",
// //   },
// //   {
// //     id: 2,
// //     name: "PRICE LIST",
// //     link: "priceList",
// //   },
// //   {
// //     id: 3,
// //     name: "ABOUT",
// //     link: "about",
// //   },
// //   {
// //     id: 4,
// //     name: "CONTACT",
// //     link: "contact",
// //   },
// // ];

// // const Navbar = ({ theme, setTheme }) => {
// //   const [showMenu, setShowMenu] = useState(false);
// //   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
// //   const [visible, setVisible] = useState(true);

// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu);
// //   };

// //   const handleScroll = () => {
// //     const currentScrollPos = window.pageYOffset;
// //     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
// //     setPrevScrollPos(currentScrollPos);
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [prevScrollPos, visible, handleScroll]);

// //   return (
// //     <div
// //       className={`fixed w-full z-10 transition-all duration-300 ${
// //         visible ? "top-0" : "-top-16"
// //       } shadow-md dark:bg-dark bg-slate-100 dark:text-white`}
// //     >
// //       <div className="container py-2 md:py-0">
// //         <div className="flex justify-between items-center">
// //           <div>
// //             <span className="text-3xl font-normal">Ovation Auto Detail</span>
// //           </div>
// //           <nav className="hidden md:block">
// //             <ul className="flex items-center gap-8">
// //               {Navlinks.map(({ id, name, link }) => (
// //                 <li key={id} className="py-4">
// //                   <Link
// //                     to={link}
// //                     smooth={true}
// //                     duration={500}
// //                     className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
// //                   >
// //                     {name}
// //                   </Link>
// //                 </li>
// //               ))}
// //               {theme === "dark" ? (
// //                 <BiSolidSun
// //                   onClick={() => setTheme("light")}
// //                   className="text-2xl"
// //                 />
// //               ) : (
// //                 <BiSolidMoon
// //                   onClick={() => setTheme("dark")}
// //                   className="text-2xl"
// //                 />
// //               )}
// //             </ul>
// //           </nav>
// //           <div className="flex items-center gap-4 md:hidden">
// //             {theme === "dark" ? (
// //               <BiSolidSun
// //                 onClick={() => setTheme("light")}
// //                 className="text-2xl"
// //               />
// //             ) : (
// //               <BiSolidMoon
// //                 onClick={() => setTheme("dark")}
// //                 className="text-2xl"
// //               />
// //             )}
// //             {showMenu ? (
// //               <HiMenuAlt1
// //                 onClick={toggleMenu}
// //                 className="cursor-pointer transition-all"
// //                 size={30}
// //               />
// //             ) : (
// //               <HiMenuAlt3
// //                 onClick={toggleMenu}
// //                 className="cursor-pointer transition-all"
// //                 size={30}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useEffect } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { Link } from "react-scroll";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "home", // This should match the ID of the top element
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
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible, handleScroll]);

//   return (
//     <div
//       className={`fixed w-full z-10 transition-all duration-300 ${
//         visible ? "top-0" : "-top-16"
//       } shadow-md dark:bg-dark bg-slate-100 dark:text-white`}
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
//           <div className="flex items-center gap-4 md:hidden">
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
//       <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { Link } from "react-scroll";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "home", // This should match the ID of the top element
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
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible, handleScroll]);

//   return (
//     <div
//       className={`fixed w-full z-10 transition-all duration-300 ${
//         visible ? "top-0" : "-top-16"
//       } shadow-md dark:bg-dark bg-slate-100 dark:text-white`}
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center cursor-pointer">
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             className="text-3xl font-normal cursor-pointer"
//           >
//             Ovation Auto Detail
//           </Link>
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
//           <div className="flex items-center gap-4 md:hidden">
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
//       <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "home", // This should match the ID of the top element
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
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`fixed w-full z-10 transition-all duration-300 ${
        visible ? "top-0" : "-top-16"
      } shadow-md dark:bg-dark bg-slate-100 dark:text-white`}
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-normal cursor-pointer"
          >
            Ovation Auto Detail
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500 cursor-pointer"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
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
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
