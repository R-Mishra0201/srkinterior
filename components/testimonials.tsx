"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner",
    rating: 5,
    quote: "SRK Interiors transformed my house into a luxurious space!",
  },
  {
    name: "Neha Agarwal",
    role: "Interior Blogger",
    rating: 4,
    quote: "Blown away by the professionalism and elegant design touches!",
  },
  {
    name: "Rohit Verma",
    role: "Tech Executive",
    rating: 5,
    quote: "Delivered beyond expectations. The kitchen design stands out!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">What Our Clients Say</h2>

      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop={true}
          dir="rtl"
          navigation
          pagination={{ clickable: true }}
          className="rounded-2xl shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white rounded-xl text-center">
                <p className="text-xl italic text-gray-700 mb-6">“{testimonial.quote}”</p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
