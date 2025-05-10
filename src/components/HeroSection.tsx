// src/components/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="text-center py-32 bg-[#001F3F]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400">
        Welcome to AFES Educational Institute
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white">
        Empowering the next generation through quality education and holistic development.
      </p>
      <div className="mt-8">
        <Link
          href="/about"
          className="inline-block px-8 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
