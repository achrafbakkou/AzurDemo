import React, { useRef, useState } from "react";
import { Card } from "antd";
import "./Travels.css";
import Meta from "antd/es/card/Meta";

const travels = [
  {
    city: "Paris",
    country: "France",
    image: "/src/assets/london.jpg",
    description: "Découvrez la ville lumière et son charme éternel.",
  },
  {
    city: "Marrakech",
    country: "Morocco",
    image: "/src/assets/tokyo.jpg",
    description: "Plongez dans les couleurs et les marchés animés.",
  },
  {
    city: "Makkah",
    country: "Saudi Arabia",
    image: "/src/assets/tokyo.jpg",
    description: "Un lieu sacré chargé d'histoire et de spiritualité.",
  },
  {
    city: "Rome",
    country: "Italy",
    image: "/src/assets/rome.jpg",
    description: "Explorez l'histoire antique et la culture italienne.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    image: "/src/assets/barcelona.jpg",
    description: "Vivez l'art et l'architecture vibrante de la ville.",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    image: "/src/assets/istanbul.jpg",
    description: "Découvrez la rencontre de l'Orient et de l'Occident.",
  },
];

const Travels: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectedTravel, setSelectedTravel] = useState(travels[0]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  };
  const handleWheel = (e: React.WheelEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
  };

  return (
<section className="relative w-full h-[800px] px-6 overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center filter brightness-75 transition-all duration-700 ease-in-out"
    style={{ backgroundImage: `url(${selectedTravel.image})` }}
  ></div>

  {/* Right-side gradient with blurry white */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute bottom-0 right-0 w-2/4 h-full pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%,rgba(255,255,255,1)_100%)]">
    </div>
  </div>


  {/* Overlay content */}
  <div className="relative top-30 left-30 max-w-[1100px] ml-auto z-20 flex flex-col md:flex-row items-start gap-35 pt-[100px]" id="c  ">
    {/* Left: Dynamic text */}
    {/* <div className=" text-gray-800 drop-shadow-lg flex flex-col md:mt-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{selectedTravel.city}</h2>
      <p className="text-lg md:text-xl">{selectedTravel.description}</p>
    </div> */}
    {/* Right: Horizontal scrollable slider */}
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      className="no-scrollbar flex gap-6 pb-4 overflow-x-auto cursor-grab active:cursor-grabbing md:w-1/2 lg:w-3/4"
      style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
    >
      {travels.map((place, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 280, flexShrink: 0, cursor: "pointer" }}
          cover={
            <img
              draggable={false}
              alt={place.city}
              src={place.image}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
                transition: "transform 0.3s",
              }}
              onClick={() => setSelectedTravel(place)}
              className="hover:scale-105"
            />
          }
        >
          <Meta title={place.city} description={place.country} />
        </Card>
      ))}
    </div>
  </div>
</section>  
  );
};

export default Travels;
