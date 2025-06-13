import React from "react";
import { Link } from "react-router-dom";

const registrars = {
  GK: [
    { name: "Jacob", phone: "2348106272694" },
    { name: "Victoria", phone: "2349130239682" },
  ],
  Bosso: [
    { name: "Divine", phone: "2348030508274" },
    { name: "Samuel", phone: "2349044223677" },
  ],
};

const RegistrarContact = () => {
  const message =
    "Hello! My name is ______. I want to purchase a token for SOD registration";

  const linkGen = (phone) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="max-w-2xl mx-auto mt-40 mb-10 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Registration Fee: ₦1,000
        </h2>
        <p className="mb-4 text-center">
          Click a registrar below to proceed with payment and get coupon via
          WhatsApp:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(registrars).map(([center, reps]) => (
            <div key={center}>
              <h3 className="font-semibold mb-2">{center} Registrars</h3>
              {reps.map(({ name, phone }) => (
                <a
                  key={name}
                  href={linkGen(phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white p-3 rounded mb-2 hover:bg-green-600 transition"
                >
                  WhatsApp {name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center my-3 mx-5">
        <Link to="/register">
          <button className="bg-accent text-white p-2 rounded-md hover:bg-secondary duration-300 hover:ease-in-out">
            Register
          </button>
        </Link>
      </div>
    </>
  );
};

export default RegistrarContact;
