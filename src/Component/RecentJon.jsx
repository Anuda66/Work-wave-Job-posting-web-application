import React from 'react'
import jobthumnail  from '../assets/job.avif'
import { CgProfile } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

function RecentJon() {
  return (
    <div className='grid w-1/4 gap-4 px-3 pt-5 grid-col-auto gap-y-6 sm:px-0 mt-36'>
      <div className='overflow-hidden border-purple-700 cursor-pointer rounded-xl hover:translate-[-10px] transition-all duration-500 shadow-lg border'>
        <div className='flex items-center gap-3 p-3 mb-5'>
            <CgProfile className='text-[35px]'/> 
            <p className='font-thin'>SN Software Solition</p> 
        </div> 
        <img src={jobthumnail }alt="job thumbnail" className='items-center w-80' />
        <div className='p-4'>
            <div className='flex items-center gap-2 mb-3 text-sm text-center'>
                <h3 className='text-2xl font-medium'>Software Engineer Inter</h3>   
            </div>
            <div className='flex flex-col gap-3'>
                <p>Software engineer frontend developer</p>
                <p>React,sprinboot</p>
                <p className='text-gray-400'>colombo , westan province</p>
                <div className='flex flex-row items-center gap-4 px-10 py-2 text-white bg-purple-500 rounded-lg group'>
                    <p>Apply</p><FaArrowRight />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RecentJon
