import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Engagement from '../assets/images/Engagement.svg';
import Background from '../assets/images/Background.svg';

const allPlans = [
  {
    price: '$25',
    period: 'Month',
    features: [
      { text: 'Rate up to 50 profiles per day', included: true },
      { text: 'Explore limited profiles', included: true },
      { text: '0 Credit / Month', included: true },
      { text: 'Rewinds', included: false },
      { text: 'Browse Privately', included: false },
      { text: 'See who’s viewed your profile', included: false },
    ],
    bgColor: 'bg-white',
    buttonColor: 'bg-[#F05A8E] text-white',
  },
  {
    price: 'Free',
    period: 'Month',
    features: [
      { text: 'Rate up to 50 profiles per day', included: true },
      { text: 'Explore limited profiles', included: true },
      { text: '0 Credit / Month', included: true },
      { text: 'Rewinds', included: false },
      { text: 'Browse Privately', included: false },
      { text: 'See who’s viewed your profile', included: false },
    ],
    bgColor: 'bg-gradient-to-b from-[#F05A8E] to-[#ED1C24]',
    buttonColor: 'bg-white text-[#ED1C24]',
  },
  {
    price: '$75',
    period: 'Month',
    features: [
      { text: 'Rate up to 50 profiles per day', included: true },
      { text: 'Explore limited profiles', included: true },
      { text: '0 Credit / Month', included: true },
      { text: 'Rewinds', included: true },
      { text: 'Browse Privately', included: true },
      { text: 'See who’s viewed your profile', included: true },
    ],
    bgColor: 'bg-white',
    buttonColor: 'bg-[#F05A8E] text-white',
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const filteredPlans = isMonthly ? allPlans : allPlans.filter((plan) => plan.price === 'Free');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Engagement Image with Overlay Text */}
      <div className="relative w-full">
  {/* Background Image */}
  <img src={Engagement} alt="Engagement" className="w-full h-auto object-cover" />

  {/* Overlay Text */}
  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
  <h1
    className="text-6xl font-serif font-Rosarivo lowercase"
    style={{ fontVariant: "small-caps" }}
  >
    Login
  </h1>
  <p className="text-lg mt-2 font-poppins leading-6">Now Find your life partner Easy and fast.</p>



    {/* <p className="text-lg mt-2">Now Find your life partner Easy and fast.</p> */}
</div>
</div>


      {/* Pricing Section */}
      <div className="relative flex flex-col items-center min-h-screen p-6">
        <img src={Background} alt="Background" className="absolute w-full h-full object-cover" />
        <h1 className="text-2xl md:text-3xl mt-8 font-Raleway text-center mb-6 z-10">
          Choose The Perfect Plan
        </h1>

        {/* Toggle Switch */}
        <div className="z-10 flex items-center justify-center mb-6">
          <div className="flex bg-[#F9C58B40] rounded-full p-1 w-64 shadow-md">
            <button
              className={`w-1/2 py-2 text-sm md:text-lg font-semibold rounded-full transition-all duration-300 ${
                isMonthly ? 'bg-[#F05A8E] text-white shadow' : 'text-[#C1645C]'
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly Plans
            </button>
            <button
              className={`w-1/2 py-2 text-sm md:text-lg font-semibold rounded-full transition-all duration-300 ${
                !isMonthly ? 'bg-[#F05A8E] text-white shadow' : 'text-gray-700'
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Special Plans
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 w-[60vw] h-[60 vw] max-w-6xl">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className={`border p-6 rounded-lg shadow-lg ${plan.bgColor} bg-opacity-90 text-center w-full`}
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                {plan.price} <span className="text-lg">/ {plan.period}</span>
              </h2>
              <h3 className="text-lg md:text-xl font-semibold mt-4">Features</h3>
              <ul className="mt-2 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center text-gray-600 text-sm md:text-base">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full ${feature.included ? 'bg-green-500' : 'bg-red-500'}`}>
                      {feature.included ? '✔' : '✖'}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => alert(`You selected ${plan.price} plan!`)}
                className={`mt-6 rounded-full font-bold py-2 px-4 w-full text-sm md:text-base ${plan.buttonColor}`}
              >
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
