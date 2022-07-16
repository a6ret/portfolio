import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#082032] '>
            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-orange-600'>Hi, my name is</p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>
                    Dewa Sembirings
                </h1>
                <h2 className='text-4xl md:text-7xl font-bold text-[#8892b0]'>
                    I'm a Web Developer
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I'm a web developer specializing in building (and
                    occasionally designing). Currently, I'm focused on the
                    front-end side, but doesn't rule out the possibility I will
                    learn about back-end side and become a full-stack web
                    developer.
                </p>
                <div>
                    <Link to='work' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 border-orange-600 bg-orange-600 duration-300'>
                            View Work
                            <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-150' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
