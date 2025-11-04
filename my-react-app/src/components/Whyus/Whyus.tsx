import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Emails from "./Emails";

const reviews = [
  { name: "Jean Dupont", text: "Service impeccable et très professionnel ! Je recommande vivement Azur Voyages.", rating: 5 },
  { name: "Sophie Martin", text: "Des voyages organisés parfaitement. Merci pour l'accompagnement personnalisé.", rating: 5 },
  { name: "Ali Ben Saad", text: "Réservations rapides et efficaces. Très satisfait de mon expérience.", rating: 4 },
  { name: "Marie Petit", text: "Équipe à l'écoute et très réactive. Je referai appel à eux sans hésiter.", rating: 5 },
  { name: "Karim El Amrani", text: "Des solutions sur mesure pour mes voyages. Très confortable et rassurant.", rating: 5 },
  { name: "Clémence Robert", text: "Une agence de confiance pour tous mes déplacements en France et à l’étranger.", rating: 5 },
];

const WhyUs: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  const nextSlide = () => setStartIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section
      className="relative py-24 px-6"
      style={{
        backgroundImage: "url('/src/assets/train.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto space-y-12 text-center text-white">
        {/* Title */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi choisir Azur Voyages ?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Azur Voyages est une agence de confiance basée à La Seyne-sur-Mer,
            spécialisée dans la billetterie pour bateaux, avions et bus. Nous
            proposons des voyages organisés en France et à l’étranger, des
            excursions à la journée, ainsi que des services de transport de
            colis vers l’Afrique du Nord. Notre priorité est votre confort et
            votre satisfaction, avec des solutions sur mesure adaptées à vos
            besoins.
          </p>
        </div>

        {/* Reviews Slider */}
            <div className="relative flex items-center justify-center">
          <div className="flex gap-6 overflow-hidden w-full max-w-5xl">
            {visibleReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-none w-80 min-h-40"
              >
                <p className="mb-4 overflow-auto text-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent p-[2px] shadow hover:opacity-90 transition">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center text-gray-800 font-bold text-lg">
              <LeftOutlined/>
            </div>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent p-[2px] shadow hover:opacity-90 transition"
          >
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center text-gray-800 font-bold text-lg">
                <RightOutlined/>
            </div>
          </button>
        </div>
      {/* FORM */}
            <Emails/>
      </div>
    </section>
  );
};

export default WhyUs;
