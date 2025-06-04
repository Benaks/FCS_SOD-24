import React from 'react';
import Nenrot from './img/NentorIMG.jpg'
import John from './img/John.jpg'
import Atu from './img/Atu.jpeg'
import Daodu from './img/DaoduIMG.jpg'
const testimonials = [
    {
      image: Daodu,
      name: 'Michael Daodu',
      level: '300L',
      testimony: 'SOD Class of intimacy and supernatural nurtured my mind, body, and spirit, reigniting my passion for life and deepening my spiritual connection.',
    },
    {
      image: Atu,
      name: 'Mary Atu',
      level: '300L',
      testimony: 'SOD brought me clarity, healing, grace, and hope. God’s word settled family issues and revived my purpose through impartation.',
    },
    {
      image:John,
      name: 'John Miracle Osezua',
      level: '400L',
      testimony: 'SOD has transformed me through Spirit-led teachings, shaping my decisions, empowering boldness, clarity, vision, and building me spiritually.',
    },
    {
      image:Nenrot,
      name: 'Msugh Favour Nenrot',
      level: 'Alumni',
      testimony: 'From 100 to 500 level, each SOD class reshaped my thoughts, aligning with my life seasons, fostering intentional learning and growth.',
    },
  ];

const Testimonial = () => {
  return (
      <div className='bg-white'>
            {/* heading */}
            <div className='bg-white dark:bg-primary px-[10vw] tect-center dark:text-white flex flex-col justify-center items-center py-14'>
                     <p className='font-bold text-accent'>TESTIMONIALS</p>
                    <h1 className='text-3xl py-2 font-bold text-secondary'>Testimony from Past students</h1>
             
                  </div>
                  
           <div className="flex flex-col items-center justify-center p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="max-w-sm p-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full"
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-accent">{testimonial.name}</h3>
              <p className="text-secondary">{testimonial.level}</p>
            </div>
          </div>
          <p className="text-gray-600">{testimonial.testimony}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Testimonial;
