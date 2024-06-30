import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <section className="container  mx-auto px-4 py-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold text-green-600 mb-4">Ninmu, Your Social Productivity Hub</h1>
                <p className="text-lg mb-8">Ninmu is a social goal tracking app designed to make goal tracking and productivity enjoyable and engaging. Introducing social networking elements we enable collaborative goal achievements and accountability.</p>
                <div className="flex justify-center space-x-4">
                <button className=" bg-blue-500 text-white px-4 py-2 rounded font-semibold transition duration-400 hover:bg-black hover:text-white">Sign up to get started</button>
                <button className=" bg-slate-400 px-4 py-2 rounded font-semibold transition duration-400 hover:bg-black hover:text-white">Sign In</button>
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
