import React from 'react'
import Img1 from '../../assets/Aboutsection2.svg'
import Img2 from '../../assets/Aboutsectiontwo2.svg'
import Img3 from '../../assets/Aboutsectionthree3.svg'
function SectionTwo() {
    return (
        <div>
            <div className='text-center mt-12'>
                <h1 className='text-slate-700'>WHAT WE DO?</h1>
                <h1 className='font-semibold mt-2 text-4xl'>The Service We offer is specifically<br />designed to meet your needs</h1>
            </div>
            <div className='flex'>
                <div className='text-center w-[23rem] ml-16 space-y-3'>
                    <img src={Img1} className=' mt-16 h-[12rem] w-[25rem]' />
                    <h1 className='text-2xl font-semibold'>Eidea of</h1>
                    <p className='w-[21rem]'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <p className='cursor-pointer font-semibold text-slate-500'>Learn more <span className='text-sm'>→</span></p>
                </div>
                <div className='text-center w-[23rem] ml-8 space-y-3'>
                    <img src={Img2} className=' mt-16 h-[12rem] w-[25rem]' />
                    <h1 className='text-2xl font-semibold'>Felis eget</h1>
                    <p className='-[20rem] ml-8'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <p className='cursor-pointer font-semibold text-slate-500'>Learn more <span className='text-sm'>→</span></p>

                </div>
                <div className='text-center w-[23rem] ml-8 space-y-3'>
                    <img src={Img3} className=' mt-16 h-[12rem] w-[25rem]' />
                    <h1 className='text-2xl font-semibold'>In egestas</h1>
                    <p className='w-[20rem] ml-9'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <p className='cursor-pointer font-semibold text-slate-500'>Learn more <span className='text-sm'>→</span></p>

                </div>
            </div>

        </div>
    )
}

export default SectionTwo
