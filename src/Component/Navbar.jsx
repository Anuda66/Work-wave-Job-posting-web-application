import React, { useState } from 'react'
import logo from  '../assets/logo.png'
import profImage from '../assets/profImage.png'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
   
function Navbar() {
  const navigate = useNavigate();// navigate  to a different route
  
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken ] = useState(true);

  return (  
    <div className='flex items-center justify-between gap-0 py-1 mb-5 text-sm text-white bg-purple-600 drop-shadow-2xl group-relative'>
      
      <img src={logo} alt='logo' className='w-24 ml-20 cursor-pointer'/>
      <ul className='items-start hidden gap-10 font-medium md:flex'>
        
        <NavLink to={'/'}>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
        </NavLink>
        
        <NavLink to={'/about'}>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
        </NavLink>
        
        <NavLink to={'/jobs'}>
          <li className='py-1'>JOBS</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
        </NavLink>
        
        <NavLink to={'/contact'}>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden'/>
        </NavLink>
        
      </ul>
      <div className='flex items-center gap-2 mr-20'>
        
        {
          token ?  // if loging show
          
          <div className='flex items-center gap-10'>
            <div className='relative cursor-pointer'>
              <FaBell className='text-xl'/>
              <div>
                <div>
                  {/*notification containt */}
                </div>
              </div>
            </div>
            <div className='relative flex items-center cursor-pointer group'>
              <img src={profImage} alt='profile Image' className='w-8 rounded-full'/>
              <MdOutlineArrowDropDown  className='text-xl text-white'/>
              
              <div className='absolute top-0 right-0 z-40 hidden pt-16 font-normal text-gray-500 group-hover:block'>
                <div className='flex flex-col gap-4 p-4 rounded-lg min-w-48 bg-stone-100'>
                  <p onClick={()=>navigate('cdprofile')} className='cursor-pointer hover:text-black'>Profile</p><hr />
                  <p onClick={()=>setToken(false)} className='cursor-pointer hover:text-black'>Logout</p> <hr />               
                </div>
              </div>
            </div>           
          </div>
          :  // else show loging button
          
          <div className='flex items-center gap-2 '>
            <button onClick={()=>navigate('/login')} className='hidden px-5 py-2 text-purple-600 bg-white rounded-full shadow-lg md:block'>Login</button>

            <button onClick={()=>navigate('/singup')} className='hidden px-5 py-2 text-purple-600 bg-white rounded-full shadow-lg md:block'>SingUp</button>
          </div>  
        } 
  
      </div>
    </div>
  )
}

export default Navbar
