import React from 'react';
import Image from 'next/image';

const Workpage = () => {
  return (
    <div className="bg-white h-[1370.76px] items-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover opacity-[20%] w-[569.54px] h-[440.35px]"
        style={{
          backgroundImage: "url('/images/Group.png')",
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="w-full h-1/2 flex">
        <div className="w-1/2 mt-28">
          <h1 className="font-[Inter] text-[84px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529] ml-20">
            Project Management
          </h1>
        <div className='ml-24'>
            <Image src="/images/Element1.png" alt="element" width={515.61} height={36.75}  />
        </div>
        <p className='font-[Inter] font-normal text-[20px] leading-[30px] tracking-[-0.02em] text-[#212529] ml-20'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        <button className="w-[219px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ml-20 mt-10">Get Started<span className='ml-2'> →</span> </button>
      </div>

      <div className='w-[710px] h-[458px] bg-[#C4DEFD] mr-7 mt-20'></div>
    </div>
    
    <div className="w-full h-1/2 flex ">
      <div className='ml-12'>
        <Image src="/images/Work Together Image.png" alt="work together image" width={583} height={542.76} />
      </div>

      <div className="w-1/2 mt-20">
          <h1 className="font-[Inter] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em]  text-[#212529] ml-20">
            Work Together
          </h1>
        <div className='ml-72'>
            <Image src="/images/Element1.png" alt="element" width={300.61} height={36.75}  />
        </div>
        <p className='w-[633px]  font-[Inter] font-normal text-[21px] leading-[30px] tracking-[-0.02em] mt-6 text-[#212529] ml-20'>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
</p>
        <button className="w-[186px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ml-20 mt-14">Try it Now<span className='ml-2'> →</span> </button>
      </div>

    </div>

    </div>
  );
};

export default Workpage;

