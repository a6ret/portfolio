import React from 'react';
import projectGithub from '../assets/project-github.png';
import projectCalculator from '../assets/project-calculator.png';
import projectDice from '../assets/project-dice.png';
import projectOsh from '../assets/project-osh.png';
import projectSid from '../assets/project-sid.png';
import projectWisata from '../assets/project-wisata.png';

function Work() {
    return (
        <div name='work' className='w-full h-full text-[#fff] bg-[#082032]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*Grid item*/}
                    <div
                        style={{ backgroundImage: `url(${projectGithub})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                Github User
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://a6ret.github.io/github-users'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/github-users'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid item*/}
                    <div
                        style={{
                            backgroundImage: `url(${projectSid})`,
                            backgroundPosition: 'left',
                        }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white'>
                                SID Lobutua
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://sistemlobutua.000webhostapp.com/'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/SID-Laravel'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid item*/}
                    <div
                        style={{ backgroundImage: `url(${projectDice})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                100 Dice Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://a6ret.github.io/100-Dice-Game/'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/100-Dice-Game'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid item*/}
                    <div
                        style={{ backgroundImage: `url(${projectCalculator})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                Calculator
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://a6ret.github.io/Calculator/'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/Calculator'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid item*/}
                    <div
                        style={{ backgroundImage: `url(${projectOsh})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                One Step Healthy
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='https://a6ret.github.io/One-Step-Healthy/'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/One-Step-Healthy'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Grid item*/}
                    <div
                        style={{ backgroundImage: `url(${projectWisata})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover effects*/}
                        <div className='opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center'>
                            <span className='text-2xl font-bold text-center text-white tracking-wider'>
                                Wisata Sumatera
                            </span>
                            <div className='pt-8 text-center'>
                                <a
                                    href='http://wisatasumatera.infinityfreeapp.com/'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Demo
                                    </button>
                                </a>
                                <a
                                    href='https://github.com/a6ret/Wisata-Laravel'
                                    target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-orange-600 duration-300'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
