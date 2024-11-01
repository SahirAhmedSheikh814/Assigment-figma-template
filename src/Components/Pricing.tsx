import Image from 'next/image';
import React from 'react';

const Pricing = () => {
  return (
    <div className='bg-white h-[1272px] w-full flex flex-col items-center'>
      <h1 className='w-[1376px] h-[87px] font-bold text-[72px] font-[Inter] leading-[87.14px] tracking-[-0.02em] text-center'>
        Choose Your Plan
      </h1>

      <div className='flex justify-center ml-72'>
        <Image src="/images/Element1.png" alt="element" width={310.61} height={36.75} />
      </div>

      <div className='w-[979px] h-[60px] flex items-center justify-center mt-4'>
        <p className='font-[Inter] font-normal text-[22px] leading-[30px] tracking-[-0.02em] text-center'>
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className='w-[1376px] h-[761px] gap-8 pt-36 pl-1 flex'>
        {/* Plan Card */}
        <div className='border rounded-[10px] border-[#FFE492] mt-16 w-[437.33px] h-[654px] pt-10 pb-10 pr-11 pl-11'>
          <div className='w-[349.33px] h-[153px] '>
            <p className='w-[349.33px] h-[36px] font-[Inter] text-[24px] font-semibold leading-9 text-[#212529]'>
              Free
            </p>
            <h4 className='w-[349.33px] h-[44px] font-[Inter] font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#212529] pt-5'>
              $0
            </h4>
            <p className='w-[349.33px] h-[23px] font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[#212529] pt-10'>
              Capture ideas and find them quickly
            </p>
          </div>
          
          <div className='h-[320px] w-[349.33px] flex flex-col gap-7 mt-8'>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <button className="w-[166px] h-[51px] text-[#212529] text-[16px] font-medium leading-[19px] rounded-[5px] border border-[#FFE492] font-[Inter] py-4 px-10 tracking-[-0.02em]">Get Started</button>
        </div>
        {/* plan card 2 */}
        <div className='w-[437.33px] h-[761px] border rounded-[10px] py-20 px-11 bg-[#043873]'>
          <div className='w-[349.33px] h-[153px] gap-[25px]'>
            <p className='font-[Inter] font-semibold text-[24px] leading-9 text-[#ffffff] h-[36px] w-[349.33px]'>Personal</p>
            <h4 className='font-[Inter] font-bold text-[36px] leading-[43.57px] tracking-[-0.02em] text-[#FFE492] h-[44px] w-[349.33px] pt-5'>$11.99</h4>
            <p className='font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[#ffffff] h-[23px] w-[349.33px] pt-10'>Keep home and family on track</p>
          </div>
          <div className='h-[320px] w-[349.33px] flex flex-col gap-7 mt-8'>
          <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#FFE492] flex items-center justify-center">
                <span className="text-[#FFE492] text-xs">&#10003;</span>
              </div>
              <p className="text-[#ffffff] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Add due dates, reminders, and notifications to your tasks</p>
            </div>
            </div>
            <div className='pt-4'>
            <button className="w-[166px] h-[51px] text-[#ffffff] text-[16px] font-medium leading-[19px] rounded-[5px] bg-[#4f9cf9] font-[Inter] py-4 px-10 tracking-[-0.02em]">Get Started</button>
            </div>
        </div>

        <div className='border rounded-[10px] border-[#FFE492] mt-16 w-[437.33px] h-[654px] pt-10 pb-10 pr-11 pl-11'>
          <div className='w-[349.33px] h-[153px] '>
            <p className='w-[349.33px] h-[36px] font-[Inter] text-[24px] font-semibold leading-9 text-[#212529]'>
              Organization
            </p>
            <h4 className='w-[349.33px] h-[44px] font-[Inter] font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-[#212529] pt-5'>
              $49.99
            </h4>
            <p className='w-[349.33px] h-[23px] font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-[#212529] pt-10'>
              Capture ideas and find them quickly
            </p>
          </div>
          
          <div className='h-[320px] w-[349.33px] flex flex-col gap-7 mt-8'>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-[#212529] flex items-center justify-center">
                <span className="text-[#212529] text-xs">&#10003;</span>
              </div>
              <p className="text-[#212529] font-[Inter] font-normal text-[16px] leading-[20px] tracking-[-0.02em]">Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <button className="w-[166px] h-[51px] text-[#212529] text-[16px] font-medium leading-[19px] rounded-[5px] border border-[#FFE492] font-[Inter] py-4 px-10 tracking-[-0.02em]">Get Started</button>
        </div>
      </div> 

    </div>
  );
};

export default Pricing;
