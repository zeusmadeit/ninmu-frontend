import React from 'react'
import Image from 'next/image';

const benefits = [
    {
        title: "Set and Track Goals",
        description: "Define your goals and track progress with ease.",
        imageUrl: "/images/man-with-spyglass.gif",
    },
    {
        title: "Celebrate Success",
        description: "Share achievements and celebrate milestones.",
        imageUrl: "/images/celebration.gif",
    },
    {
        title: "Join Exciting Challenges",
        description: "Push your limits with fun challenges.",
        imageUrl: "/images/crossing-finish-line.gif",
    },
    {
        title: "Build Connections",
        description: "Connect with friends and support each other.",
        imageUrl: "/images/connect.gif",
    }
];

const BenefitsSection = () => {
  return (
    <div className="landing-page-benefits-section px-5 md:px-10 min-h-screen text-center flex flex-col justify-center"> 
        <h2 className="text-3xl font-bold mb-4 text-sky-900">BENEFITS</h2>
        <h3 className="text-xl mb-8">Start your journey for achieving more, together !</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex items-end" style={{ height: '150px' }}>
                    <Image src={benefit.imageUrl} alt={benefit.title} width={170} height={170} className="mb-4"/>
                </div>
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-800 text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BenefitsSection;
