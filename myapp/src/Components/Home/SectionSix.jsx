// import React from 'react'
// import Img1 from "../../assets/SectionSixOne.png"
// import Img2 from '../../assets/SectionSixTwo.png'
// import Img3 from '../../assets/SectionSixThree.png'
// import Img4 from '../../assets/SectionSixFour.png'
// import Img5 from '../../assets/SectionSixFive.png'
// import Img6 from '../../assets/SectionSixSix.png'
// import Img7 from '../../assets/SectionSixSeven.png'
// import Img8 from '../../assets/SectionSix8.png'
// function SectionSix() {
//     return (
//         <div className=' p-20'>
//             <h1 className='text-4xl font-bold text-center'>Our Products</h1>
//             <div className='mt-12 grid grid-cols-4 '>
//                 <div className='ml-[2rem] bg-gray-200 w-fit'>
//                     <img src={Img1} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Syltherine</h1>
//                     <p className='ml-5 mt-1'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ml-[2.5rem] bg-gray-200 w-fit'>
//                     <img src={Img2} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Lolito</h1>
//                     <p className='ml-5 mt-1'>Luxury big sofa</p>
//                 </div>
//                 <div className='ml-[2.5rem] bg-gray-200 w-fit'>
//                     <img src={Img3} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Respira</h1>
//                     <p className='ml-5 mt-1'>Outdoor bar table and stool</p>
//                 </div>
//                 <div className='ml-[2.5rem] bg-gray-200 w-fit'>
//                     <img src={Img4} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Lolito</h1>
//                     <p className='ml-5 mt-1 mb-4'>Luxury big sofa</p>
//                 </div>
//                 <div className='ml-[2rem] mt-8 bg-gray-200 w-fit'>
//                     <img src={Img5} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Grifo</h1>
//                     <p className='ml-5 mt-1'>Night lamp</p>
//                 </div>
//                 <div className='ml-[2.5rem] mt-8 bg-gray-200 w-fit'>
//                     <img src={Img6} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Muggo</h1>
//                     <p className='ml-5 mt-1'>Small mug</p>
//                 </div>
//                 <div className='ml-[2.5rem] mt-8 bg-gray-200 w-fit'>
//                     <img src={Img7} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Pingky</h1>
//                     <p className='ml-5 mt-1'>Cute bed set</p>
//                 </div>
//                 <div className='ml-[2.5rem] mt-8 bg-gray-200 w-fit'>
//                     <img src={Img8} className='size-[20rem] h-[18rem]' />
//                     <h1 className='font-semibold text-2xl ml-5 mt-3'>Potty</h1>
//                     <p className='ml-5 mt-1 mb-4'>Minimalist flower pot</p>
//                 </div>
//             </div>
//             <button className='text-orange-400 w-[12rem] border h-12 ml-[33rem] mt-12'>Show More</button>
//         </div>
//     )
// }

// export default SectionSix
import React from 'react';
import Img1 from "../../assets/SectionSixOne.png";
import Img2 from "../../assets/SectionSixTwo.png";
import Img3 from "../../assets/SectionSixThree.png";
import Img4 from "../../assets/SectionSixFour.png";
import Img5 from "../../assets/SectionSixFive.png";
import Img6 from "../../assets/SectionSixSix.png";
import Img7 from "../../assets/SectionSixSeven.png";
import Img8 from "../../assets/SectionSix8.png";

function SectionSix() {
    const products = [
        { img: Img1, name: "Syltherine", desc: "Stylish cafe chair" },
        { img: Img2, name: "Lolito", desc: "Luxury big sofa" },
        { img: Img3, name: "Respira", desc: "Outdoor bar table and stool" },
        { img: Img4, name: "Lolito", desc: "Luxury big sofa" },
        { img: Img5, name: "Grifo", desc: "Night lamp" },
        { img: Img6, name: "Muggo", desc: "Small mug" },
        { img: Img7, name: "Pingky", desc: "Cute bed set" },
        { img: Img8, name: "Potty", desc: "Minimalist flower pot" },
    ];

    return (
        <div className='p-10 md:p-20'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Our Products</h1>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {products.map((product, index) => (
                    <div key={index} className='bg-gray-200  rounded-lg w-fit '>
                        <img src={product.img} className='h-[18rem] object-cover rounded-md' alt={product.name} />
                        <h1 className='font-bold text-xl mt-3 ml-5'>{product.name}</h1>
                        <p className='text-gray-600 ml-5 mb-4'>{product.desc}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-12'>
                <button className='text-orange-400 border border-orange-400 px-6 py-3 rounded-md hover:bg-orange-400 hover:text-white transition'>Show More</button>
            </div>
        </div>
    );
}

export default SectionSix;
