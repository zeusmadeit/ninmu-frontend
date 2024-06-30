import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center space-x-2">
                <Image src="/images/ninmu_logo.png" alt="Ninmu Logo" width={40} height={40}></Image>
                <span>Ninmu</span>
            </div>
            <div className="flex space-x-3">
                <button className="bg-slate-300 text-white px-4 py-2 rounded transition duration-400 hover:bg-black hover:text-white"><Link href="/signin">Sign In</Link></button>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded transition duration-400 hover:bg-black hover:text-white "><Link href="/signup">Sign Up</Link></button>
                
            </div>

        </div>
    </header>
  );
};

export default Header;
