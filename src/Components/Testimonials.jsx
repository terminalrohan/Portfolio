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
              Traniee, Brain Mentors Pvt Ltd
            </div>
          </div>
          <div className="feedbacks  ml-[110px] text-PrimiaryColor text-[18px] josefin-sans-light p-[20px] sm:ml-[0px]">
            <div className="desp ">
            • Completed 4-week Summer Training Program conducted by Brain Mentors Pvt Ltd under the supervision of Mr. Amit
Srivastava for the course “MERN Stack“.
• Worked on MongoDB, Express, React, & Node.js along with HTML various CSS & JavaScript Frameworks, Libraries
and concepts of Web development
            </div>
          
          </div>
        </div>
      
    </div>
  );
};

export default Testimonials;
