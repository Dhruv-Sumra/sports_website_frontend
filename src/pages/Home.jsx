import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

const Home = () => {
  return (
    <div name="/" className='px-5 sm:px-10 md:px-15 lg:px-20 xl:25 bg-gradient-to-r from-black to bg-gray-400 h-screen  text-white'>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default Home