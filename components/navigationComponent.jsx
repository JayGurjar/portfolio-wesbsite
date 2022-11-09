import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavigationComp = (props) => {


    return (
        <nav className="py-10 mb-6 flex justify-between">
            <h1 className=" text-xl font-burtons">JG</h1>
            <ul className=" flex items-center">
              <li>
                <a className='bg-gradient-to-t from-cyan-400 to-teal-400 text-white px-5 py-3 rounded-xl ml-6' href='#skills'>
                  Experience 
                </a>
              </li>
              <li>
                <a className='bg-gradient-to-t from-cyan-400 to-teal-400 text-white px-5 py-3 rounded-xl ml-6' href='#projects'>
                  Projects
                </a>
              </li>
              <li>
                <a href='https://drive.google.com/uc?export=download&id=1Qy8czzJ5urhTQqy_3RjGTx-4uoYL1FC2' className='bg-gradient-to-t from-cyan-400 to-teal-400 text-white px-5 py-3 rounded-xl ml-6'> 
                    Resume 
                </a>
              </li>
            </ul>
        </nav>
    )
}

export default NavigationComp;