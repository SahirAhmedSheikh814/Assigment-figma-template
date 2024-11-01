import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full h-[474px] bg-[#043873] gap-[200px] pt-[140px] px-8 pb-8'>
      <div className='flex items-start gap-[100px] h-[182px]'>
      <div className='h-[169px] w-[240px]'>
        <Image src="/images/Logo.png" alt="logo" width={191} height={34} />
        <p className='font-[Inter] font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#F7F7EE] w-60 h-[120px] mt-4'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
      </div>
      <div className='w-[177px] h-[127px]'>
        <p className='font-[Inter] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF] w-[68px] h-[22px]'>Product</p>
        <p className='w-[70px] h-5 font-[Inter] font-normal text-[16px] text-[#FFE492] leading-[20px] tracking-[-0.02em] mt-3'>Overview</p>
        <p className='w-[50px] h-5 text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] font-[Inter] font-normal mt-3'>Pricing</p>
        <p className='w-[177px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] mt-3'>Customer stories</p>
      </div>
      <div className='w-[130px] h-[130px]'>
      <p className='font-[Inter] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF] w-[91px] h-[22px]'>Resources</p>
        <p className='w-[33px] h-5 font-[Inter] font-normal text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-0.02em] mt-3'>Blog</p>
        <p className='w-[128px] h-5 text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] font-[Inter] font-normal mt-3'>Guides & tutorials</p>
        <p className='w-[130px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] mt-3'>Help center</p>
      </div>
      <div className='w-[99px] h-[130px]'>
      <p className='font-[Inter] font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-[#FFFFFF] w-[83px] h-[22px]'>Company</p>
        <p className='w-[66px] h-5 font-[Inter] font-normal text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-0.02em] mt-3'>About us</p>
        <p className='w-[62px] h-5 text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] font-[Inter] font-normal mt-3'>Careers</p>
        <p className='w-[99px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] mt-3'>Media kit</p>
      </div>
      <div className='w-[259px] h-[182] gap-[23px]'>
        <h1 className='fonr-[Inter] font-bold text-[28px] leading-9 tracking-[-0.02em] text-[#FFFFFF]'>Try It Today</h1>
        <p className='font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] mt-3'>Get started for free. Add your whole team as your needs grow.</p>
       <div className='mt-5'> <button className="w-[186px] h-[60px] text-[#ffffff] text-[16px] font-medium leading-[19px] rounded-lg bg-[#4f9cf9] font-[Inter] py-5 px-10 tracking-[-0.02em]">Start today</button></div>
      </div>
      </div>
      <div className='w-[1336px] border absolute border-[#2E4E73] mt-14'></div>
      <div className='w-[1376px] h-5 flex  mt-24'>
        <div className='w-[104px] flex h-5'>
            <Image src="/images/Icon.png" alt="icon" width={19} height={19} />
            <p className='font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] mr-2 ml-2'>English</p>
            <span className="ml-1 w-[20px] h-[14px] text-[#FFFFFF]"> ˅</span>
        </div>
        <div className='font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] ml-12'>Terms & privacy</div>
        <div className='w-[60px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] ml-12'>Security</div>
        <div className='w-[47px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] ml-12'>Status</div>
        <div className='w-[169px] h-5 font-[Inter] font-normal text-[16px] leading-5 tracking-[-0.02em] text-[#FFFFFF] ml-12'>©2021 Whitepace LLC.</div>
        <div className='w-[105px] h-[16.68px] flex ml-[550px] gap-8'>
            <Image src="/images/_x30_1._Facebook.png" alt="facebook logo" width={9} height={16.68} />
            <Image src="/images/Twitter.png" alt="Twitter logo" width={17} height={13.81} />
            <Image src="/images/Linkedin.png" alt="Linkedin logo" width={15} height={15} />
        </div>
      </div>
    </div>
  )
}

export default Footer
