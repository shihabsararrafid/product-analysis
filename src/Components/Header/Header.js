import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full m-0 bg-[#b300b3] h-[90px] border-2 flex items-center justify-center'>
            <nav className='w-[50%]  text-white flex justify-around uppercase text-lg font-bold'>
                <Link className='underline decoration-4 hover:decoration-[#000066] decoration-white hover:text-[#0000CD]' to="/home">Home</Link>
                <Link className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/reviews">Reviews</Link>
                <Link className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/dashboard">Dashboard</Link>
                <Link className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/blogs">Blogs</Link>
                <Link className='underline decoration-4 hover:decoration-[#000066] decoration-white  hover:text-[#0000CD]' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;