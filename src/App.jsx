import { useEffect, useState } from "react";
import "aos/dist/aos.css";

import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import QandA from "./Components/QandA/QandA";
import Partners from "./Components/Partners/Partners";
import Benefits from "./Components/Benefits/Benefits";
import Principals from "./Components/Principals/Principals";
import Testimonial from "./Components/Testimonials/Testimonial";
import RegistrarContact from "./Components/Registration/Page.jsx";
import { heroData } from "./utils/data";
import { NavLink } from "react-router-dom";
// import Aos from "aos";

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // aos init
  // useEffect(() => {
  //   Aos.init();
  // }, []);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 7000);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        // setHeroCount={setHeroCount}
        // playStatus={playStatus}
      />
      <Partners />
      <Principals />
      <Benefits />
      <Testimonial />
      <QandA />
    </div>
  );
};

export default App;

