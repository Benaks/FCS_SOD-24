import Sodbanner from "../About/img/SOD-25.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white  md:px-[10vw] py-40 px-[5vw] md:py-40">
      {/* heading */}
      <div className="bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-10 md:py-14">
        <p className="font-bold text-accent">ABOUT</p>
        <h1 className="text-2xl md:text-3xl py-2 font-bold text-secondary">
          About SOD{"'"}25
        </h1>
      </div>

      {/* benefits */}
      <div className="flex flex-col gap-10 lg:flex-row  justify-center items-center ">
        <div className="  bg-primary/40 lg:w-[40%] rounded-lg shadow-md flex justify-center items-center p-5 gap-4 brightness-80">
          <img src={Sodbanner} alt="" className="w-full h-auto rounded-lg" />
        </div>

        <div className="bg-primary/40 lg:w-[60%] rounded-lg shadow-md flex p-2 gap-2">
          <div className="w-[10%] flex justify-center">
            <FaQuoteLeft className="text-4xl md:text-7xl text-gray-300" />
          </div>
          {/*TODO: here ohhhhh */}
          <div className="w-[95%]">
            <h1 className="text-[1.1em] md:text-[1.3em] text-secondary font-bold">
              Vision & Mission
            </h1>
            <p className="text-[0.8em] md:text-[0.9em]">
              "And because iniquity shall abound, the love of many shall wax cold" (Matthew 24:12). <br />
              <br /> We've come to a season of the latter days that Jesus Christ spoke of — a season where people no longer see the need to follow Christ, and where Godly activities no longer make sense to many (2 Timothy 3:1–5). It is a season where the first are becoming the last; a time when love for God is no longer in the hearts of men.<br />
              What a dangerous season we find ourselves in! <br />
              Because of this, God wants to raise men and women who will have a personal and genuine walk with Him — individuals who will know God personally and truly live out this God-life we received at salvation. These people will interact so much with God, that the very essence of their lives would be Christ.
               <br />
               It is then that their lives would become the light that other men would see, and be drawn to God (Matthew 5:16).
                <br />
            </p> <br />
              <h1 className="text-[1.1em] md:text-[1.3em] text-secondary font-bold">
              Vision for SOD 2025
            </h1>
             <p className="text-[0.8em] md:text-[0.9em]">To build a people whose lives (in their various fields) would become the light that men would see and be drawn to Christ.</p><br />
          
          
             <h1 className="text-[1.1em] md:text-[1.3em] text-secondary font-bold">
              Objectives of SOD 2025
            </h1>
            <p className="text-[0.8em] md:text-[0.9em]">
                   1. To equip believers with Bible-based teachings — believers who will intentionally know God on a personal basis, and whose private lives will be dedicated and burning for God. <br />

                   2. To raise burning disciples who are ready to shine by raising other disciples and strategically eradicating darkness. <br />

                   3. To raise disciples who will know God, be His mouthpiece, and faithfully deliver His mandate in government, media, and in all spheres of influence. <br />

                   4. To raise disciples who will be sound in the knowledge of God’s Word and able to strategically spread the Good News of Christ to the universe through the workings of signs and wonders. <br />

                   5. To raise disciples who will use their financial influence and family life to display Christ to the world. <br />
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
