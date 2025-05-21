import React, { useEffect } from "react";

import Aos from "aos";
const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 700,
    });
  }, []);
  return (
    <div className="wrapper w-full h-full bg-ExtraDarkColor p-[100px] sm:pt-[40px] sm:pl-[20px] sm:pr-[20px]">
      <div className="title text-[80px] text-PrimiaryColor josefin-sans-bold pt-[40px] sm:text-[50px] sm:pt-[20px]">
      Experience
      </div>
      
        <div className="item w-[800px] sm:w-[100%] sm:flex sm:flex-col sm:gap-[10px] ">
          <div className="heading flex items-center sm:mt-[30px]">
            <hr className="w-[60px] h-[4px] ml-[30px] bg-SecondaryColor rounded sm:hidden" />
            <div className="title text-SecondaryColor text-[25px] pl-[20px] sm:pl-[5px] sm:text-[20px]">
              Front End Software Developer, Coltri Marthub Pvt. Ltd. <br/> (Dec 2024- Ongoing)
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
            • Contributed to the frontend development of a business website for a small-scale finance company, focusing on responsiveness, usability, and client requirements.<br/>
            • Reviewed and debugged code written by senior developers to identify and fix responsive design issues, ReactJS errors, and API integration bugs.<br/>
            • Implemented frontend components using HTML, CSS, JavaScript, and ReactJS, ensuring consistent UI across devices.<br/>
            • Integrated APIs using Axios to fetch and display client data dynamically, improving website interactivity and load times.<br/>
            • Delivered a polished, fully functional, and client-approved live website that enhanced the client’s digital presence and accessibility for their customers.

            </div>
          
          </div>
        </div>
      
    </div>
  );
};

export default Testimonials;
