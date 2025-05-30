import Illustration from '../components/Illustration'
import Button from '../components/Button'
import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Animation from '../components/Animation'

function page() {
  return (
    <div className="">
      {/* title */}
      <div className='flex items-center font-mono justify-center mt-4 md:mt-8'>
        <h1 className='text-2xl font-bold'>Konva</h1>
      </div>
      {/* description */}
      <div className='flex-col flex items-center justify-center mt-6 md:mt-8'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
          <span className="block">Some people you</span>
          <span className="block">meet should never</span>
          <span className="block">be forgotten</span>
        </h1>
        <p className='text-base md:text-lg mt-4 md:mt-6 text-center px-4'>
          Konva helps you stay in touch after the handshake.<br className="hidden md:block" />
          Share your contact in seconds. No printing. No stress.
        </p>
        <Button />
        <p className='text-base md:text-lg mt-4 md:mt-6 text-center'>
          Be among the first to try Konva before it launches.
        </p>
      </div>
      {/* animation */}
      <Animation/>
      {/* illustration */}
      <div className="mt-8 md:mt-12">
        <Illustration />
      </div>
      {/* sub headline */}
      <div className='mt-12 flex-col space-y-6 mx-4  items-center justify-center flex '>
        <p className='text-[#1A1A1A99]  text-xl md:text-2xl  '>You don’t need to reprint anything <br /> when your details change.</p>
        <p className='text-[#1A1A1A99]  text-xl  md:text-2xl '>People don’t need to download anything <br />to see your info.</p>
        <p className='text-[#1A1A1A99]  text-xl  md:text-2xl'>You look organized and professional <br /> every time.</p>
      </div>
      {/* faq */}
      <Faq/>
      {/* closing tag */}
      <div className='flex-col flex items-center justify-center mt-8 md:mt-12'>
        <h1 className='text-xl md:text-2xl lg:text-4xl text-center font-bold'>
          <span className="block">Your next job. Your next client.</span>
          <span className="block">Your next big thing.</span>
          <span className="block">It could start with a tap.</span>
        </h1>
        <p className='text-base font-semibold md:text-lg mt-4 md:mt-6 text-center px-4'>
          If you meet people, Konva helps you keep them.
        </p>
        <Button />
        <p className='text-base font-semibold md:text-lg mt-4 md:mt-6 text-center'>
          We’ll let you in early.
        </p>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default page