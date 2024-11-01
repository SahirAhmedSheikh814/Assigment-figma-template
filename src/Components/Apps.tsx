import React from 'react';
import Image from 'next/image';

const Apps = () => {
  return (
    <div className="relative bg-[#043873] h-[750.8px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
        style={{
          backgroundImage: "url('/images/Element.png')",
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Content Section */}
      <div className="relative w-full flex z-10"> {/* z-10 to make sure content is on top */}
        <div className="ml-12 mt-20">
          <Image src="/images/Apps.png" alt="apps" width={582} height={470.8} />
        </div>

        <div className="w-1/2 mt-20">
          <h1 className="font-[Inter] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] w-[694px] h-[261px] text-[#ffffff] ml-20">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="w-[694px] font-[Inter] font-normal text-[18px] leading-[30px] tracking-[-0.02em] mt-6 text-[#ffffff] ml-20">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className="w-[186px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ml-20 mt-14">
            Read more<span className="ml-2"> →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
