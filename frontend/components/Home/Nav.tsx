import React from 'react'

export default function Nav() {
    return (
        <nav className='w-full h-14 bg-seafoam flex justify-between px-4 md:px-4 items-center'>
            <div>Ennovaaa logo here</div>
            <ul className='md:flex hidden font-semibold text-smoky'>
                <li className='mx-[10px] cursor-pointer'>new canvas </li>
                <li className='mx-[10px] cursor-pointer'>all canvas </li>
                <li className='mx-[10px] cursor-pointer'>about</li>
            </ul>
            <div className='hidden md:block px-2 py-2 bg-seafoam rounded font-bold cursor-pointer text-smoky hover:bg-smoky hover:text-ghost'>login / sign up</div>
            <div className='md:hidden'><a className='text-2xl href="#'>&#8801;</a></div>
        </nav>
    )
}
