import React, { useEffect, useState } from "react";
import "./Hero.css";
// 🎥 List of background videos
const videos = [
  "/src/assets/1.mp4",
  "/src/assets/2.mp4",
    "/src/assets/3.mp4",
  "/src/assets/3.mp4",
];

// 🏙️ City names for the typing animation
const cities = ["Paris", "Makkah", "Marrakech","Rome", "Tokyo", "Madrid"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0); // Active video index
  const [cityIndex, setCityIndex] = useState(0); // Active city name index
  const [typedText, setTypedText] = useState(""); // Text being typed
  const [typing, setTyping] = useState(true); // Controls typing/deleting

  // 🎬 Auto-change videos every 2 seconds
  useEffect(() => {
    const videoTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(videoTimer);
  }, []);

  // ⌨️ Typewriter effect for city names
  useEffect(() => {
    let timeout = 20;
    const city = cities[cityIndex];

    if (typing) {
      // Typing letters one by one
      if (typedText.length < city.length) {
        timeout = setTimeout(
          () => setTypedText(city.slice(0, typedText.length + 1)),
          500
        );
      } else {
        // Wait a bit when word is fully typed
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), 1500);
      }
    } else {
      // Deleting letters one by one
      if (typedText.length > 0) {
        timeout = setTimeout(
          () => setTypedText(city.slice(0, typedText.length - 1)),
          100
        );
      } else {
        // Move to next city name
        setCityIndex((prev) => (prev + 1) % cities.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, typing, cityIndex]);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* 🎥 Background videos with fade transition */}
      {videos.map((video, i) => (
        <video
          key={i}
          src={video}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-[800px] object-cover transition-opacity duration-3000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* 🌫️ Dark overlay with centered text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight"  id="title">
          {/* À la poursuite de l’horizon
          <br />
          Bienvenue à{" "} */}
          Le monde à votre portée, par air, mer et rail.
          {/* ✨ Typing city name area (fixed width but left-aligned) */}
          {/* <span className="inline-block text-sky-400 text-left min-w-[10ch]">
            {typedText}
          </span> */}
        </h1>

        {/* 🌍 Subtitle text */}
        <p className="text-lg md:text-xl opacity-90">
          {/* Discover beauty around the world with <b>Azur Voyage</b> */}
          Voyagez, expédiez, connectez le monde avec <b>Azur Voyage</b>.
        </p>

{/* <div className="inline-block p-[2px] rounded-lg bg-gradient-to-br from-yellow-400 via-white to-sky-500">
  <button className="bg-white text-black font-medium px-6 py-2 rounded-lg hover:bg-gray-100 transition">
    <a href="http://" className="block">Discover more</a>
  </button>
</div> */}
  <button className="group relative flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-semibold rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-all">
      {/* Arrow */}
      <div className="relative flex items-center justify-center w-6 h-6 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="transition-transform duration-500 group-hover:translate-x-20 group-hover:rotate-45"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </svg>
      </div>

      {/* Text */}
      <span className="transition-transform duration-500 group-hover:translate-x-50">
        Réservez maintenant
      </span>

      {/* Optional subtle shadow/glow */}
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-blue-500/30 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
    </button>
      </div>

    </div>
  );
};

export default Hero;
