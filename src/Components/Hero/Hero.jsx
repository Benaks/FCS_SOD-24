import { GrNext } from "react-icons/gr";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import PropTypes from "prop-types";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  // setPlayStatus,
  // playStatus,
}) => {
  const { register } = useKindeAuth();
  return (
    <div className="bg-black/50 h-[100vh] flex justify-center transition ease-in-out">
      <div className="hero my-[120px]   mx-[10vw] mt-[270px] flex flex-col justify-center items-center gap-10">
        {/* text */}
        <div className="hero-text text-white text-5xl sm:text-6xl lg:text-7xl gap-5 text-center">
          <p>{heroData.text1}</p>
          <p className="text-[0.3em] mt-5 md:leading-6  ">{heroData.text2}</p>
        </div>

        {/* button */}
        <div className="hero-explore  flex bg-secondary dark:bg-primary dark:text-secondary cursor-pointer text-white justify-center items-center px-5 py-5 gap-2">
          <button onClick={register} type="button" className=" p-1 text-white">
            Download your Id Card
          </button>

          <GrNext />
        </div>

        <div>
          <ul className="hero-dots flex justify-center items-center gap-4">
            <li
              onClick={() => setHeroCount(0)}
              className={heroCount === 0 ? " hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={heroCount === 1 ? " hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={heroCount === 2 ? " hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  heroData: PropTypes.object,
  setHeroCount: PropTypes.object,
  heroCount: PropTypes.number,
  // setPlayStatus: PropTypes.object,
  // playStatus: PropTypes.boolean,
};
