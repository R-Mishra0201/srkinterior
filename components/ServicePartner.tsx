"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const serviceProviders = [
  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_logo.png",
  },
  {
    name: "Zomato",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flipkart_logo.png",
  },
  {
    name: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg",
  },
];

const ServicePartners = () => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Our Service Partners
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {serviceProviders.map((provider, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-24"
          >
            <div className="relative w-[120px] h-[50px] grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={provider.logo}
                alt={provider.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicePartners;

