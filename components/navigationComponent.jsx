import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavigationComp = (props) => {


    return (
        <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons">JG</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-xl"/>
              </li>
              <li>
                <a href='#' className='bg-gradient-to-t from-cyan-400 to-teal-400 text-white px-5 py-3 rounded-xl ml-6'> 
                    Resume 
                </a>
              </li>
            </ul>
        </nav>
    )
}

export default NavigationComp;