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
                    <h3 className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        Full Stack Development
                    </h3>
                    <p className=' font-nimbusRegular'>
                        2+ years of experience in developing full stack web applications with an immersive
                        front end and scalable backend.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'><span className="text-teal-500"> JQuery </span> to manipulate DOM</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'><span className="text-teal-500"> Jest </span> to test UI components</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'> <span className="text-teal-500">React </span> on top of JS/TS</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'><span className="text-teal-500"> Puppeteer </span> to end-to-end testing</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Used<span className="text-teal-500"> NextJS </span> for SSR applications</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Experienced in using <span className="text-teal-500"> Spring Boot, Amplify or Flask </span> as backend frameworks</li>
                </div>
                <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={ScritingImage}
                        width={100}
                        height={100}
                        style={{display: 'revert'}}
                    />
                    <h3 className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        OOP Scripting
                    </h3>
                    <p className=' font-nimbusRegular'>
                        3 years of academic scripting experience
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Experinced in scripting using <span className="text-teal-500"> C, C++ and Python </span> </li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Used C++ to program <span className="text-teal-500"> micro-processors </span> for a project</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Used <span className="text-teal-500"> Python </span> to program a stock-market statement generator</li>
                </div>
                <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={MobileDev}
                        width={50}
                        style={{display: 'revert'}}
                    />
                    <h3 className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        Andriod/IOS Development
                    </h3>
                    <p className='font-nimbusRegular'>
                        1+ year of experience in developing full stack mobile applications with an immersive
                        UI and scalable backend.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I use
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'><span className="text-teal-500">React Native</span> on top of JS/TS</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'><span className="text-teal-500">Java</span> for some OS specific features</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Built automated data processsing pipelines to read data from <span className="text-teal-500">S3</span> and feed into <span className="text-teal-500">GraphQL </span></li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Experienced in using services like <span className="text-teal-500">AWS IoT Core, GCP APIs </span> backend frameworks</li>
                </div>
            </div>
        </div>
    )
};

export default AboutMe