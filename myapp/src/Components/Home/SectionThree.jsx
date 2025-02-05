import React from 'react'
import Dining from '../../assets/Dining.svg'
import Living from '../../assets/Living.svg'
import Bedroom from '../../assets/Bedroom.svg'
function SectionThree() {
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-black text-4xl'>Browse The Range</h1>
                <p className='text-xl mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='flex gap-4 mt-9 text-center'>
                <div>
                    <img src={Dining} className='ml-[4rem] size-[29rem]' />
                    <p className=' text-2xl font-medium mt-6 '>Dining</p>
                </div>
                <div>
                    <img src={Living} className='size-[29rem]' />
                    <p className=' text-2xl font-medium mt-6 '>Living</p>
                </div>
                <div>
                    <img src={Bedroom} className='size-[29rem]' />
                    <p className=' text-2xl font-medium mt-6 '>Bedroom</p>
                </div>

            </div>

        </div>
    )
}

export default SectionThree
