import React from 'react';
import Customlink from '../CustomLink/Customlink';



const Header = () => {
    return (
        <div className='w-full m-0 bg-[#b300b3] h-[90px] border-2 flex items-center justify-center'>
            <nav className='w-[50%]  text-white flex justify-around uppercase text-lg font-bold'>


                <Customlink className='underline decoration-4 hover:decoration-[#000066] decoration-white hover:text-[#0000CD]' to="/home">Home</Customlink>

                <Customlink className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/reviews">Reviews</Customlink>

                <Customlink className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/dashboard">Dashboard</Customlink>

                <Customlink className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/blogs">Blogs</Customlink>

                <Customlink className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/about">About</Customlink>
            </nav>
        </div>
    );
};

export default Header;