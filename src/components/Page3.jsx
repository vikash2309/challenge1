import React from "react";

const Page3 = () => {
  return (
    <section className="bg-gray-50 py-8 px-4 md:px-30">
      {/* Title Section */}
      <div className="text-center mb-14">
        <p className="text-sm text-sky-500 font-medium">Our Features</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Made for You:
        </h2>
        <p className="text-4xl text-gray-400 mt-2 font-bold">
          Easy, Fast, and Smart Payments
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {/* Split the Bill Card */}
        <div className="bg-black text-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <div>
            <div className="flex -space-x-2 mb-4">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="avatar3"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-700 flex items-center justify-center text-white text-sm">
                +
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              No more awkward reminders — just seamless sharing!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Split the bill</h3>
            <p className="text-sm text-gray-400">
              Whatever it is, you can quickly divide the cost and pay your
              share in seconds.
            </p>
          </div>
        </div>

        {/* Instant Payments Card */}
        <div className="bg-white rounded-2xl p-6 text-center shadow-md border-1 border-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <div className="flex justify-center mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png"
              alt="BriskPay Logo"
              className="w-6 h-6 mr-2"
            />
            <span className="text-black font-bold text-lg">BRISKPAY</span>
          </div>
          <img
            src="./lady-smiling.jpg"
            alt="Instant Payments"
            className="w-full h-68 object-cover rounded-xl mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
          <p className="text-sm text-gray-600">
            Need to pay a friend back? Send money instantly, with just a few
            taps.
          </p>
        </div>

        {/* Gift a Little Extra Card */}
        <div className="bg-blue-100 rounded-2xl p-6 shadow-sm text-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <div className="flex items-center space-x-3 mb-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="Cassandra Lee"
            />
            <div>
              <p className="text-sm font-medium">Cassandra Lee</p>
              <p className="text-xs text-gray-600">
                Well done! You did a great job! 🎉
              </p>
            </div>
          </div>
          <p className="text-3xl font-bold mb-4">$250</p>
          <h3 className="text-xl font-semibold mb-1">Gift a Little Extra</h3>
          <p className="text-sm text-gray-700">
            Whether it’s a birthday, or a job well done gifting has never been
            this quick.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page3;
