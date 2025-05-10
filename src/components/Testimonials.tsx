// src/components/TestimonialsSlider.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    text: 'AFES truly transformed my child’s academic journey.',
    author: '— Parent of Grade 10 Student',
  },
  {
    text: 'The coaching center gave me confidence to crack NEET.',
    author: '— Ali, Medical Aspirant',
  },
  {
    text: 'This is not just a school. It’s a second home.',
    author: '— Community Leader',
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="bg-[#001a33] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">What the Community Says</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-2xl"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#00264d] p-6 md:p-10 shadow-lg rounded-2xl">
                <p className="italic text-sm md:text-base mb-4">{item.text}</p>
                <p className="font-semibold text-yellow-400">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
