import React from 'react'
import MainLogo from '../../assets/MainLogo.png'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div >
            <div className='flex'>
                <div className='flex gap-2  pb-10'>
                    <img src={MainLogo} className='ml-12 mt-8' />
                    <h1 className='font-bold text-3xl font-sans mt-8'>IOS INTERIORS</h1>
                </div>
                <div>
                    <ul className='flex gap-11 ml-[17rem] mt-10 text-bold'>
                        <Link to='/'> <li className='cursor-pointer'>Menu</li></Link>
                        <Link to='/about' ><li className='cursor-pointer'>About</li></Link>
                        <li className='cursor-pointer'>Project</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='mt-6 ml-[13rem]'>
                    <button className='bg-amber-100 w-[8rem] h-[3.5rem] rounded-lg cursor-pointer'>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Nav

