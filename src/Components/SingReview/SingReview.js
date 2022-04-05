import React from 'react';
import Ratings from '../Ratings/Ratings';

const SingReview = (props) => {
    const { name, picture, review, ratings } = props.review;
    return (
        <div className='border-2 border-[#B300B3] rounded-lg'>
            <div className='flex h-[80px] items-center justify-center '>

                <img className='w-[50px] h-[50px] rounded-full' src={picture} alt="" />
                <h1 className='ml-5 text-xl font-semibold'>Profile: <a className='text-blue-700' href="/">{name}</a> </h1>
            </div>
            <div>
                <p>{review}</p>

                <Ratings ratings={ratings}></Ratings>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SingReview;