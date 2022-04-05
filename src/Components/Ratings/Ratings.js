import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ratings = ({ ratings }) => {
    const rating = parseInt(ratings);
    const ratingNew = [];
    for (let i = 0; i < rating; i++) {
        ratingNew.push(i);
    }


    return (
        <div>
            <small className='text-xl font-semibold'>Ratings:</small>    {
                ratingNew.map(item => <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>)
            }
        </div>
    );
};

export default Ratings;