import React from 'react'
import FirstImg from '../../assets/SectionfiveOne.png'
import SecondImg from '../../assets/SectionfiveThree.svg'
import ThridImg from '../../assets/Sectionfivetwo.svg'
function SectionFive() {
    return (
        <div className='mt-[32rem] bg-slate-100 h-[58rem] p-4'>
            <div className='flex'>
                <div className='ml-[7rem]'>
                    <img src={FirstImg} className='mt-[7rem] ml-[10rem] w-[27rem]' />
                    <img src={SecondImg} className='absolute top-[180.5rem]' />
                    <img src={ThridImg} className='absolute left-[24rem] mt-[6rem]' />
                </div>
                <div className='ml-[6rem] mt-[6.5rem] w-[32rem]'>
                    <h1 className='text-4xl font-black'>What We Do!</h1>
                    <p className='mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                    <ul className='mt-6 ml-3 space-y-3 font-semibold'>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full "></span> World Wide Donation
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> Various Industrial Application
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> Providing Solutions For Construction, Management
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> Engineers design and build the structure
                        </li>
                    </ul>

                    <h1 className='text-4xl font-black mt-12'>What You Can Do in!</h1>
                    <ul className='mt-6 ml-3 space-y-3 font-semibold'>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full "></span> Certified & Awards winner 
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> Work with energetic team
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> Just Because You Work You'll Be Successful.
                        </li>
                        <li class="flex items-center">
                            <span class="w-3 h-3 me-3 border text-amber-400 rounded-full"></span> For all your construction needs!
                        </li>
                    </ul>
                    <button className='bg-orange-200 cursor-pointer w-[11rem] h-[3.6rem] mt-10 rounded-sm font-mono font-black text-slate-500'>MORE EXPLORE</button>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive
