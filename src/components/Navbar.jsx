import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#082032] text-gray-300'>
            <div>
                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'>
                    <img src={Logo} alt='' style={{ width: '50px' }} />
                </Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to='skills'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to='work'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        to='contact'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#082032] flex flex-col justify-center items-center'
                }>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='skills'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='work'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='contact'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-orange-600'>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Account */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='https://linkedin.com/in/iamdewaa'
                            target='_blank'
                            rel='noreferrer'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='https://github.com/A6ret'
                            target='_blank'
                            rel='noreferrer'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF6464]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='mailto:dewasembiring1@gmail.com'
                            target='_blank'
                            rel='noreferrer'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4B5D67]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='https://drive.google.com/file/d/1tpj2avC9qpw-JZKbuyKVYwwW71bHlK9U/view?usp=sharing'
                            target='_blank'
                            rel='noreferrer'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
