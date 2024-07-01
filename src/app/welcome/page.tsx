import {useTranslations} from 'next-intl';
import React from 'react';
import '../../styles/globals.css';
import Header from '../../components/welcome/Header';
import MainLandingPage from '../../components/welcome/Main_landing_page';
import BenefitsSection from '../../components/welcome/BenefitsSection';
import Slider from '../../components/welcome/Slider';
import Footer from '../../components/welcome/Footer';
import DesktopNavigationMenu from '@/components/nav/DesktopNav';

export default function LandingPage() {
  // const t = useTranslations('Landing');
  return(
    <div className='w-full overflow-x-hidden'>
        {/* <Header /> */}
        <DesktopNavigationMenu/>
      <main>
        <MainLandingPage />
        <BenefitsSection />
        <Slider />
      </main>
      <Footer />
    </div>
  );
}
