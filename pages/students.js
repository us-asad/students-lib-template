import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../components/Footer';
import { BiUserCircle } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-20 mb-20 mt-10">
        <h2 className='text-center text-[35px] mb-10'>Students Project</h2>
        <div className="flex flex-wrap justify-between gap-y-5">
          {[...new Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl bg-[#D9D9D9] px-10 py-5 w-[32%] justify-center flex flex-col items-center">
              <BiUserCircle className='text-[60px] text-[#70412D]' />
              <p className='text-center text-[20px]'>Maxamatov Jamshidjon</p>
              <p className='text-[16px] text-center mt-5'>I am a Student of Samarkand state of Foreign language Institute
                There are some Articles in my profile</p>
            </div>
          ))}
        </div>
        <button className='bg-[#FF6B00] rounded-xl w-max mx-auto block text-white px-8 py-3 mt-10'>Discover More</button>
      </div>
      <Footer />
    </div>
  )
}
