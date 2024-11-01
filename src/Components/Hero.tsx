

export default function Hero() {
  return (
    <div className="bg-[#043873] h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/images/Element.png')",
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="flex w-[100%] gap-[60px]">
        <div className="w-1/2 h-[361px] mt-6 ">
        <h1 className="w-[656px] h-[154px] font-[Inter] text-[64px] font-bold leading-[77px] tracking-[-0.02em] text-[#ffffff] ml-28 ">Get More Done With Whitepace</h1>
        <p className="font-normal font-[Inter] text-[20px] leading-[30px] w-[600px] h-[60px] tracking-[-0.02em] text-[#ffffff] ml-28 mt-7">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        <button className="w-[219px] h-[63px] bg-[#4F9CF9] text-[#ffffff] rounded-lg font-[Inter] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ml-28 mt-12">Try Whitepace free <span className='ml-2'> →</span> </button>
        </div>
        <div className="w-[680px] h-[456.39px] gap-1 bg-[#C4DEFD] flex flex-col mr-28"></div>
      </div>

    </div>
    
  )
}
