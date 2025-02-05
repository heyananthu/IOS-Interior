// import React from 'react'
// import FooterImg from '../../assets/FooterImg.svg'
// function Footer() {
//     return (
//         <div>
//             <div className='grid grid-cols-4 gap-16 p-12'>
//                 <div className='ml-12 space-y-16'>
//                     <img src={FooterImg} />
//                     <div className='space-y-1'>
//                         <p>© 2023 Sandbox.</p>
//                         <p>All rights reserved.</p></div>
//                 </div>
//                 <div>
//                     <h1 className='font-semibold text-xl'>Get in Touch</h1>
//                     <p className='mt-5'>Moonshine St.14/05 <br />
//                         Light City,London,<br />
//                         United Kingdom</p>
//                         <p className='mt-5'>info@gmail.com</p>
//                         <p className='mt-1'>00 (123) 456 78 90</p>
//                 </div>
//                 <div className='space-y-2'>
//                     <h1 className='font-semibold text-xl'>Learn More</h1>
//                     <p className='mt-5 cursor-pointer'>About Us</p>
//                     <p className='cursor-pointer'>Our Story</p>
//                     <p className='cursor-pointer'>Projects</p>
//                     <p className='cursor-pointer'>Terms of Use</p>
//                     <p className='cursor-pointer'>Privacy Policy</p>
//                 </div>
//                 <div>
//                     <h1 className='font-semibold text-xl'>Our Newsletter</h1>
//                     <p className='mt-5'>Subscribe to our newsletter to get our <br/> news & deals delivered to you.</p>
//                     <div className='flex mt-6'>
//                     <input type='email' placeholder='Email Address' className='border border-r-orange-200 p-2 w-[14rem] h-[3rem] rounded-lg'/>
//                     <p className='bg-orange-200 cursor-pointer w-20 flex justify-center items-center h-[3rem] rounded-r-lg absolute ml-[11rem]'>Join</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Footer
import React from 'react';
import FooterImg from '../../assets/FooterImg.svg';

function Footer() {
    return (
        <div className='p-6 md:p-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <div className='space-y-8'>
                    <img src={FooterImg} className='w-32 md:w-40' alt='Footer Logo' />
                    <div className='space-y-1 text-center md:text-left'>
                        <p>© 2023 Sandbox.</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-lg md:text-xl'>Get in Touch</h1>
                    <p className='mt-3 md:mt-5 text-center md:text-left'>Moonshine St.14/05 <br />
                        Light City, London,<br />
                        United Kingdom</p>
                    <p className='mt-3 md:mt-5 text-center md:text-left'>info@gmail.com</p>
                    <p className='mt-1 text-center md:text-left'>00 (123) 456 78 90</p>
                </div>
                <div className='space-y-2 text-center md:text-left'>
                    <h1 className='font-semibold text-lg md:text-xl'>Learn More</h1>
                    <p className='mt-3 md:mt-5 cursor-pointer'>About Us</p>
                    <p className='cursor-pointer'>Our Story</p>
                    <p className='cursor-pointer'>Projects</p>
                    <p className='cursor-pointer'>Terms of Use</p>
                    <p className='cursor-pointer'>Privacy Policy</p>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='font-semibold text-lg md:text-xl'>Our Newsletter</h1>
                    <p className='mt-3 md:mt-5'>Subscribe to our newsletter to get our <br /> news & deals delivered to you.</p>
                    <div className='flex justify-center md:justify-start mt-6'>
                        <input type='email' placeholder='Email Address' className='border border-orange-200 p-2 w-[14rem] h-[3rem] rounded-l-lg' />
                        <p className='bg-orange-200 cursor-pointer w-20 flex justify-center items-center h-[3rem] rounded-r-lg '>Join</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;