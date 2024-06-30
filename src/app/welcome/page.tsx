import {useTranslations} from 'next-intl';
import React from 'react';
import '../../styles/globals.css';
import Header from '../../components/welcome/Header';
import MainLandingPage from '../../components/welcome/Main_landing_page';
import BenefitsSection from '../../components/welcome/BenefitsSection';
import Slider from '../../components/welcome/Slider';
import Footer from '../../components/welcome/Footer';

export default function LandingPage() {
  const t = useTranslations('Landing');
  return(
    <div className="landing-page-body">
        <Header />
      <main>
        <MainLandingPage />
        <BenefitsSection />
        <Slider />
      </main>
      <Footer />
    </div>
  );
}
