import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    title: "Split the bill",
    text: "Quickly divide the cost and pay your share in seconds.",
    subtext: "No more awkward reminders — just seamless sharing!",
    avatarGroup: true,
    bg: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Instant Payments",
    text: "Send money instantly, with just a few taps.",
    image:
      "./lady-smiling.jpg",
    logo: true,
  },
  {
    title: "Gift a Little Extra",
    text:
      "Whether it’s a birthday, or a job well done gifting has never been this quick.",
    amount: "$250",
    user: "Cassandra Lee",
    userText: "Well done! You did a great job! 🎉",
    userImg: "https://randomuser.me/api/portraits/women/22.jpg",
    bg: "bg-blue-100",
  },
  {
    title: "Save Goals",
    text: "Set a target, track your progress, and celebrate your wins!",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Subscription Control",
    text: "Easily manage and cancel unwanted recurring charges.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Crypto Ready",
    text: "Send and receive crypto with zero complexity.",
    image:
      "https://images.unsplash.com/photo-1611078489935-d88f3a0f40d5?auto=format&fit=crop&w=600&q=80",
  },
];

const Page3_2 = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm text-sky-500 font-medium">Our Features</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Made for You:
        </h2>
        <p className="text-4xl text-gray-500 mt-2 font-medium">
          Easy, Fast, and Smart Payments
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="pb-10"
        >
          {features.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`h-full flex flex-col justify-between rounded-2xl p-6 shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-6 hover:z-20 hover:border-2 hover:border-sky-400 cursor-pointer ${
                  card.bg || "bg-white"
                } ${card.textColor || "text-gray-800"}`}
                style={{ minHeight: "420px" }}
              >
                {/* Avatar Group */}
                {card.avatarGroup && (
                  <div className="flex -space-x-2 mb-4">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt=""
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt=""
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-700 flex items-center justify-center text-white text-sm">
                      +
                    </div>
                  </div>
                )}

                {/* Subtext */}
                {card.subtext && (
                  <p className="text-sm mb-4 text-gray-300">{card.subtext}</p>
                )}

                {/* Image */}
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                )}

                {/* Logo */}
                {card.logo && (
                  <div className="flex justify-center items-center mb-2">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png"
                      alt="BriskPay Logo"
                      className="w-5 h-5 mr-1"
                    />
                    <span className="font-bold text-md">BRISKPAY</span>
                  </div>
                )}

                {/* User Card */}
                {card.user && (
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={card.userImg}
                      alt={card.user}
                    />
                    <div>
                      <p className="text-sm font-medium">{card.user}</p>
                      <p className="text-xs text-gray-600">{card.userText}</p>
                    </div>
                  </div>
                )}
                {card.amount && (
                  <p className="text-3xl font-bold mb-2">{card.amount}</p>
                )}

                {/* Text Section */}
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      
    </section>
  );
};

export default Page3_2;
