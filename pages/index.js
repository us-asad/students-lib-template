import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-20 mb-20 mt-10">
        <h2 className='text-center text-[35px] mb-10'>You will achieve your goal with us</h2>
        <div className="flex gap-10 items-center mb-10">
          <div className="w-1/2 relative h-[400px]">
            <Image
              src="/f3.png"
              alt="F2"
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
          <p className='w-1/2 text-center text-[20px]'>
            The main goal of our project is to compile information that will help students studying at foreign language institutes in the preparation of their course work, diploma work, and dissertation, and therefore upload their hand-made articles and stories to our platform so that they can demonstrate their abilities together. This program encourages our students to work harder on themselves.
            In addition, it will be possible to find special books for the IELTS, CEFR, TOEFL, CELTA exams.
            On our platform, it will be possible to download a PDF version of every 1 book or article. That is, the electronic library of the Institute of Foreign Languages will be established.
            Our site is completely in English.
          </p>
        </div>
        <div className="flex gap-10 items-center">
          <div className='w-1/2'>
            <div className="rounded-xl bg-[#D9D9D9] border-2 border-black w-[70%] mx-auto py-5 px-3">
              <div className="flex gap-3 items-start">
                <Image
                  src="/f2.png"
                  alt="F2"
                  width={55}
                  height={55}
                  objectFit="contain"
                />
                <p className='text-[25px]'>News</p>
              </div>
              <p className='text-[#BB1313] text-[18px] mt-5'>Daily new and analysis for global higer ed analysis for global higer ed analysis for global higer ed analysis for global higer education</p>
              <button className='mx-auto block text-[30px] hover:translate-x-3 duration-150 text-blue-800'>
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 relative h-[400px]">
            <Image
              src="/f3.png"
              alt="F2"
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-[400px]">
            <Image
              src="/f3.png"
              alt="F2"
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
          <div className='w-1/2'>
            <div className="rounded-xl bg-[#D9D9D9] border-2 border-black w-[70%] mx-auto py-5 px-3">
              <div className="flex gap-3 items-start">
                <Image
                  src="/f2.png"
                  alt="F2"
                  width={55}
                  height={55}
                  objectFit="contain"
                />
                <p className='text-[25px]'>News</p>
              </div>
              <p className='text-[#BB1313] text-[18px] mt-5'>Daily new and analysis for global higer ed analysis for global higer ed analysis for global higer ed analysis for global higer education</p>
              <button className='mx-auto block text-[30px] hover:translate-x-3 duration-150 text-blue-800'>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div className='w-1/2'>
            <div className="rounded-xl bg-[#D9D9D9] border-2 border-black w-[70%] mx-auto py-5 px-3">
              <div className="flex gap-3 items-start">
                <Image
                  src="/f2.png"
                  alt="F2"
                  width={55}
                  height={55}
                  objectFit="contain"
                />
                <p className='text-[25px]'>News</p>
              </div>
              <p className='text-[#BB1313] text-[18px] mt-5'>Daily new and analysis for global higer ed analysis for global higer ed analysis for global higer ed analysis for global higer education</p>
              <button className='mx-auto block text-[30px] hover:translate-x-3 duration-150 text-blue-800'>
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 relative h-[400px]">
            <Image
              src="/f3.png"
              alt="F2"
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
