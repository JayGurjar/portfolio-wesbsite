import Image from "next/image"
import FurniteManagement from '../public/furniture-management.webp';
import RentMangement from '../public/rent-management.png';
import RideSharing from '../public/ride-sharing.webp';
import VitalizeImage from '../public/Vitalize-Poster.png'
import LearningManagement from '../public/learning-management.webp'


const Porfolio = (props) => {
    return (
        <div>
            <h3 className="font-semibold text-3xl py-1 ">
            Personal Projects
            </h3>
            <p className=" text-md py-2 leading-8 font-mono list-disc ml-10">
               My projects span from a variety of fields from a dynamic full-stack scalable websites
               to scripting with C++.
               Please find the github links associated below.
            </p>
            <div className="lg:flex gap-10">
            <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={VitalizeImage}
                        width={300}
                        style={{display: 'revert'}}
                        className='rounded-xl object-cover'
                    />
                    <p className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        <a href="https://www.vitalize.mom/" rel='noreferrer' target={'_blank'} className='text-blue-400 underline'>
                            Vitalize
                        </a>
                    </p>
                    <p className=" font-nimbusRegular">
                      An Android application for fetal heart rate and contraction monitoring to relieve anxiety among new mothers
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I used
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>React Native on top of JS to build UI</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Fed data to the S3 using AWS IoT Core sdk</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Queues to handle heavy load</li>
                </div>
            <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={LearningManagement}
                        width={300}
                        style={{display: 'revert'}}
                        className='rounded-xl object-cover'
                    />
                    <p className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        <a href="https://github.com/alisiddiqi/Learning-Management-System" target={'_blank'} rel='noreferrer' className='text-blue-400 underline'>
                            Learning Mangement System
                        </a>
                    </p>
                    <p className=" font-nimbusRegular">
                        A scalable and deployable full scale learning management system for professors and students.
                        Includes support for uploading files, downloading files, grading and comments among many other.
                        Supports CRUD operations.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I used
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>React on top of JS for front-end</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>Flask with Python for back-end</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>A relational SQL based database</li>
                </div>
                <div className='text-center shadow-2xl p-10 rounded-2xl my-10 lg:w-1/3'>
                    <Image
                        src={RideSharing}
                        width={300}
                        style={{display: 'revert'}}
                        className='rounded-xl object-cover'
                    />
                    <p className=' text-lg font-burtons font-medium pt-4 pb-2'>
                        <a href="https://github.com/JayGurjar/Ubor" target={'_blank'} rel='noreferrer' className='text-blue-400 underline'>
                            Ride Sharing App
                        </a>
                    </p>
                    <p className=" font-nimbusRegular">
                        A scalable and deployable full scale ride sharing mobile application for riders and drivers.
                        Includes support for location tracking in real-time, requesting a ride, selecting a ride, picking and dropping off rider.
                        2 factor authentication also supported
                        Supports CRUD operations.
                    </p>
                    <h4 className=' py-4 font-semibold text-teal-600'>
                        Tools I used
                    </h4>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>React Native on top of JS for UI</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>AWS Amplify for a scalable backend</li>
                    <li className=' font-nimbusRegular text-grey-800 py-1'>DynamoDB as the database</li>
                </div>
            </div>
        </div>
        
    )
}

export default Porfolio