import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page3_2 from './components/Page3-2'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import bgimage from './assets/bgimage.png';

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
        className="flex flex-col items-center justify-center"
      >
        <Navbar />
        <div className='flex flex-col items-center justify-center gap-3 w-[50%] p-5 text-center'>
          <div className='text-6xl text-white font-bold'>Seamless Payments, Limitless Possiblities</div>
          <div className='text-[15px] font-light text-white'>Designed for the next generation, Briskpay makes managing your money effortless.</div>
          <button
            className="text-white font-light px-4 py-2 bg-black rounded-4xl my-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl hover:-translate-y-1"
          >
            Get the app
          </button>
        </div>
      </div>
      <Page2 />
      <Page3_2 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  )
}

export default App
