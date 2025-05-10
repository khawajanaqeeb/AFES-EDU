// src/components/WhyAfes.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const features = [
  {
    title: 'Experienced Faculty',
    description: 'Our teachers are highly qualified, passionate, and committed to student success.',
  },
  {
    title: 'Comprehensive Programs',
    description: 'We offer a well-rounded curriculum in both schools and coaching centers.',
  },
  {
    title: 'Proven Track Record',
    description: 'Our students consistently achieve top results in board and competitive exams.',
  },
  {
    title: 'Focus on Values',
    description: 'We blend academic excellence with character-building and discipline.',
  },
  {
    title: 'Modern Facilities',
    description: 'Smart classrooms, labs, and digital learning environments for better engagement.',
  },
];

export default function WhyAfes() {
  return (
    <section className="bg-[#001a33] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">Why AFES?</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          className="rounded-2xl"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#00264d] p-6 md:p-10 shadow-lg rounded-2xl">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
