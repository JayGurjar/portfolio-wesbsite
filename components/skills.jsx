import {DiReact,DiAngularSimple,DiCss3,DiHtml5,DiNodejs} from 'react-icons/di'


const Skills = (props) => {

    return (
        <div className=' flex flex-col items-center'>
            <div className='flex my-20 mx-5'>
                <a className='font-mono text-lg mx-2'>
                <DiReact className='text-6xl' />
                    React
                </a>
                <a className='font-mono text-lg mx-2' onOver>
                    <DiCss3 className='text-6xl'/>
                    CSS
                </a>
                <a className='font-mono text-lg mx-2'>
                    <DiHtml5 className='text-6xl'/>
                    HTML
                </a>
                <a className='font-mono text-lg mx-2'>
                    <DiAngularSimple className='text-6xl'/>
                    Angular
                </a>
                <a className='font-mono text-lg mx-2'>
                    <DiAngularSimple className='text-6xl'/>
                    Node JS
                </a>
            </div>
        </div>
    )
};

export default Skills