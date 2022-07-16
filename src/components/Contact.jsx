import React from 'react';

function Contact() {
    return (
        <div
            name='contact'
            className='w-full h-screen bg-[#082032] flex justify-center items-center p-4'>
            <form
                method='POST'
                action='https://getform.io/f/1815e8cc-7321-4cb8-a3c7-89bd395f4d3e'
                className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-[#fff]'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-6'>
                        Submit the form below or shoot me an email -
                        dewasembiring1@gmail.com
                    </p>
                </div>
                <input
                    className='bg-[#fff] p-2'
                    type='text'
                    placeholder='Name'
                    name='name'
                    required
                />
                <input
                    className='my-4 p-2 bg-[#fff]'
                    type='text'
                    placeholder='Email'
                    name='email'
                    required
                />
                <textarea
                    className='bg-[#fff] p-2'
                    name='message'
                    rows='10'
                    placeholder='Message'
                    required></textarea>

                <button className='text-white border-2 hover:bg-orange-500 hover:border-orange-500 bg-orange-600 border-orange-600 py-3 px-4 my-8 mx-auto flex items-center duration-300'>
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
}

export default Contact;
