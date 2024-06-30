"use client";
import React from 'react';
import { SidebarData } from './Sidebardata';

const Sidebar = () => {
    return (
        <div className="bg-gray-100 h-screen p-5 flex flex-col rounded-lg shadow-xl " style={{ width: '230px' }}>
            <ul>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} onClick={() => {window.location.pathname = val.link}} className="flex items-center p-2 space-x-2 hover:bg-gray-200 rounded-md cursor-pointer">
                            {" "}
                            <div>{val.icon}</div>{" "}
                            <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    );
};

export default Sidebar;