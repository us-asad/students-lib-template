import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-[url(/f1.png)] bg-cover text-white'>
      <header className='container mx-auto px-20 flex justify-between items-center pt-20 pb-10 text-white'>
        <h1 className='text-[40px] '>Logo</h1>
        <input
          type="text"
          placeholder='Search here...'
          className='px-4 py-2.5 rounded-md w-[600px] text-black'
        />
        <div className='bg-blue-600 px-4 py-2.5 flex items-center space-x-5'>
          <span>Sign up</span>
          <div className='h-[30px] bg-white w-[1px]' />
          <span>Log in</span>
        </div>
      </header>
      <div className="flex justify-center gap-16 text-[25px]">
        <Link href="/">Home</Link>
        <Link href="/students">Students Project</Link>
        <Link href="/books">Contact Us</Link>
        <Link href="/students">News</Link>
      </div>
      <h1 className='text-center text-[50px] mt-10 pb-56'>You will achieve your goal with us</h1>
    </div>
  )
}
