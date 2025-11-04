import React, { useState } from "react";
import p1 from "../../assets/paris.webp";
import p2 from "../../assets/rabat.webp";
import p3 from "../../assets/tokyo.webp";
import p4 from "../../assets/newyork.webp";
import p5 from "../../assets/rome.webp";
import p6 from "../../assets/istanbul.webp";
import p7 from "../../assets/dubai.webp";
import p8 from "../../assets/madrid.webp";
import p9 from "../../assets/cairo.webp";
interface CardData {
  title: string;
  description: string;
  image: string;
}

const cards: CardData[] = [
  { title: "Paris", description: "Ville lumière", image: p1 },
  { title: "Rabat", description: "Couleurs et traditions", image: p2 },
  { title: "Tokyo", description: "Futur et culture", image: p3 },
  { title: "New York", description: "La ville qui ne dort jamais", image: p4},
  { title: "Rome", description: "L’histoire éternelle", image:p5  },
  { title: "Istanbul", description: "Entre Orient et Occident", image: p6 },
  { title: "Dubai", description: "Modernité et luxe", image: p7 },
  { title: "Madrid", description: "Art et passion", image:p8 },
  { title: "Cairo", description: "Mystère des pyramides", image: p9},
];

const Cards : React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cards : cards.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">Nos Destinations</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button */}
      <div className="mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Voir plus
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-400 transition"
          >
            Voir moins
          </button>
        )}
      </div>
    </section>
  );
};

export default Cards    ;
