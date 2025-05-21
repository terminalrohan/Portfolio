import React from 'react'

const About = () => {
  
  return (
    <div className='wrappper w-full h-full bg-ExtraDarkColor pt-[200px] pb-[200px] pl-[120px] pr-[120px] sm:pt-[50px] sm:pb-[50px] sm:pr-[20px] sm:pl-[20px] '>
      <p className='heading text-PrimiaryColor text-[70px] josefin-sans-bold sm:text-[30px] ' > About</p>
        <div className="context w-full h-full flex gap-10 sm:gap-4">
            <hr className='!w-[300px] h-[5px] mt-[21px] bg-SecondaryColor rounded sm:w-[100px] sm:mt[15px] sm:hidden' />
            <p className='text-PrimiaryColor text-[30px] josefin-sans-light sm:text-[20px] sm:mt-[10px] ' > Hey there!, I’m <p className='text-SecondaryColor'>Rohan! </p> Maharaja Surajmal Institute has been my academic launchpad, where I'm mastering Computer Science and anticipating my graduation in 2025.  My journey is enriched with hands-on experience, like my Current role as a Frontend Developer Intern at Coltri Marthub Pvt Ltd, where I explored the intricacies of the <p className='text-SecondaryColor'>Frontend Development </p> I’m also exploring the exciting realms of <p className='text-SecondaryColor'> MERN Stack & DevOps.</p> My toolkit boasts of Material-UI and Figma, ensuring that I can weave user-centric designs with technical prowess. The certifications in MERN Stack IS testament to my commitment to continuous learning and excellence in full stack development.</p>
        </div>
    </div>
  )
}

export default About
