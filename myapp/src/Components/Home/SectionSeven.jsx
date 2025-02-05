import React from 'react'
import Img1 from '../../assets/SectionSeven1.png'
import Img2 from '../../assets/SectionSeven2.png'
import Img3 from '../../assets/SectionSeven3.png'
import ImgCenter from '../../assets/SectionSevenCenter.png'
import Img4 from '../../assets/SectionSeven4.png'
import Img5 from '../../assets/SectionSeven5.png'
import Img6 from '../../assets/SectionSeven6.png'
import Img7 from '../../assets/SectionSeven7.png'
import Img8 from '../../assets/SectionSeven8.png'
function SectionSeven() {
    return (
        <div>
            <div>
                <h2 className='font-semibold text-center text-xl'>Gallery</h2>
                <h1 className='font-black text-5xl text-center mt-2'>#FuniroFurniture</h1>
            </div>
            <div className='mt-4 flex'>
                <img src={Img1} className='h-[21rem]' />
                <img src={Img2} className='h-[17rem] w-[25rem] mt-[4rem] ml-7' />
                <img src={ImgCenter} className='h-[22rem] w-[17rem] mt-[8.5rem] ml-8' />
                <img src={Img3} className='h-[21rem] w-[17rem] mt-[5rem] ml-6' />
                <img src={Img4} className='h-[26rem] w-[15rem] ml-6' />
            </div>
            <div className='flex'>
                <img src={Img5} className='h-[19rem] w-[12rem] absolute top-[308rem]' />
                <img src={Img6} className='h-[15rem] w-[20rem] absolute top-[308rem] left-[13rem]' />
                <img src={Img7} className='h-[15rem] w-[11rem] absolute top-[313rem] left-[52.8rem]' />
                <img src={Img8} className='h-[10rem] w-[15rem] absolute top-[313rem] left-[65rem]' />
            </div>
        </div>
    )
}

export default SectionSeven
