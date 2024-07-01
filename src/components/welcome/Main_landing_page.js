import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <section className="container min-h-screen mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center px-20">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-grass9 mb-5">Ninmu, Your Social <br/> Productivity Hub</h1>
                <p className="text-lg text-gray-400 mb-10">Ninmu is a social goal tracking app designed to make goal tracking and productivity enjoyable and engaging. Introducing social networking elements we enable collaborative goal achievements and accountability.</p>
                <div className="flex justify-start space-x-4">
                    <button className=" bg-grass10 text-white px-4 py-3 rounded font-semibold transition duration-400 hover:bg-gray-700 hover:text-white">Get started - Sign up</button>
                    <button className="bg-grass4 rounded text-grass10 px-4 py-2 font-semibold transition duration-400 hover:bg-gray-700 hover:text-white">Sign In</button>
                </div>
            </div>
            
            <div className="w-full md:w-1/2">
                <Image src="/images/ninmu_landing_page.png" alt="landing page pic" width={500} height={500}></Image>
            </div>
            
        </div>
    </section>
    );
};

export default Main;
