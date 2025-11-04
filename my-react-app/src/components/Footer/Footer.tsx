import React from "react";
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white px-8 py-12">
{/* <footer className="bg-gradient-to-br from-blue-700 via-sky-500 to-yellow-400 text-white px-8 py-12"> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* 🟦 Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">Azur Voyages</h2>
          <p className="text-sm mb-4">
            Voyagez en toute confiance.
          </p>
          <p className="text-xs text-gray-400">
            © {year} Azur Voyages. All rights reserved.
          </p>
        </div>
        {/* 🟩 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Destinations",
              "Track Shipment",
              "Book a Flight",
              "FAQs",
              "Contact Us",
            ].map((link) => (
              <li key={link} className="hover:text-blue-400 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* 🟨 Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Air Cargo",
              "Sea Freight",
              "Express Shipping",
              "Customs Clearance",
              "Warehousing",
              "Travel Packages",
              "Business Travel",
              "Charter Flights",
            ].map((service) => (
              <li key={service} className="hover:text-blue-400 cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* 🟧 Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Address: Casablanca, Morocco</li>
            <li>📞 +212 600 000 000</li>
            <li>📧 support@skyglobal.com</li>
            <li>🕓 Mon–Sat, 9AM–6PM</li>
          </ul>
        </div>

        {/* 🟪 Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Refund Policy",
              "Cookie Policy",
            ].map((policy) => (
              <li key={policy} className="hover:text-blue-400 cursor-pointer">
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🟫 Newsletter / CTA */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* ⚫ Social Media */}

      </div>
    </footer>
  );
};

export default Footer;
