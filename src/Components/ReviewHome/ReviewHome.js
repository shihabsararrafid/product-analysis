import React from 'react';
import { Link } from 'react-router-dom';
import ShowReview from '../showReview/ShowReview';
import SingReview from '../SingReview/SingReview';

const ReviewHome = () => {
    const [review, setReview] = ShowReview();
    const newReview = review.slice(0, 3);
    return (
        <div className='mb-10'>
            <h1 className='text-5xl font-semibold'>Customer Reviews(3)</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 my-16 mx-10'>
                {
                    newReview.map(item => <SingReview key={item.id} review={item}></SingReview>)
                }

            </div>
            <Link to='/reviews'><button className='border-2 uppercase text-lg text-white rounded-xl font-semibold bg-blue-600 hover:bg-white duration-500 hover:text-[#B300B3] hover:border-[#B300B3] py-3 px-8'>see all reviews</button></Link>

        </div>
    );
};

export default ReviewHome;