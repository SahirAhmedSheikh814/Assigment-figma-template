import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className='w-full h-[994.46px] py-[140px] flex flex-col items-center bg-white relative'>
      {/* Main Heading with Background Image */}
      <div className='relative flex justify-center items-center mb-12'>
        <div
          className="absolute bg-cover bg-center opacity-80 w-[193.58px] h-[47.67px] ml-[440px] mt-6 z-0"
          style={{
            backgroundImage: "url('/images/Element4.png')",
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        <h1 className='font-[Inter] font-bold text-[70px] leading-[84px] text-center text-[#212529] z-10 relative'>
          What Our Clients Says
        </h1>
      </div>

      {/* Testimonial Cards Container */}
      <div className='flex gap-8'>
        {/* Testimonial Card 1 */}
        <div className='w-[437.33px] h-[498.46px] border rounded-[10px] py-[60px] px-[32px] items-center bg-[#FFFFFF] shadow-2xl flex flex-col'>
          <div className='border-b-[1px] w-[389.33px] h-[223.46px] border-[#212529] '>
            {/* Quote Icon and Text */}
            <div className='flex flex-col items-start'>
              <div className='flex-shrink-0 mb-4'>
                <Image src="/images/Quote.png" alt="Quote Image" width={86} height={61.46} />
              </div>
              <p className='font-[Inter] w-[300px] font-medium mt-5 text-[18px] leading-[28px] tracking-[-0.02em] text-[#212529]'>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
          </div>
          {/* Client Info */}
          <div className='flex items-center mt-20 w-[383px] h-[95px]'>
            <div className='ml-8'>
              <Image src="/images/Avater.png" alt="Client Image" width={65} height={65} className='rounded-full' />
            </div>
            <div>
              <h3 className='font-[Inter] ml-6 font-bold leading-9 text-[24px] text-[#212529]'>Oberon Shaw, MCH</h3>
              <p className='font-[Inter] ml-6 text-[16px] leading-5 tracking-[-0.02em] w-[246px] h-[40px] text-[#212529]'>Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
        
        {/* Add similar card structure for other testimonial cards */}
        <div className='w-[437.33px] h-[498.46px] border rounded-[10px] py-[60px] px-[32px] items-center shadow-2xl bg-[#4F9CF9] flex flex-col'>
          {/* Content here for second card */}
          <div className='border-b-[1px] w-[389.33px] h-[223.46px] border-[#FFFFFF] '>
            {/* Quote Icon and Text */}
            <div className='flex flex-col items-start'>
              <div className='flex-shrink-0 mb-4'>
                <Image src="/images/Group2.png" alt="Quote Image" width={86} height={61.46} />
              </div>
              <p className='font-[Inter] w-[300px] font-medium mt-5 text-[18px] leading-[28px] tracking-[-0.02em] text-[#FFFFFF]'>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
          </div>
          {/* Client Info */}
          <div className='flex items-center mt-20 w-[383px] h-[95px]'>
            <div className='ml-8'>
              <Image src="/images/Avater1.png" alt="Client Image" width={65} height={65} className='rounded-full' />
            </div>
            <div>
              <h3 className='font-[Inter] ml-6 font-bold leading-9 text-[24px] text-[#043873]'>Oberon Shaw, MCH</h3>
              <p className='font-[Inter] ml-6 text-[16px] leading-5 tracking-[-0.02em] w-[246px] h-[40px] text-[#FFFFFF]'>Head of Talent Acquisition, North America</p>
            </div>
            </div>
        </div>

        <div className='w-[437.33px] h-[498.46px] border rounded-[10px] py-[60px] px-[32px] items-center shadow-2xl bg-[#4F9CF9] flex flex-col'>
          {/* Content here for third card */}
          <div className='border-b-[1px] w-[389.33px] h-[223.46px] border-[#FFFFFF] '>
            {/* Quote Icon and Text */}
            <div className='flex flex-col items-start'>
              <div className='flex-shrink-0 mb-4'>
                <Image src="/images/Group2.png" alt="Quote Image" width={86} height={61.46} />
              </div>
              <p className='font-[Inter] w-[300px] font-medium mt-5 text-[18px] leading-[28px] tracking-[-0.02em] text-[#FFFFFF]'>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
          </div>
          {/* Client Info */}
          <div className='flex items-center mt-20 w-[383px] h-[95px]'>
            <div className='ml-8'>
              <Image src="/images/Avater2.png" alt="Client Image" width={65} height={65} className='rounded-full' />
            </div>
            <div>
              <h3 className='font-[Inter] ml-6 font-bold leading-9 text-[24px] text-[#043873]'>Oberon Shaw, MCH</h3>
              <p className='font-[Inter] ml-6 text-[16px] leading-5 tracking-[-0.02em] w-[246px] h-[40px] text-[#FFFFFF]'>Head of Talent Acquisition, North America</p>
            </div>
            </div>
        </div>
      </div>
      <div className="flex flex-row items-start gap-3 w-15 mt-14 h-3">
      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
    </div>
    </div>
  );
}

export default Testimonial;
