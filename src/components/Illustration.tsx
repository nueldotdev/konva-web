'use client'
import Image from 'next/image'
import React from 'react'

function Illustration() {
  return (
    <div className='mt-12'>
        <h1 className='text-lg ml-4 md:ml-8 font-bold'>Konva is a simple tool that helps you share <br className="hidden md:block"/> your contact and work instantly.</h1>
        <div className='grid mx-4 md:mx-8 grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6'>
            {/* Card 1 - Big */}
            <div className='md:col-span-2 bg-[#F2F2F2] p-4 flex flex-col rounded-lg overflow-hidden'>
                <Image 
                    src="/ill4.png"
                    alt="ill4"
                    width={280}
                    height={280}
                    className='rounded-lg'
                />
                <h2 className='text-base md:text-lg font-semibold mt-4 text-center md:text-left md:ml-130'>
                    No more lost contacts,<br className="hidden md:block"/> just scan and connect
                </h2>            
            </div>
            
            {/* Card 2 - Small */}
            <div className='col-span-1 bg-[#F2F2F2] p-2 flex flex-col rounded-lg'>
                <h2 className='text-lg font-semibold mb-4 ml-4'>Share your details <br /> with a single tap</h2>
                <Image 
                    src="/ill1.png"
                    alt="ill1"
                    width={400}
                    height={400}
                    className='rounded-lg'
                />           
            </div>

            {/* Card 3 - Small */}
            <div className='col-span-1 bg-[#F2F2F2] p-4 flex flex-col rounded-lg'>
                <Image 
                    src="/ill2.png"
                    alt="ill2"
                    width={400}
                    height={200}
                    className='rounded-lg'
                />
                <h2 className='text-lg font-semibold mt-4 ml-4'>Save contacts without <br /> lifting a finger</h2>            
            </div>

            {/* Card 4 - Big */}
            <div className='md:col-span-2 bg-[#F2F2F2] p-4 flex flex-col md:flex-row justify-between items-center rounded-lg'>
                <Image 
                    src="/ill3.png"
                    alt="ill3"
                    width={280}
                    height={280}
                    className='rounded-lg'
                />
                <h2 className='text-base md:text-lg font-semibold mt-4 md:mt-0 text-center md:text-left md:ml-4'>
                    Keep in touch even <br className="hidden md:block"/> after the handshake
                </h2>            
            </div>
        </div>
    </div>
  )
}

export default Illustration