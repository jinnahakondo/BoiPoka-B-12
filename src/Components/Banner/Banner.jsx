import React from 'react';
import bannerImg from '../../assets/banner-img.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse gap-20 lg:gap-0 items-center lg:flex-row lg:justify-between lg:items-center mt-12 bg-[#1313130d] rounded-3xl lg:px-28 py-20 '>
            {/* left side */}
            <div className='flex flex-col items-center lg:block'>
                <h2 className='text-2xl lg:text-5xl font-bold mb-12'>Books to freshen up <br /> your bookshelf</h2>
                <a className="btn bg-[#23BE0A] text-white px-7 py-4 mr-4 rounded-lg"> View The List </a>

            </div>
            {/* right side */}
            <div>
                <img src={bannerImg} />
            </div>
        </div>
    );
};

export default Banner;