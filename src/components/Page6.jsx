import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

const footerLinks = {
  Company: [
    'About us',
    'Office',
    'Annual Report',
    'Shareholder',
    'Sustainability',
    'Code of Conduct',
  ],
  Feature: [
    'Split Bill',
    'Smart Wallet',
    'Savings',
    'Pay in 4',
    'International transfer',
    'Internship',
  ],
  Career: [
    'Careers',
    'Culture',
    'Talent Programmes',
    'Diversity',
    'Internship',
  ],
  Accounts: [
    'Join Account',
    'Savings',
    'Freelance',
    'Plan',
    'Education',
  ],
  LIFESTYLE: [
    'Shop',
    'Insurance',
    'Donations',
    'eSIM',
    'Points',
  ],
};

const Page6 = () => {
  return (
    <div className="bg-black text-white pt-12 pb-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-center text-sm text-sky-500 mb-1">Unlock the Future of Payments:</p>
      <h2 className="text-center text-3xl sm:text-4xl font-semibold">
        Start Sending Money, Saving Smart, and
      </h2>
      <h3 className="text-center text-3xl sm:text-4xl text-gray-500 font-semibold mb-6">
        Taking Control of Your Finances!
      </h3>
      <div className="flex justify-center gap-4 mb-16">
        <button className=" cursor-pointer bg-white text-black px-6 py-2 rounded-full font-medium text-sm transition hover:scale-105">
          Learn more
        </button>
        <button className=" cursor-pointer border border-white text-white px-6 py-2 rounded-full font-medium text-sm transition hover:scale-105">
          Get the app
        </button>
      </div>

      <hr className="border-gray-700 mb-8" />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">BRISKPAY</h4>
          <p className="text-sm text-gray-300 mb-4">
            Designed for the next generation, Briskpay makes managing your money effortless.
          </p>
          <div className="flex gap-4">
            <FaYoutube className= "cursor-pointer text-sky-400 text-xl hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer text-sky-400 text-xl hover:scale-110 transition" />
            <FaFacebookF className="cursor-pointer text-sky-400 text-xl hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer text-sky-400 text-xl hover:scale-110 transition" />
          </div>
        </div>

        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h5 className="text-sm font-semibold text-gray-400 mb-4 uppercase">{section}</h5>
            <ul className="space-y-2">
              {links.map((link) => (
                <li
                  key={link}
                  className="text-sm text-white hover:text-sky-400 transition cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
