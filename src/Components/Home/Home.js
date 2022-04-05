import React from 'react';
import img from './dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg';

const Home = () => {
    return (
        <div className='grid grid-cols-2 mt-[80px] h-[700px] gap-10 justify-center'>
            <div className='ml-10'>
                <h1 className='text-6xl mb-5 uppercase text-[#B300B3] font-bold'>
                    Laptop MAnia
                </h1>
                <h1 className='text-4xl mb-5 text-blue-900 font-bold'>YOUR CHOICE IS OUR PRIORITY</h1>
                <p className='text-left font-semibold text-lg mb-8'>Laptop has become one of our best friends nowadays. From office to school it has became a easy way to access the facilities of a computer as it has the benefits of portabilty.So it has become difficult to find the real products as there are so many  fraud shop among us .We assure you to real products with quality after sales service.</p>
                <button className='border-2 text-lg text-white rounded-xl font-semibold bg-blue-600 hover:bg-white duration-500 hover:text-[#B300B3] hover:border-[#B300B3] py-3 px-8'>SHOW DEMO</button>


            </div>
            <div className=' w-[500px] h-[650px]'>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default Home;