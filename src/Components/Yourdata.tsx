import React from 'react';
import Image from 'next/image';

const Yourdata = () => {
    return (
      <div className="h-[660.13px] flex items-center">
        <div className="flex w-full gap-16 px-28">
          {/* Text Section */}
          <div className="w-1/2">
            <h1 className="font-[Inter] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529]">
              100% your data
            </h1>
            <div className="ml-48">
              <Image 
                src="/images/Element1.png" 
                alt="element" 
                width={330.61} 
                height={36.75} 
              />
            </div>
            <p className="font-[Inter] text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529] mt-7">
              The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.
            </p>
            <button className="w-[176px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] mt-12">
              Read More <span className="ml-2">→</span>
            </button>
          </div>
          
          {/* Image Section */}
          <div className="w-1/2 flex justify-center items-center">
            <Image 
              src="/images/Element3.png" 
              alt="element" 
              width={681} 
              height={381.13} 
            />
          </div>
        </div>
      </div>
    );
};

export default Yourdata;
