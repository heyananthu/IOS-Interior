import React from 'react'
import BedIcon from '../../assets/BedIcon.svg'
import LightIcon from '../../assets/LightIcon.svg'
import SofaIcon from '../../assets/SofaIcon.svg'
function SectionTwo() {
    return (
        <div>
            <h1 className='text-center mt-[5rem] text-4xl font-sans'>Here are few reasons why our <br /> customer choose ios</h1>
            <div className='flex gap-8 mt-12 mb-12'>
                <div className='w-[23rem] shadow-lg ml-[7rem] p-6 h-[8.5rem] rounded-lg flex'>
                    <div>
                        <img src={BedIcon} className='w-[8rem]' />
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Beds</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet,  adg elit, ut labore magna aliqua.</p>
                    </div>
                </div>
                <div className='w-[23rem] shadow-lg p-6 h-[8.5rem] rounded-lg  flex'>
                    <div>
                        <img src={SofaIcon} className='w-[8rem]' />
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Sofa</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet,  adg elit, ut labore magna aliqua.</p>
                    </div>
                </div>
                <div className='w-[23rem] shadow-lg p-6 h-[8.5rem] rounded-lg flex'>
                    <div>
                        <img src={LightIcon} className='w-[8rem]' />
                    </div>
                    <div className=''>
                        <h1 className='font-bold'>Lamb</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, adg elit, ut dolore magna aliqua.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionTwo
