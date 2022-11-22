import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#264653] text-white'>
      <div className="container mx-auto px-20 pt-10 pb-10">
        <h1 className='text-[50px] mb-10'>Logo</h1>
        <div className="flex justify-between text-[20px] items-center">
          <p>Copyright © 2022 THE - All rights reserved.</p>
          <div className="flex flex-col justify-end text-end">
            <p>+998 99 201 37 47</p>
            <p>Terms of use Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
