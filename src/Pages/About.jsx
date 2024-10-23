import React from 'react'
import aboutus from '../assets/about.jpg'
function About() {
  return (
    <div>
      <div className='pt-10 text-2xl text-center text-gray-500'>
        <p>ABOUT <span className='font-medium text-gray-800 '> US</span></p>
      </div>
      <div className='flex flex-col gap-12 my-10 md:flex-row '>
        <img  src={aboutus} alt="About Us Image" className='w-full md:max-w-[360px] '/>
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4 '>
          <p>At Work-Wave, our mission is to bridge the gap between job seekers and employers by offering an intuitive and efficient platform for job searching and recruitment. Whether you're a fresh graduate seeking your first role or a company looking to hire top talent quickly, we provide all the tools you need to succeed. Our system is designed to streamline the job application process, from generating professional CVs to offering personalized job recommendations.</p>
          <p>Founded with the vision of improving the traditional job search experience, we leverage the latest technology, including machine learning, to match candidates with relevant opportunities. Employers can quickly find qualified applicants, and job seekers benefit from real-time alerts and a user-friendly platform to apply for jobs that match their skills and preferences.</p>
        </div>
      </div>
    </div>
  )
}

export default About
