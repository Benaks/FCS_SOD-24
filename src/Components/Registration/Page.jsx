import { useEffect, useState } from "react";

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("sodUser");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setUser(parsed);
        console.log("Loaded user:", parsed); // 🐞 Debug
      } catch (err) {
        console.error("Failed to parse user data", err);
      }
    } else {
      console.warn("No sodUser data in localStorage");
    }
  }, []);

  if (!user) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        No registration data found. Please register first.
      </div>
    );
  }

  const message = `Hello, I just registered for SOD 2025.

Name: ${user.name}
Phone: ${user.phone}
Department: ${user.department}
Level: ${user.level}
Chosen Class: ${user.chosenClass}`;

  const linkGen = (phone) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-2xl mx-auto mt-40 mb-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2 text-center">
        Registration Fee: ₦1,000
      </h2>
      <p className="mb-4 text-center">
        Click a registrar below to proceed with payment via WhatsApp:
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
  );
};

export default RegistrarContact;
