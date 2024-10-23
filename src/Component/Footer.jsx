import React from 'react'
import logo from '../assets/logo.png'
function Footer() {
  return (
    <div className='mt-20 bg-gray-100'>
        <div className=' md:mx-32'>
        <hr className= 'bg-purple-700'/>
            <div className='flex flex-col grid-cols-[3fr_1fr_1fr] sm:grid gap-14 my-10 mt-10 text-sm'>
                {/*left section*/}
                <div>
                    <img src={logo} alt="logo" className='mb-5 w-28'/>
                    <p className='w-full leading-6 text-gray-600 md:w-2/3'>Job seekers with the right opportunities and helps companies find the best talent efficiently.</p>
                </div>
                {/*midel section*/}
                <div>
                    <p className='mb-5 text-xl font-medium'>WORK WAVE</p>
                    <ul className='flex flex-col gap-2 text-gray-600 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Job</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/*Right section*/}
                <div>
                <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                        <li>+0-000-000-000</li>
                        <li>Workwave@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='bg-purple-600'/>
                <p className='py-5 text-sm text-center'>Copyright 2024 @ work wave - All Right Reserved.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
