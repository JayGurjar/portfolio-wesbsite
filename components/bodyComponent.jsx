import React from "react";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import wave from '../public/wave.png'

const BodyComp = (props) => {
    return (
        <div>
        <div className="text-center">
            <h2 className=" text-7xl py-2 text-cyan-500 font-semibold">Jay Gurjar</h2>
            <h3 className="text-3xl py-5">Developer and Designer</h3>
            <p className="font-mono leading-7">
                4th year Software engineering student at the University of Calgary.
                Experienced in developing scalable webpages using React and CSS/SCSS for styling
            </p>
        </div>
        <div className="text-4xl flex justify-center py-5 gap-16">
            <a href="https://www.linkedin.com/in/jaygurjar/" target={'_blank'}>
                <AiFillLinkedin/>
            </a>
            <a href="https://github.com/JayGurjar" target={'_blank'}>
                <AiFillGithub/>
            </a>
        </div>
        <div className="relative bg-gradient-to-b from-teal-300 to-white rounded-full w-80 h-80 mt-10 mb-8 mx-auto overflow-hidden">
            <Image 
                src={wave}
                fill={true}
            />
        </div>
        </div>
    )
};

export default BodyComp