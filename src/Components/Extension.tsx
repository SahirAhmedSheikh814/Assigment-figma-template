import React from 'react'
import Image from 'next/image'

const Extension = () => {
  return (
    <div className='bg-[#043873] h-screen flex items-center'>

<div className="flex w-[100%] gap-[60px]">
        <div className="w-1/2 h-[361px] mt-12 ">
        <h1 className="w-[592px] h-[87px] font-[Inter] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#ffffff] ml-28 ">Use as Extension</h1>
        <div className='ml-28'>
            <Image src="/images/Element1.png" alt="element" width={330.61} height={36.75}  />
        </div>
        <p className="font-normal font-[Inter] text-[20px] leading-[30px] w-[600px] h-[60px] tracking-[-0.02em] text-[#ffffff] ml-28 mt-7">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
        <button className="w-[176px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ml-28 mt-12">Let's Go<span className='ml-2'> →</span> </button>
        </div>
        <div className="w-[686px] h-[479px] gap-1 bg-[#C4DEFD] flex flex-col mr-28"></div>
      </div>

        
    </div>
  )
}

export default Extension
