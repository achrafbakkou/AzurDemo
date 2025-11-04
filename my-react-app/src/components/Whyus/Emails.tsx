import React, { useState } from "react";

const Emails: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.text();
      if (result === "Success") {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {/* Restez informé(e) ! */}
        Ajoutez votre adresse e-mail pour recevoir les dernières offres
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 w-[90%] p-4 rounded-lg backdrop-blur-md shadow-lg"
      >
        <input
          type="email"
          placeholder="Entrez votre email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 w-80 rounded-md outline-none text-white w-[90%]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 bg-gray-800 text-white rounded-md font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {status === "loading" ? "Envoi..." : "Enregistrer"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-300 mt-3">Merci pour votre inscription !</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-3">
          {/* Une erreur est survenue. Veuillez vérifier votre email. */}
        </p>
      )}
    </div>
  );
};

export default Emails;
