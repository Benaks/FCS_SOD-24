import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import About from "./Components/About/About.jsx";
import App from "./Components/Registration/Form";
import RegisterForm from "./Components/Registration/Form2.jsx";
import RegistrarContact from "./Components/Registration/Page.jsx";
import Home from "./Components/Home/Home.jsx";
import Departments from "./Components/Departments/Departments.jsx";
import { Toaster } from "./Components/ui/toaster";
import { IdCard } from "./Components/Id/IdCard";

// Define your routing configuration
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/departments" element={<Departments />} />
    <Route path="/about" element={<About />} />
    <Route path="/id-card" element={<IdCard />} />
    <Route path="/register" element={<App />} />
    <Route path="/registrars" element={<RegistrarContact />} />
  </Routes>
);

// Wrap your AppRoutes with KindeProvider
const AppWithAuth = () => (
  <KindeProvider
    clientId="64f09e67efd347bca5a554fd63b53446"
    domain="https://sodwebsite.kinde.com"
    redirectUri="https://fcs-sod-24.vercel.app/id-card"
    logoutUri="https://fcs-sod-24.vercel.app/"
  >
    <AppRoutes />
  </KindeProvider>
);

// Render the app
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Toaster />
        <AppWithAuth />
      </Layout>
    </Router>
  </React.StrictMode>
);
