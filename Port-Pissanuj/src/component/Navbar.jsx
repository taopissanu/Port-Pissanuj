import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-900 p-4'>
        <div className='flex justify-between items-center'>
            <div href='#' className='text-white text-2xl font-bold'>HelloWorld;</div>
            <ul className='flex flex-row space-x-3 font-bold'>
                <li><a href='#' className='text-white'>Home</a></li>
                <li><a href='#' className='text-white'>About</a></li>
                <li><a href='#' className='text-white'>Contact</a></li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar