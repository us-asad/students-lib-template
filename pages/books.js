import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import { BsArrowRight, BsBookHalf } from "react-icons/bs";
import Footer from '../components/Footer';
import { BiUserCircle } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-20 mb-20 mt-10">
        <h2 className='text-center text-[45px] mb-10'>Books</h2>
        <div className="flex flex-wrap justify-between gap-y-5">
          {[...new Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl bg-[#fff] px-10 gap-2 py-5 w-[32%] justify-center flex flex-col items-center">
              <BsBookHalf className='text-[60px] text-[#70412D]' />
              <p className='mt-3'>The cooolest book in the fsocity world</p> 
              <p className='-mt-2'>Author: <b>John Smith</b></p>
              <button className='rounded-lg px-8 py-2 bg-blue-500 text-white mt-5'>Download PDF</button>
            </div>
          ))}
        </div>
        <button className='bg-[#FF6B00] rounded-xl w-max mx-auto block text-white px-8 py-3 mt-10'>Discover More</button>
      </div>
      <Footer />
    </div>
  )
}
