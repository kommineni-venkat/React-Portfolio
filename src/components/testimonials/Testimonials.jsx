import React from 'react';
import { FaBriefcase  } from 'react-icons/fa';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://techisor.com/',
      name: 'MERN Stack Develoer',
     
      test: 'As a MERN stack developer intern at Techsior, I develop and maintain web applications using MongoDB, Express.js, React, and Node.js. I collaborate with senior developers to enhance functionality and performance. My role involves both frontend and backend tasks to deliver seamless user experiences.',
    },
    {
      id: 2,
      link: 'https://niveshartha.com/',
      name: 'Business Development Executive',
      
      test: "As a Business Development ExecutiveIntern at Nivesharthah, I assist in market research and identifying growth opportunities. I support the sales team in lead generation and client outreach. Additionally, I contribute to developing strategies to expand the company's market presence.",
    },
    {
      id: 3,
      link: 'https://prodigyinfotech.dev/',
      name: 'Data Science Intern',
      role: '| Redux | Html&Css | Python.',
      test: 'As a Data Science Intern at Prodigy Infotech, I analyze and interpret complex data sets to drive strategic decisions. I collaborate with the data science team on machine learning projects and predictive modeling. My role involves using Python and SQL to extract, clean, and visualize data.',
    },
   
  
  ];
  return (
    <section id="testmonials">
      
      <h2>Experience</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <FaBriefcase />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials