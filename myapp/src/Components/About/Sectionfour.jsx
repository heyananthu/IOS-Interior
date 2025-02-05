import React from 'react'
import Img1 from '../../assets/div.icon.svg'
import Img2 from '../../assets/div.icon-1.svg'
import Img3 from '../../assets/div.icon-2.svg'
function Sectionfour() {
    return (
        <div className='grid grid-cols-4 mt-[10rem] mb-4'>
            <div className='ml-16 space-y-5'>
                <h2 className='text-amber-700'>COMPANY FACTS</h2>
                <h1 className='font-semibold text-4xl'>We are proud of our design team</h1>
                <p>Just sit back and relax while we take care of your business needs for you.</p>
            </div>
            <div className='ml-[10rem] space-y-4'>
                <img src={Img1} alt="" className='ml-10' />
                <p className='font-semibold text-4xl ml-6'>1000+</p>
                <p>Completed Projects</p>
            </div>
            <div className='ml-[7rem]  space-y-4'>
                <img src={Img2} className='ml-6'/>
                <p className='font-semibold text-4xl ml-6'>50K+</p>
                <p>Happy Customers</p>
            </div>
            <div className='ml-[5rem]  space-y-4'>
                <img src={Img3} className='ml-3'/>
                <p className='font-semibold text-4xl ml-4'>20+</p>
                <p>Awards Won</p>
            </div>


        </div>
    )
}

export default Sectionfour
