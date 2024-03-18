import React from 'react'
import Image from 'next/image'
import ss from '@/components/Home/ss.png'
export default function Content() {
    return (
        <div className='border-spacing-4 bg-midnight'>
            <div className='p-10 text-ghost text-6xl justify-center items-center leading-normal cursor-default'>
                Help sherlock and john collaborate on ideas and designs in real time

                <div className='mt-8 p-7 bg-seafoam  md:block text-3xl text-midnight w-60 rounded-2xl hover:bg-ghost'> Get Started</div>
            </div>
            <div className='m-10 border-8 rounded-2xl border-midnight hover:border-seafoam'>
                <Image src={ss} alt="demo ss" width={1915} height={200} />
            </div>
        </div>
    )
}