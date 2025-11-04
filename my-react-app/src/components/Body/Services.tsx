import React from "react";
import ma from "../../assets/ma.webp";
import ship from "../../assets/ship.webp";
import makka from "../../assets/kabba.webp";
const Services: React.FC = () => {
    return (
    <section className="max-w-7xl mx-auto py-16 px-6 space-y-16 mt-10">
  {/* 🌟 Section Title */}
  <div className="text-center mb-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
    <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
      Bienvenue chez Azur Voyages, votre partenaire de confiance pour des services de qualité adaptés à vos besoins. 
      Nous proposons une gamme complète de prestations pour faciliter vos voyages et expéditions.
    </p>
  </div>
<hr className="border-t-2 border-gray-800 my-10" />
  {/* 1️⃣ First Division - Image on Right */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Text */}
    <div className="md:w-1/2 h-[300px] flex flex-col justify-center" >
      <h2 className="text-3xl font-bold mb-4 text-center">Transport de marchandises vers le Maroc</h2>
      <p className="text-gray-700">
Nous offrons un service de transport de marchandises vers tout le Maroc à partir de 1,80 € le kilo. Que ce soit pour des envois personnels ou professionnels, nous assurons une livraison sécurisée et ponctuelle de vos biens.Grace a notre collaboration avec des agences partenaires.
      </p>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src={ma}
        alt="First Division"
        loading="lazy"
        className="w-300 h-120 rounded-lg object-cover object-center"
      />
    </div>
  </div>

  {/* 2️⃣ Second Division - Image on Left */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:flex-row-reverse">
    {/* Text */}
    <div className="md:w-1/2  h-[300px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Relais Pickup</h2>
      <p className="text-gray-700">
En tant que point relais Pickup, nous facilitons vos envois et réceptions de colis. Notre emplacement pratique vous permet de récupérer ou déposer vos colis en toute simplicité, avec des horaires adaptés à votre emploi du temps.      </p>
    </div>
    {/* Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src= {ship}
        alt="Second Division"
        loading="lazy"
        className="w-300 h-120 rounded-lg object-cover object-center"
      />
    </div>
  </div>

  {/* 3️⃣ Third Division - Image on Right */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Text */}
    <div className="md:w-1/2  h-[300px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">Organisation d’Omra</h2>
      <p className="text-gray-700">
Azur Voyage organise des pèlerinages Omra en collaboration avec des agences spécialisées. Nous prenons en charge tous les aspects de votre voyage spirituel, y compris les visas, l’hébergement et le transport, pour vous offrir une expérience sereine et mémorable.
      </p>
    </div>
    {/* Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={makka}
        alt="Third Division"
        loading="lazy"
        className="w-300 h-120 rounded-lg object-cover object-center"
      />
    </div>
  </div>
</section>
    )

}
export default Services