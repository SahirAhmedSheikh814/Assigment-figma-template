import React from 'react';
import Image from 'next/image';
const Freetrial = () => {
  return (
    <div className="h-[709px] bg-[#043873] w-full flex flex-col items-center justify-center ">
      <div className="text-center w-[608px]">
        <h1 className="font-[Inter] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#ffffff]">
          Try Whitepace today
        </h1>
        <p className="font-[Inter] font-normal text-[24px] leading-[32px] tracking-[-0.02em] text-[#ffffff] mt-6">
          Get started for free.
        </p>
        <p className="font-[Inter] font-normal text-[24px] leading-[32px] tracking-[-0.02em] text-[#ffffff]">
          Add your whole team as your needs grow.
        </p>
        <button className=" rounded-lg bg-[#4f9Cf9] py-5 px-10 text-[#FFFFFF] mt-10">Try Taskey Free<span className='ml-2'> →</span> </button>

        <p className='font-[Inter] font-normal text-[24px] leading-[32px] tracking-[-0.02em] text-[#ffffff] mt-10'>On a big team? Contact sales</p>
<div className='flex ml-48 mt-9'>
    <div className='mt-5'>
        <Image src="/images/apple-black-logo 2.png" alt="apple2 logo" width={60} height={60} />
        </div>
        <div className='ml-7 mt-5 mr-7'>
        <Image src="/images/windows-logo 1.png" alt="Windows logo" width={60} height={60} />
        </div>
        <div className='mt-5'>
        <Image src="/images/android-logo 1.png" alt="android logo" width={60} height={60} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Freetrial;
