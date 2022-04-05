import { faBars, faCross, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Customlink from '../CustomLink/Customlink';



const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full px-10 m-0 bg-[#b300b3] h-[150px] lg:h-[90px] border-2 flex items-center justify-between'>
            <div onClick={() => setOpen(!open)}>
                {
                    !open ? <FontAwesomeIcon className='text-left text-xl lg:hidden border-2 border-gray-300 p-2 text-white' icon={faBars}></FontAwesomeIcon> : <FontAwesomeIcon className='text-left text-xl lg:hidden border-2 border-gray-300 p-2 text-white' icon={faMultiply}></FontAwesomeIcon>
                }
            </div>

            <nav className={`w-[50%]  text-white ${open ? 'block ' : 'hidden'}  lg:ml-[450px] text-center lg:flex lg:justify-around uppercase text-lg font-bold items-center`}>


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