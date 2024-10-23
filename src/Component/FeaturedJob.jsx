import React from 'react'
import { FaChevronDown } from "react-icons/fa";


function FeaturedJob() {
  return (
    <div>
        <div className='absolute flex flex-col items-center gap-10 item py-14 sm:flex-row md:flex-row'>
            <h2 className='text-2xl font-medium'>Featured Jobs</h2>
            <div className='flex flex-row items-center gap-5'>
                <p >Sort by</p>
                <div className='flex items-center gap-2 px-8 py-2 bg-gray-200 rounded-lg cursor-pointer group'>
                    <p className='text-gray-600'>Default</p><FaChevronDown className='w-2'/>
                    
                </div >
                <div className='absolute top-0 right-0 z-40 hidden pt-16 font-normal text-gray-500 group-hover:block'>
                    <div className='flex flex-col gap-4 p-4 rounded-lg min-w-48 bg-stone-100'>
                        <p>Default</p>
                        <p>Recent</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default FeaturedJob
