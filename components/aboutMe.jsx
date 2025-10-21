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
                Versa Networks | Full Stack Engineer | March 2024 - Present
                I develop and maintain customer-facing web applications serving users across the globe, built with React, TypeScript, and Spring Boot. 
                My focus extends beyond feature development to creating tools and systems that amplify team effectiveness.
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
                        I specialize in building end-to-end web applications that balance beautiful, responsive interfaces with secure transports. 
                        With 2+ years of professional experience, I've delivered production applications serving global user bases.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        What I bring
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Modern React development with hooks, state management, and performance optimization </li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'> <span className="text-teal-500"> RESTful API </span> design and implementation</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'> <span className="text-teal-500">  React </span> on top of JS/TS</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Database optimization and security</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Responsive, accessible UI/UX</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>CI/CD pipeline integration</li>
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
                        Strong foundation in object-oriented programming and algorithm design, honed through 3+ years of academic and professional work.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Core Strengths
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Data structures and algorithm optimization </li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>System design and architecture</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Problem-solving and computational thinking</li>
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
                        I create cross-platform mobile experiences that users love. With over an year building production mobile apps, I understand the nuances of mobile UX, performance constraints, and platform-specific design patterns.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Capabilites
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Android development with modern tooling</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Cross-platform mobile architecture</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Real-time features and location services</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1 pb-4'>Backend integration and API consumption</li>
                </div>
            </div>
        </div>
    )
};

export default AboutMe
