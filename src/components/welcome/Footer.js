import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
              {/* Flex Container */}
              <div className="flex flex-wrap justify-between">
                {/* Logo and Description */}
                <div className="w-full sm:w-1/3 mb-6">
                    <div className="flex items-center space-x-2">
                        <Image src="/images/ninmu_logo.png" alt="Ninmu Logo" width={40} height={40}></Image>
                        <span className="text-2xl font-bold">Ninmu</span>
                    </div>
                    <p className="mt-4 text-gray-600">Your Productivity Social App</p>
                </div>

                

                {/* Contact Information */}
                <div className="w-full sm:w-1/3 mb-6">
                    <h5 className="text-xl font-bold mb-2">Contact us</h5>
                    <ul>
                        <li><a href="/" className="text-gray-600 hover:text-gray-800">Wesam</a></li>
                        <li><a href="/" className="text-gray-600 hover:text-gray-800">Abraham</a></li>
                        <li><a href="/" className="text-gray-600 hover:text-gray-800">Pascal</a></li>
                    </ul>
                </div>
              </div>
              
              {/* Footer Bottom Section */}
              <div className="border-t mt-8 pt-4">
                <div className="flex justify-center">
                <p className="text-gray-600">&copy; 2024 Copyright. All rights reserved.</p>
                </div>
              </div>
            </div>
        </footer>
    );
};

export default Footer;