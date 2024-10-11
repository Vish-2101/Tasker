import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex text-white bg-purple-600 py-2'>
        <h1 className='font-bold text-2xl mx-3'>Tasker</h1>
        <ul className='flex gap-5 py-1 mx-5'>
            <li className='rounded-lg p-1 cursor-pointer hover:bg-purple-950 font-semibold'>Home</li>
            <li className='rounded-lg p-1 cursor-pointer hover:bg-purple-950 font-semibold'>Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar
