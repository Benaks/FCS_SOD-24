import React, { useState } from "react";
import QandA from "../QandA/QandA";
import Card from "../Departments/Card/Card";
import { Link } from "react-router-dom";
import DeptImg from "../../assets/pick.jpg";

const Departments = () => {
  const [cards] = useState([
    {
      dept: "Theology and Apologetics (TAA)",
      desc: "This class explores apologetics, theology, God’s plan, redemption through Christ, living His teachings, correcting errors, and witnessing truth.(Acts 11:26).",
    },

    {
      dept: "Faithful Witnessing (FAW)",
      desc: "As knowledge grows, God’s word is twisted, causing heresies. This class covers Christology, Pneumatology, Apologetics, true witnessing, and evangelism strategies.",
    },
    {
      dept: " Divinity and The Supernatural (DTS)",
      desc: "n later days, people seek what works. This class will raise disciples grounded in God’s word, spreading Christ’s message with signs (Psalm 110:3).",
    },
    {
      dept: "Kingdom Craftsmen (KCR) ",
      desc: "This age rejects mediocrity. Creativity and innovation draw men to Christ. This class trains believers to advance the Kingdom and manifest Christ’s life (Exodus 36:1-3).",
    },
    {
      dept: "Purpose and Identity (PAI)",
      desc: "This class will raise men and women who know their identity in Christ, offering godly counsel with wisdom and integrity (Daniel 5:11-12)..",
    },
    {
      dept: "Leadership and Dominion (LAD)",
      desc: "Teaches key principles of leadership and organizational management, with a specific focus on applications within faith-based contexts.",
    },
    {
      dept: "Kingdom wealth (KDW)",
      desc: "Focuses on financial stewardship and creative skills, integrating both into a holistic approach for effective management (Luke 16:10)",
    },

    {
      dept: "Godly Relationship (GRP)",
      desc: "Investigates the significance and dynamics of covenant relationships, emphasizing their role and importance within the Christian faith.",
    },
    {
      dept: "kingdom Scholars (KIS)",
      desc: "Though often overlooked, education shapes society. Despite corruption and apathy, God is raising academic giants to impact lives, character, and societal relevance.",
    },
    //   {
    //   dept: "General Discussion (GND) ",
    //   desc: "This class equips believers with ethics and life skills to relate well with others, influencing the world without compromise (Colossians 4:5-6).",
    // },
  ]);

  return (
    <div className="py-40 px-[5vw]">
      {/* Heading */}
      <div className="flex flex-col text-center py-10 justify-center items-center">
        <p className="font-bold text-accent">DEPARTMENTS</p>
        <h1 className="text-secondary  text-[1.5em]  md:text-[2em] dark:text-secondary">
          Prayerfully pick a department to enroll
        </h1>
      </div>

      {/* Department cards */}
      <div className="flex flex-col gap-5 justify-center md:flex-row md:flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 ">
          <img
            src={DeptImg}
            alt=""
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-primary/40 w-full md:w-1/3 lg:w-1/4 p-5 rounded-md shadow-lg"
          >
            <h1 className="font-bold text-secondary text-[1.2em]">
              {card.dept}
            </h1>
            <p className="my-4">{card.desc}</p>

            <Link to="/register">
              <button className="bg-accent text-white p-2 rounded-md hover:bg-secondary duration-300 hover:ease-in-out">
                Register
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
