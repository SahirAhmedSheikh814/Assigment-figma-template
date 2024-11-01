import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-[92px] bg-[#043873] px-[40px]">
      {/* Left Section with Logo and Navigation */}
      <div className="flex items-center space-x-72">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Logo.png"
            alt="logo image"
            width={191}
            height={34}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-white font-[DM Sans] font-medium text-[18px] ">
          <div className="relative cursor-pointer">
            Products <span className="ml-1">˅</span>
          </div>
          <div className="relative cursor-pointer">
            Solutions <span className="ml-1">˅</span>
          </div>
          <div className="relative cursor-pointer">
            Resources <span className="ml-1">˅</span>
          </div>
          <div className="relative cursor-pointer">
            Pricing <span className="ml-1">˅</span>
          </div>
        </nav>
      </div>

      {/* Right Section with Buttons */}
      <div className="flex items-center space-x-4">
        {/* Login Button */}
        <button className="px-5 py-2 bg-yellow-400 text-[#043873] font-[Inter] font-medium text-[18px] rounded-lg">
          Login
        </button>
        
        {/* Try Whitespace Free Button */}
        <button className="px-6 py-3 bg-[#4F9CF9] text-white font-[Inter] font-medium text-[18px] rounded-lg">
          Try Whitespace Free
          <span className='ml-2'>→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
