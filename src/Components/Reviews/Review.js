import React from 'react';
import ShowReview from '../showReview/ShowReview';
import SingReview from '../SingReview/SingReview';


const Review = () => {
    const [review, setReview] = ShowReview();
    return (
        <div className='grid grid-cols-2 gap-10 mt-20 mb-10 mx-5'>
            {
                review.map(item => <SingReview key={item.id} review={item}></SingReview>)
            }
        </div>
    );
};

export default Review;