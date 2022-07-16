import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#082032] text-[#fff]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi, I'm Dewa, nice to meet you. Please take a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building an excellent system
                            that improves lives of those around me. I specialize
                            in creating website for clients ranging from
                            individuals and small-businesses and sometimes large
                            projects from my previous company. To be honest, I
                            am still in college right now, but it makes me feel
                            have enthusiastic can learn a lot from anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
