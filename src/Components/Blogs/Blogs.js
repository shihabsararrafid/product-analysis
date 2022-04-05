import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-7xl text-center'>Q & A</h1>
            <div className='grid lg:grid-cols-2 gap-10 mt-10'>
                <div className='border-2 rounded-lg border-[#B300B3]'>
                    <h1 className='text-5xl'>What is Context Api?</h1>
                    <p className='text-left'>Context api is used when one or more than one props has to be used in many components and to do this it has to be passed through many levels . If we do this by manual way it will need many time and more work.To use this we have to wrap the portion in which we want to use 'Context Api' with the name of context and value . Moreover we have to remember that the name of context must start with capital letter.</p>

                </div>
                <div className='border-2 rounded-lg border-[#B300B3]'>
                    <h1 className='text-5xl'>What is semantic tag?</h1>
                    <p className='text-left'>Semantic Tag means meaningful tag .It helps to identify the purpose of using a tag in the html file easily. For example we can say about 'nav' tag . we can create navigation bar through 'div' or 'section' but when we use 'nav' tag then it denotes that we are creating a navigation but through 'div' or 'section' we can't say the purpose if the tag by only seeing it. Same goes to  for 'header' ,'article', 'footer' tags.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;