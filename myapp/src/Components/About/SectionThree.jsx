import React from 'react'
import Img from '../../assets/Aboutsection3.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoChevronUpSharp } from "react-icons/io5";
function SectionThree() {
    return (
        <div className='flex mb-12 mt-20'>
            <div>
                <img src={Img} className='w-[40rem] h-[28rem] rounded-xl mt-12 ml-[10rem]' />
            </div>
            <div className='ml-[5rem] mt-[5rem] space-y-2'>
                <h2 className='text-stone-400'>WHY CHOOSE US?</h2>
                <h1 className='text-4xl font-semibold '>We bring solutions to <br /> make life easier.</h1>
                <div className='inline-flex mt-9 text-stone-400 space-x-2 font-semibold'>
                    <IoChevronUpSharp className='mt-1' /><p className=''>Professional Design</p>
                </div>
                <p className='w-[22rem] ml-6 text-stone-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut onsectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='inline-flex mt-2  space-x-2 font-semibold'>
                    <MdKeyboardArrowDown className='mt-1' /><p className=''>Top-Notch Support</p>
                </div>
                <div className='flex mt-2 space-x-2 font-semibold '>
                    <MdKeyboardArrowDown className='mt-1' /><p className=''>Header and Slider Options</p>
                </div>
            </div>

        </div>
    )
}

export default SectionThree
