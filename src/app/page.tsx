// src/app/page.tsx
import Link from 'next/link'
import WhyAfes from '@/components/WhyAfes'
import Testimonials from '@/components/Testimonials'

export default function LandingPage() {
  return (
    <div className="bg-[#001F3F] text-white">
      {/* Main Heading and Subheading */}
      <section className="text-center py-16 px-4">
        <h1 className="text-6xl font-extrabold text-yellow-400">
          AFES
        </h1>
        <p className="text-2xl font-semibold text-gray-300 mt-4">
          (Adamjee Falcon Educational System)
        </p>
      </section>

      {/* Marquee/Moving Message (using Tailwind CSS Animation) */}
      <section className="bg-yellow-400 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="overflow-hidden">
            <p className="text-center text-black font-semibold text-xl animate-marquee">
              Welcome to AFES! Empowering students to achieve their academic and personal goals. Join us for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4">
        <p className="text-lg text-white mb-8">
          At AFES, we are committed to nurturing talent and providing quality education. Start your journey with us today!
        </p>
        <Link
          href="/about"
          className="inline-block px-8 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all"
        >
          Learn More About Us
        </Link>
      </section>
      <WhyAfes />
      <Testimonials />

    </div>
  )
}
