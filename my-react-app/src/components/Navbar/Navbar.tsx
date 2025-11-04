import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // change color after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white shadow-lg border-gray-200"
          : "bg-white/10 backdrop-blur-xl border-black/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-400 via-[#F9F5F0] to-sky-500 bg-clip-text text-transparent">
          Azur Voyage
        </h1>
<ul className="flex space-x-8 text-black font-medium">
  {[
    { name: "Promotion", href: "#promotion" },
    { name: "Services", href: "#services" },
    { name: "Transport", href: "#transport" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ].map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="relative text-blue-400 transition-all duration-300 hover:text-sky-500 
                   after:content-[''] after:absolute after:left-0 after:bottom-[-3px] 
                   after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300
                   hover:after:w-full"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>
        {/* <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Accueil</NavLink></li>
          <li><NavLink to="/promos" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Promotions</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Services</NavLink></li>
          <li><NavLink to="/transport" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Transports</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>À propos</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Contact</NavLink></li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
