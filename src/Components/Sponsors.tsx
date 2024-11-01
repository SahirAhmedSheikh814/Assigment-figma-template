import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='h-[538px] py-[140px] px-8 gap-[100px] items-center text-center '>

            <div>        
            <h1 className='font-[Inter] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] text-center'>Our sponsors</h1>
            <div className='ml-[630px]'><Image src="/images/Element1.png" alt="element1" width={290} height={42.47} /></div>
            </div>

        <div className='flex justify-between mt-32'>

            <Image src="/images/Apple.png" alt="Apple Logo" width={55.47} height={68} />
<div className='gap-1'>
            <Image src="/images/microsoft 1.png" alt="Microsoft logo" width={287} height={62} />
            </div>
<div className='gap-1'>
            <Image src="/images/Slack.png" alt="Slack logo" width={280} height={71} />
            </div>
<div className='gap-1'>
            <Image src="/images/Google.png" alt="Google logo" width={211} height={69.81} />
            </div>
        </div>
      
    </div>
  )
}

export default Sponsors
