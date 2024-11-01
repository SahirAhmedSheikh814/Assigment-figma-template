import React from 'react'
import Image from 'next/image'

const Customize = () => {
  return (
    <div className='bg-white h-screen '>
      
      <div className="flex w-[100%] gap-[60px] mt-24">

      <div className="w-[686px] h-[479px] gap-1 bg-[#C4DEFD] flex flex-col mt-12 ml-24"></div>

        <div className="w-1/2 h-[361px] mt-24 ">
        <h1 className="w-[646px] h-[174px] font-[Inter] text-[82px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529]  ">Customise it
        to your needs</h1>
        <div className=''>
            <Image src="/images/Element1.png" alt="element" width={360.61} height={36.75}  />
        </div>
        <p className="font-normal font-[Inter] text-[18px] leading-[30px] w-[646px] h-[90px] tracking-[-0.02em] text-[#212529] mt-7">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
        <button className="w-[164px] h-[59px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] mt-8">Let's Go<span className='ml-2'> →</span> </button>
        </div>
      </div>

    </div>
  )
}

export default Customize
