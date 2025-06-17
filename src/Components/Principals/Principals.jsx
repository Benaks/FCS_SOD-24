import React from "react";
import Dom1 from "./img/Jonathan.jpg";
import Dom2 from "./img/DOM_Dan3.png";
import { PiCertificateBold } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";
function Principals() {
  return (
    <div className="bg-white px-[2vw] lg:px-[10vw]">
      {/* heading */}
      <div className="bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-14">
        <p className="font-bold text-accent">INTRODUCTION</p>
        <h1 className="text-3xl py-2 font-bold text-secondary">
          Note from the DOM's
        </h1>
      </div>

      {/* benefits */}
      <div className=" flex flex-col gap-10 md:flex-row">
        <div className="flex items-center justify-around md:flex-col p-5 md:w-[30%] gap-4 ">
          <div className="flex justify-center bg-primary/40 rounded-lg ">
            <img
              src={Dom1}
              alt=""
              className="w-[200px] h-[165px] rounded-md shadow-lg z-0 md:w-[200px] md:h-[200px]"
            />
          </div>

          <div className="">
            <img
              src={Dom2}
              alt=""
              className=" w-[200px] h-[165px] md:w-[200px] md:h-[200px] rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="bg-primary/50 rounded-lg shadow-md flex p-5 md:w-[70%] gap-2">
          <div className="w-[5%] flex justify-center ">
            <FaQuoteLeft className="text-7xl text-gray-300 " />
          </div>

          <div className="w-[95%]">
            <h1 className="text-[1.3em]  text-secondary font-bold my-2">
              Welcome to SOD 2025: "The Light of Life."
            </h1>
            <p className="text-[md] lg:text-[1em] leading-loose">
              <i>
                {" "} <br />
                "And because iniquity shall abound, the love of many shall wax
                cold"
              </i>
              <br /> <i>(Matthew 24:12).</i> <br /> <br />
              We've come to a season of the latter days that Jesus Christ spoke
              of: a season when people no longer see the need to follow Christ,
              and when godly activities no longer make sense to many (2 Timothy
              3:1-5). It is a season where the first are becoming the last; a
              time when love for God is no longer in the hearts of men. What a
              dangerous season we find ourselves in! <br /> <br /> Because of this, God
              proposed in his heart to rise for the rescue of his people whom he
              has bought with the price of the blood of His beloved son, Jesus
              Christ. He stood steadfastly and his hand wrought out salvation by
              himself (Isaiah 59:15-16). Just to ensure His people get saved. <br /> <br />
              The School of Destiny 2025 tagged THE LIGHT OF LIFE, is a medium
              where God would be using to raise men and women who will have a
              personal and genuine walk with Him; individuals who will know God
              personally and truly live out this God-life we received at
              salvation. These people will interact so much with God, that the
              very essence of their lives would be Christ. It is then that their
              lives would become the light that other men would see and be drawn
              to God (Mathew 5:16). <br /> <br /> Prepare for a transformational journey; one
              that will deepen your faith, embolden your confidence in Christ,
              and ignite an unquenchable passion to fulfill His will. <br /> <br /> You
              are welcome to SOD 2025, The Light of Life! <br /> <br /> Directors of
              Ministry. <br /> Adanu Daniel Kedenojo (Main Campus) <br />
              Jonathan Iyanuoluwa Adediji (Bosso Campus)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principals;
