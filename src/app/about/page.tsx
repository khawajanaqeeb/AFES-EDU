// src/app/about/page.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <div>
      {/* Introduction Section */}
<section className="py-20 px-4 bg-[#001a33]">
  <div className="max-w-6xl mx-auto">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#00264d] p-10 rounded-2xl shadow-xl border border-yellow-400/30 hover:shadow-yellow-400/50"
    >
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">
        Welcome to AFES
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed text-justify">
        AFES warmly welcomes you to a place where education inspires excellence and students are empowered to thrive. 
        As a leading educational system in the locality, AFES proudly operates two renowned schools and two well-established coaching centers, 
        all driven by a shared mission to deliver top-tier education in a nurturing environment.
        <br /><br />
        Our campuses are affiliated with the <strong>Board of Secondary Education Karachi</strong> and <strong>Ziauddin Examination Board</strong>, 
        and are also recognized centers for official Karachi Board examinations—highlighting our position as a trusted name in education.
        <br /><br />
        In addition, our coaching centers operate under the academic framework of the <strong>Adamjee Coaching Head Office</strong>, 
        offering structured, results-focused preparation for board and entrance exams.
        <br /><br />
        At AFES, education goes beyond textbooks. We cultivate intellect, character, and confidence—equipping every learner with the tools they need 
        to succeed in academics and beyond.
      </p>
    </motion.div>
  </div>
</section>


      {/* Partners Section */}
<section className="py-16 px-4 bg-[#001a33]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
      Meet the Visionary Directors & Founders of AFES
    </h2>

    {/* Partner 1 */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 flex flex-col md:flex-row items-center gap-10 bg-[#00264d] p-8 rounded-xl shadow-lg border border-yellow-400/30 hover:shadow-yellow-400/40"
    >
      <div className="shrink-0">
        <Image
          src="/m-h.jpg"
          alt="Dr. Mustufa Haider"
          width={240}
          height={240}
          className="rounded-full border-4 border-yellow-400 object-cover"
        />
      </div>
      <div className="text-justify max-w-3xl text-lg text-gray-300 leading-relaxed">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Dr. Mustufa Haider</h3>
        <p>
          <strong>CEO & Co-founder, AFES</strong><br />
          <strong>Faculty & Researcher, Department of Public Administration, University of Karachi</strong><br /><br />
          Sir Mustufa Haider is a distinguished academician and visionary educationist, serving as the CEO and Co-founder of AFES. He holds a Ph.D. in Public Administration and is currently an Assistant Professor and researcher at the University of Karachi. With expertise in social, administrative, and management sciences, he brings academic depth and strategic foresight to the institute.
          <br /><br />
          As the principal architect of AFES academic planning, Sir Mustufa plays a pivotal role in designing the curriculum, maintaining teaching standards, and driving long-term educational goals. His research-driven vision ensures every initiative is purposeful and progressive.
          <br /><br />
          His leadership blends innovation and insight. Under his guidance, AFES grows as a modern institution focused on quality education, discipline, and social responsibility. His mentorship continues to inspire excellence and academic integrity at every level.
        </p>
      </div>
    </motion.div>

    {/* Partner 2 */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10 flex flex-col md:flex-row items-center gap-10 bg-[#00264d] p-8 rounded-xl shadow-lg border border-yellow-400/30 hover:shadow-yellow-400/40"
    >
      <div className="shrink-0">
        <Image
          src="/zafar1.png"
          alt="Sir Zafar Ahmed"
          width={240}
          height={240}
          className="rounded-full border-4 border-yellow-400 object-cover"
        />
      </div>
      <div className="text-justify max-w-3xl text-lg text-gray-300 leading-relaxed">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Sir Zafar Ahmed</h3>
        <p>
          <strong>Principal & Co-founder, AFES</strong><br /><br />
          Sir Zafar Ahmed stands as the backbone of AFES — a visionary leader whose dedication and determination have shaped the foundation of the institution. He holds an MBA and a Master’s in Education (M.Ed.), combining educational insight with strong administrative acumen.
          <br /><br />
          With decades of experience in managing and elevating educational institutions, Sir Zafar is known for his structured leadership and result-oriented strategies. His guidance ensures the daily functioning and long-term discipline of the academic environment.
          <br /><br />
          A passionate mentor and motivator, he fosters a culture of respect, academic excellence, and character building. He envisions AFES as a proud institution where every student is empowered, confident, and prepared for future success.
          <br /><br />
          Sir Zafar Ahmed’s mission is to lead AFES to new heights of pride and prestige. His devotion, resilience, and vision continue to inspire the entire academic community to push boundaries and achieve greatness.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* Mission and Vision Section */}
<section className="py-20 px-4 bg-[#001a33]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
      Our Mission & Vision
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Mission */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#00264d] p-8 rounded-xl shadow-lg border border-yellow-400/30 hover:shadow-yellow-400/40"
      >
        <h3 className="text-3xl font-semibold text-yellow-400 mb-6">Mission</h3>
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          Our mission is to provide an inclusive, quality-driven education system that nurtures creativity, critical thinking, and holistic development. 
          We are committed to shaping the leaders of tomorrow through academic excellence, practical knowledge, and character building. 
          At AFES, we believe in empowering students to thrive in a competitive world while staying grounded in values and community spirit.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#00264d] p-8 rounded-xl shadow-lg border border-yellow-400/30 hover:shadow-yellow-400/40"
      >
        <h3 className="text-3xl font-semibold text-yellow-400 mb-6">Vision</h3>
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          Our vision is to become a leading educational institution known for excellence, innovation, and ethical practices. 
          We strive to create a future-focused learning environment where students are empowered with the skills, knowledge, and confidence 
          to succeed in a rapidly evolving world. Through compassion, discipline, and determination, we aim to foster integrity, respect, and lifelong learning.
        </p>
      </motion.div>
    </div>
  </div>
</section>

    </div>
  )
}
