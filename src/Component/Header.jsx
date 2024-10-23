import React from 'react'

function Header() {
  return (
    <div  className="flex flex-wrap px-6 bg-purple-400 rounded-lg md:flex-row md:px-10 lg:px-20 bg-gradient-to-r from-purple-500 to-purple-900">

      <div className='flex flex-col items-center justify-center gap-4 py-10 m-auto md:w-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-tight'>
            Give your Career a Jumpstart
        </p>
        <div className='flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row '>
            <p>
                Job seekers with the right opportunities and helps companies find the best talent efficiently. 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Header
