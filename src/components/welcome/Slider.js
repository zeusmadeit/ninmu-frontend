'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: 'Skylar Hall',
        image: '/images/user1_avatar.png',
        review: 'Ninmu has completely transformed the way I track my goals. The social features keep me motivated and accountable.',
    },
    {
        name: 'Jasmine Wilson',
        image: '/images/user2_avatar.png',
        review: 'The user interface is incredibly intuitive and easy to use. I love how I can collaborate with others on shared goals.',
    },
    {
        name: 'Jordan Williams',
        image: '/images/user3_avatar.png',
        review: 'Ninmu  make goal tracking fun and engaging. I’ve never been more consistent in achieving my objectives.',
    },
    {
        name: 'Taylor John',
        image: '/images/user4_avatar.png',
        review: 'The ability to see other users’ progress and get inspiration from their achievements is a game-changer for me.',
    },
];

const SliderPart = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    };

    return (
        <section className="py-6">
            <div className="w-11/12 md:w-3/4 m-auto pb-8">
                <div className="mt-10">
                <h2 className="text-3xl font-bold mb-8  flex justify-center text-sky-900">USERS' STORIES</h2>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white h-96 text-black rounded-xl">
                                <div className="rounded-t-xl bg-lime-100 flex justify-center items-center  h-52">
                                    <img src={d.image} alt="/" className="rounded-full h-44 w-44"></img>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-4 h-44" >
                                    <p className="text-xl font-bold">{d.name}</p>
                                    <p className="text-xl">{d.review}</p>
                                </div>
                            </div>

                        </div>
                    
                    ))}
                </Slider>
                </div>
        
            </div>
        </section>

  );
};

export default SliderPart;
