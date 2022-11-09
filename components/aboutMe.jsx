import FullStackImage from '../public/full-stack.png';
import ScritingImage from '../public/scripting.png';
import MobileDev from '../public/mobile-dev.png';
import Image from 'next/image';


const AboutMe = (props) => {


    return (
        <div>
            <h3 className=" font-semibold text-3xl py-1">
                Experience 
            </h3>
            <p className=" text-md py-2 leading-8 font-mono list-disc ml-10">
                I am currently working for Versa Networks as a <span className="text-teal-500"> front-end web developer</span> responsible for making
                client side webpages used by over 10000+ customers world-wide using React on top on JS/TS. 
                I have also brought up <span className="text-teal-500"> Karma UI testing framework and Storybook </span> for production level applications.
                I have contributed in making the existing code base <span className="text-teal-500"> faster by over 7% </span>. I will also be working with the backend 
                team using <span className="text-teal-500"> Springboot </span> before ending my current term.

            </p>
            <h3 className="font-semibold text-3xl py-1">
                Skills
            </h3>
            <p className="text-md py-2 leading-8 font-mono list-disc ml-10">
                I bring a wide variety of skills like full-stack web development, mobile development and scripting.
            </p>
            <div className=' lg:flex  gap-10'>
                <div className='text-center shadow-2xl rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={FullStackImage}
                        width={100}
                        style={{display: 'revert'}}
                    />
                    <h3 className=' text-lg font-mono font-medium pt-4 pb-2'>
                        Full Stack Development
                    </h3>
                    <p className=' font-mono'>
                        2+ years of experience in developing full stack web applications with an immersive
                        front end and scalable backend.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-mono text-grey-800 py-1'>JQuery to manipulate DOM</li>
                    <li className=' font-mono text-grey-800 py-1'>Jest to test UI components</li>
                    <li className=' font-mono text-grey-800 py-1'>React on top of JS/TS</li>
                    <li className=' font-mono text-grey-800 py-1'>Puppeteer to end-to-end testing</li>
                    <li className=' font-mono text-grey-800 py-1 pb-4'>Experienced in using Spring Boot, Amplify or Flask as backend frameworks</li>
                </div>
                <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={ScritingImage}
                        width={100}
                        height={100}
                        style={{display: 'revert'}}
                    />
                    <h3 className=' text-lg font-mono font-medium pt-4 pb-2'>
                        OOP Scripting
                    </h3>
                    <p className=' font-mono'>
                        3 years of academic scripting experience
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-mono text-grey-800 py-1'>Experinced in scripting using C, C++ and Java </li>
                    <li className=' font-mono text-grey-800 py-1'>Used C++ to program micro-processors for a project</li>
                    <li className=' font-mono text-grey-800 py-1 pb-4'>Used Python to program a stock-market statement generator</li>
                </div>
                <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={MobileDev}
                        width={50}
                        style={{display: 'revert'}}
                    />
                    <h3 className=' text-lg font-mono font-medium pt-4 pb-2'>
                        Andriod/IOS Development
                    </h3>
                    <p className='font-mono'>
                        Almost 1 year of experience in developing full stack mobile applications with an immersive
                        UI and scalable backend.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-mono text-grey-800 py-1'>React Native on top of JS/TS</li>
                    <li className=' font-mono text-grey-800 py-1'>Kotlin/Swift for some OS specific features</li>
                    <li className=' font-mono text-grey-800 py-1 pb-4'>Experienced in using Amplify backend frameworks</li>
                </div>
                
            </div>
        </div>
    )
};

export default AboutMe