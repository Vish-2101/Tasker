import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex text-white bg-sky-700 py-2 justify-between'>
        <h1 className='font-bold text-2xl mx-3'>Tasker</h1>
        <ul className='flex gap-5 py-1 mx-5'>
            <li className='cursor-pointer font-semibold hover:font-bold'>Home</li>
            <li className='cursor-pointer font-semibold hover:font-bold'>Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar
