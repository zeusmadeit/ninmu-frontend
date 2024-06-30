"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Notification from './Notification';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        //gonna implement the search functionality here later on
        window.location.href = `/search?query=${searchQuery}`;
        console.log('Searching for:', searchQuery);
    };

    return (
        <header className="bg-white shadow-md h-15">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold flex items-center space-x-2">
                    <Image src="/images/ninmu_logo.png" alt="Ninmu Logo" width={40} height={40}></Image>
                    <span>Ninmu</span>
                </div>
                <div className="relative ">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="border border-black rounded-full pl-4 pr-10 -y-2" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <FontAwesomeIcon icon={faSearch} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 cursor-pointer" onClick={handleSearch}/>
                </div>
                <div className="flex items-center space-x-4">
                <Notification /> 
                <a href="/profile" className="flex items-center ml-4">
                <Image
                    src="/images/user_avatar.png"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                </a>
            </div>
            </div>
        </header>
    );
};

export default Header;