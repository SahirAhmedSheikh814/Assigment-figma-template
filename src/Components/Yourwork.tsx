import React from 'react';
import Image from 'next/image';



const Yourwork = () => {
  return (
    <div className="bg-[#043873] w-full h-[574px] relative">
      <div
        className="absolute inset-0 bg-cover opacity-[35%] w-[245px] "
        style={{
          backgroundImage: "url('/images/BACKGROUND.png')",
          backgroundRepeat: 'no-repeat',
        }}
      />

     <div className='w-[1376px] h-[294px] flex flex-col items-center py-36 text-center'>
        <h1 className='font-[Inter] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] w-[1064px]  text-[#ffffff] text-center'>Your work, everywhere you are</h1>
        <div className='flex justify-center ml-[700px] '>
        <Image src="/images/Element2.png" alt="element" width={310.61} height={23.96} />
        </div>
        <p className='font-[Inter] font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-center w-[990px] mt-8 text-[#ffffff] pl-[19px]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>

        <button className=" rounded-lg bg-[#4f9Cf9] py-5 px-10 text-[#FFFFFF] mt-14">Try Taskey<span className='ml-2'> →</span> </button>
     </div>

     
    </div>
  );
};

export default Yourwork;





 