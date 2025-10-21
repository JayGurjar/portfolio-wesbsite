import React from "react";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import wave from '../public/wave.png'
import Skills from "./skills";
import Cartoon from '../public/Cartoon-1.png'
import AboutMe from "./aboutMe";
import Porfolio from "./portfolio";

const BodyComp = (props) => {

    return (
        <div className="">
        <div className="text-center">
            <h2 className=" text-7xl text-cyan-500 font-semibold md:text-10xl">Jay Gurjar</h2>
            <h3 className="text-3xl py-5 md:text-6xl">Full Stack Engineer | React & Spring Boot Specialist | AI </h3>
            <p className="font-mono leading-7 md:text-3xl">
                Full Stack Engineer passionate about creating efficient, user-centric applications. I combine React expertise with backend scalability to deliver solutions that make a real impact—from AI-powered developer tools to performance optimizations that move the needle.
            </p>
        </div>
        <div className="text-4xl flex justify-center py-5 gap-16">
            <a href="https://www.linkedin.com/in/jaygurjar/" target={'_blank'} rel='noreferrer'>
                <AiFillLinkedin/>
            </a>
            <a href="https://github.com/JayGurjar" target={'_blank'} rel='noreferrer'>
                <AiFillGithub/>
            </a>
        </div>
        <div className="justify-center">
            <div className="relative bg-gradient-to-b from-teal-300 to-white rounded-full w-80 h-80 overflow-hidden mx-auto md:h-100 md:w-96">
                <Image
                    src={Cartoon}
                    fill={true}
                />
            </div>
            {/* <Skills /> */}
        </div>
        <div className="relative mt-7 md:text-xl" id="skills">
            <AboutMe />
        </div>
        <div className=" relative mt-7 md:text-xl" id='projects'>
            <Porfolio />
        </div>
        </div>
    )
};

export default BodyComp
