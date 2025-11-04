import React, { useEffect, useState } from "react";
import "./Navres.css";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Promotion", href: "#promotion" },
    { name: "Services", href: "#services" },
    { name: "Transport", href: "#transport" },
    { name: "A propos", href: "#about" },
    { name: "Contactez-nous", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-100 border-b ${
        isScrolled
          ? "bg-white text-blue-400 shadow-lg border-gray-200"
          : "bg-white/10 text-white backdrop-blur-xl border-black/30"
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-6 py-4" id="nav-cont">
        {/* Logo */}

        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-[#F9F5F0] to-sky-500 bg-clip-text text-transparent text-center" id="logo">
          Azur Voyages
        </h1>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
                {navItems.map((i) => (
                <li key={i.name}>
                  <a href={i.href}
                    className="relative  transition-all duration-100 list-none hover:text-black  hover:cursor-pointer font-medium text-sm sm:text-base"
                >
                    {i.name}
                    </a>
                </li>
                ))}
            </ul>
        {/* Navigation */}
        {/* <ul className="flex flex-wrap gap-4 md:gap-8 font-medium lg:justify-end flex-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative  transition-all duration-100 hover:text-sky-500 
                           after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
                           after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-100
                           hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
