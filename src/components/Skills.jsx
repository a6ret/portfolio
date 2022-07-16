import React from 'react';
//import logo
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Linux from '../assets/linux.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';
import ReactImg from '../assets/react.png';
import MySql from '../assets/mysql.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Php from '../assets/php.png';

const skills = () => {
    return (
        <div name='skills' className='w-full h-full bg-[#082032] text-[#fff]'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
                        Skills
                    </p>
                    <p className='py-6'>
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Html} alt='' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Css} alt='' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt='' />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt='' />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='' />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt='' />
                        <p className='my-4'>React JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt='' />
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={Php} alt='' />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt='' />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySql} alt='' />
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt='' />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Linux} alt='' />
                        <p className='my-4'>Linux</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default skills;
