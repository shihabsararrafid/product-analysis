import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import img from './../../download1.png';

const NotFoundPage = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <h1 className='text-7xl text-red-500'>404</h1>
            <h2 className='text-4xl '> <span className='text-violet-700'>Sorry, </span> <br /> The page you are looking is not Found.</h2>
            <img className='block mx-auto mt-10' src={img} alt="" />




            <br /><br />
            <Link className='hover:text-[#B300B3]' to="/home">
                <button className='border-2 text-lg text-white rounded-xl font-semibold bg-blue-600 hover:bg-white duration-500 hover:text-[#B300B3] hover:border-[#B300B3] py-3 px-8'>GO TO THE HOME PAGE <FontAwesomeIcon className='text-[28px] text-[#B300B3] ' icon={faSearch}></FontAwesomeIcon></button>

            </Link>

        </div>
    );
};

export default NotFoundPage;