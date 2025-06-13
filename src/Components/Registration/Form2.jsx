import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    level: "",
    chosenClass: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("sodUser", JSON.stringify(form));
    navigate("/registrars");
  };

  return (
    <div className="max-w-xl mx-auto mt-40 mb-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Register for SOD 2025</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "phone", "department", "level"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            className="w-full p-2 border rounded"
            value={form[field]}
            onChange={handleChange}
            required
          />
        ))}
        <select
          name="chosenClass"
          className="w-full p-2 border rounded"
          value={form.chosenClass}
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Theology and Apologetics">TAA</option>
          <option value="Faithful Witnessing">FAW</option>
          <option value="Divinity and The Supernatural">DTS</option>
          <option value="Purpose And Identity">PAI</option>
          <option value="Leadership and Dominion">LAD</option>
          <option value="Kingdom Wealth">KDW</option>
          <option value="Godly Relationship">GRP</option>
          <option value="Kingdom Scholars">KIS</option>
          <option value="Kingdom Craftsmen">KCR</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Submit & View Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
