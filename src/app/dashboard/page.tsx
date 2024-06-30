import {useTranslations} from 'next-intl';
import React from 'react';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import Rightsidebar from '../../components/dashboard/Rightsidebar'

export default function LandingPage() {
    const t = useTranslations('Landing');
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-row justify-between">
                <div className="fixed left-4 top-20">
                    <Sidebar />
                </div>
                <div className="fixed right-4 top-20">
                    <Rightsidebar />
                </div>
            </div>
        </div>
    );
}