import { GrNext } from "react-icons/gr";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link, NavLink } from 'react-router-dom';

import PropTypes from "prop-types";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
 
}) => {
  const { register, isAuthenticated } = useKindeAuth();
  return (
    <div className="bg-black/50 h-[100vh] flex justify-center transition ease-in-out">
      <div className="hero my-[120px]   mx-[10vw] mt-[270px] flex flex-col justify-center items-center gap-10">
        {/* text */}
        <div className="hero-text text-white text-5xl sm:text-6xl lg:text-7xl gap-5 text-center">
          <p> {heroData.text1} </p>
          <p className="text-[0.3em] mt-5 leading-normal  ">{heroData.text2}</p>
        </div>

         {/* button  */}

 

        <div className="flex gap-2 flex-row">
        <div className="hero-explore  font-semibold  flex bg-secondary dark:bg-primary dark:text-secondary cursor-pointer text-white justify-center items-center px-2 py-4 gap-2 rounded-l-full hover:bg-accent duration-300 ease-out">
        
            <NavLink to='/departments'>
            <button  className=" p-1 text-white">
            Register NOW 
           </button>
          </NavLink>
        </div>

          {
            !isAuthenticated && (
              <button onClick={register}  type="button" className='hero-explore  flex bg-accent dark:bg-primary dark:text-secondary cursor-pointer text-white justify-center items-center px-4 py-5 gap-2  rounded-r-full hover:bg-secondary duration-300 ease-out'>Print ID Card</button>
              )
          }

          {isAuthenticated && (
            
            <NavLink to='/id-card'>
              <button  className='hero-explore  flex bg-accent dark:bg-primary dark:text-secondary cursor-pointer text-white justify-center items-center px-4 py-5 gap-2  rounded-r-full hover:bg-secondary duration-300 ease-out'>Print ID Card</button>
              </NavLink>
          )

          }

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

};
