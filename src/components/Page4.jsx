import React from 'react';

const countries = {
  Europe: [
    { name: 'France', flag: 'https://flagcdn.com/w40/fr.png' },
    { name: 'Spain', flag: 'https://flagcdn.com/w40/es.png' },
    { name: 'Greece', flag: 'https://flagcdn.com/w40/gr.png' },
    { name: 'Italy', flag: 'https://flagcdn.com/w40/it.png' },
  ],
  Americas: [
    { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
    { name: 'Brazil', flag: 'https://flagcdn.com/w40/br.png' },
    { name: 'Mexico', flag: 'https://flagcdn.com/w40/mx.png' },
    { name: 'Ecuador', flag: 'https://flagcdn.com/w40/ec.png' },
  ],
  'Asia Pacific': [
    { name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png' },
    { name: 'China', flag: 'https://flagcdn.com/w40/cn.png' },
    { name: 'Brunei', flag: 'https://flagcdn.com/w40/bn.png' },
    { name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
  ],
  Africa: [
    { name: 'Ghana', flag: 'https://flagcdn.com/w40/gh.png' },
    { name: 'Niger', flag: 'https://flagcdn.com/w40/ne.png' },
    { name: 'Egypt', flag: 'https://flagcdn.com/w40/eg.png' },
    { name: 'Kenya', flag: 'https://flagcdn.com/w40/ke.png' },
  ],
};

const Page4 = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <p className="text-center text-sm text-sky-500 mb-2 font-medium">
        International Transfers
      </p>
      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-10">
        Send Money Anywhere, Anytime
      </h2>

      <div className="bg-gray-100 rounded-2xl divide-y divide-gray-300">
        {Object.entries(countries).map(([region, items], idx) => (
          <div key={region} className="py-4 sm:py-6 px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <span className="text-sky-500 text-sm sm:text-base font-[400] min-w-[90px] mr-4 transition-colors duration-300">
                {region}
              </span>
              <div className="flex flex-wrap gap-4 flex-1">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm whitespace-nowrap transition-all duration-300 hover:bg-sky-50 hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={item.flag}
                      alt={item.name}
                      className="w-5 h-5 mr-2 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium transition-colors duration-300 hover:text-sky-600">{item.name}</span>
                  </div>
                ))}
              </div>
              <button className="ml-auto flex items-center whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer">
                Show all <span className="text-xl font-bold ml-2">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='mx-auto w-[80%] text-center my-8 text-gray-600 font-[400]'>
        Sending money internationally is as easy as sending it across town. Whether you're helping family abroad, paying for a subscription, or supporting friends in different countries, our fast, secure international transfers make it effortless.
      </div>
      <div className='flex justify-center items-center'>
        <button className='text-white font-[400] px-4 py-2 bg-black rounded-4xl my-3 cursor-pointer transition-all duration-300 transform hover:bg-sky-500 hover:text-white hover:scale-105 hover:shadow-xl hover:-translate-y-1'>
          Send Money
        </button>
      </div>
    </div>
  );
};

export default Page4;
