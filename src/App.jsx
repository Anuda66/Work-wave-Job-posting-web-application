import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AddJobPosts from './Pages/AddJobPosts'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import Jobs from  './Pages/Jobs'
import CandudateProfile from  './Pages/CandudateProfile'
import CompanyProfle from './Pages/companyProfle'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className='mx-4 sm:mx-[10%]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/addjobpost" element={<AddJobPosts/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/singup" element={<SingUp/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/cdprofile" element={<CandudateProfile/>} />
          <Route path="/cprofile" element={<CompanyProfle/>} />
        </Routes>
      </div>
    <Footer/>
    </>
  )
}

export default App
