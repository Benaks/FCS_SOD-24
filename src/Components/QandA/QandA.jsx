import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const QandA = () => {
  // aos init
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-white dark:bg-primary dark:text-secondary flex py-20 flex-col justify-center items-center px-[10vw] text-center">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-accent">FAQ</p>
        <h1 className="text-secondary font-bold text-[1.8em] md:text-[2em] dark:text-secondary">
          Likely questions you might ask..
        </h1>
      </div>

      <div className="bg-white dark:bg-primary dark:text-secondary  my-10">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the SOD?</AccordionTrigger>
            <AccordionContent>
              The School of Destiny is a Christian educational program designed
              to equip individuals with the knowledge, skills, and spiritual
              growth necessary to fulfill their God-given purpose. Through a
              combination of theological education,
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who can enroll in the SOD?</AccordionTrigger>
            <AccordionContent>
              SOD is open to every and any one to attend regardless of age,
              gender, religion, etc.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What courses are offered?</AccordionTrigger>
            <AccordionContent>
              This years SOD comprises of 8 class and the General Discusssion
              class, They are as follows; Wealth and Craftsmanship (WAC),
              Doctrinal Dialects and Polemics (DDP), Governance and
              Administration (GAA), Pneumatology and Proseuche (PAP), Witnessing
              and Purposeful Living (WPL), Kingdom Artistry (KA), Covenant
              Relationship (CR), Ecclesiology and Ecumenism (EAE)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long is the SOD program?</AccordionTrigger>
            <AccordionContent>
              The SOD program will span for 2 weekends
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default QandA;
