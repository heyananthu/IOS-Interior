import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img3 from '../../assets/Img3.jpg'
import Img4 from '../../assets/Img4.jpg'
import Img5 from '../../assets/paterns.png'
function Aboutsectionfive() {
    const data = [
        {
            name: "Coriss Ambady",
            job: "FINANCIAL ANALYST",
            desc: "Lorem ipsum dolor sit eiusmod ut",
            img: Img1
        },
        {
            name: "Cory Zamora",
            job: "MARKETING SPECIALIST",
            desc: "Lorem ipsum dolor sit eiusmod ut",
            img: Img2
        },
        {
            name: "Nikolas Brooten",
            job: "SALES MANAGER",
            desc: "Lorem ipsum dolor sit eiusmod ut",
            img: Img3
        },
        {
            name: "Jackie Sanders",
            job: "INVESTMENT PLANNER ",
            desc: "Lorem ipsum dolor sit eiusmod ut",
            img: Img4
        },
    ]
    return (
        <div>
        <div className=' grid grid-cols-4 p-12 gap-12'>
            {
                data.map((obj, i) =>
                    <div class="w-[19rem] h-[23rem] max-w-sm bg-white  rounded-lg shadow-lg">
                        <div class="flex flex-col mt-7 p-4 space-y-5">
                            <img class="w-24 h-24 ml-4 rounded-full shadow-lg" src={obj.img} alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-90 ml-4">{obj.name}</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400 ml-4">{obj.job}</span>
                            <p className='w-[12rem] ml-4'>{obj.desc}</p>
                            <div className='flex ml-4 space-x-2'>
                                <FaTwitter className='text-blue-300'/>
                                <RiFacebookFill className='text-blue-700'/>
                                <IoBasketballOutline className='text-pink-500' />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <img src={Img5}/>
        </div>
    )
}

export default Aboutsectionfive
