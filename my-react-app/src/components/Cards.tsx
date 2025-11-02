import React, { useState } from "react";

interface CardData {
  title: string;
  description: string;
  image: string;
}

const cards: CardData[] = [
  { title: "Paris", description: "Ville lumière", image: "/src/assets/paris.png" },
  { title: "Rabat", description: "Couleurs et traditions", image: "/src/assets/rabat.jpg" },
  { title: "Tokyo", description: "Futur et culture", image: "/src/assets/tokyo.jpg" },
  { title: "New York", description: "La ville qui ne dort jamais", image: "/src/assets/newyork.jpg" },
  { title: "Rome", description: "L’histoire éternelle", image: "/src/assets/rome.jpg" },
  { title: "Istanbul", description: "Entre Orient et Occident", image: "/src/assets/istanbul.jpg" },
  { title: "Dubai", description: "Modernité et luxe", image: "/src/assets/dubai.jpg" },
  { title: "Madrid", description: "Art et passion", image: "/src/assets/madrid.jpg" },
  { title: "Cairo", description: "Mystère des pyramides", image: "/src/assets/cairo.jpg" },
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
            Réduire
          </button>
        )}
      </div>
    </section>
  );
};

export default Cards    ;
