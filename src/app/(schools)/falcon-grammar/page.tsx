'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FalconGrammarPage() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const scrollGallery = (id: string, offset: number) => {
    const container = document.getElementById(`${id}-gallery`)
    if (container) container.scrollLeft += offset
  }

  const imageSources: Record<string, string[]> = {
    introduction: ['f1.jpeg', 'f3.jpeg', 'f4.jpeg', 'f5.jpeg'],
    montessori: ['f2.jpeg', 'mont1.jpeg','mont2.jpg','mont3.jpg'],
    primary: ['prm1.jpeg','prm2.jpeg'],
    secondary: ['sec1.jpeg','sec2.jpeg','sec3.jpeg'],
    'science-lab': ['sci1.jfif','sci2.jfif','sci3.jfif','sci4.jfif'],
    library: ['lib1.jpeg', 'lib2.jpeg'],
    'computer-lab': ['comp1.jpeg'],
    'sports-day': ['sd1.jpeg', 'sd2.jpeg', 'sd3.jpeg', 'sd4.jpeg', 'sd5.jpeg', 'sd6.jpeg'],
    'cricket-tournament': ['cric1.jpeg', 'cric2.jpeg','cric3.jpg'],
    ptm: ['ptm3.jfif','ptm1.jpg','ptm2.jfif','ptm4.jfif','ptm5.jfif'],
  }

  const imageGallery = (id: string) => {
    const images = imageSources[id] || []
    const placeholdersToShow = images.length ? 0 : 4

    return (
      <div className="relative mt-4">
        <button
          onClick={() => scrollGallery(id, -300)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#800000] text-white p-2 rounded-l z-10"
        >
          ‹
        </button>
        <div
          id={`${id}-gallery`}
          className="flex overflow-x-auto scroll-smooth space-x-4 p-2"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[250px] h-[300px] flex-shrink-0 rounded shadow overflow-hidden"
            >
              <Image
                src={`/${src}`}
                alt={`${id} image ${idx + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
          {[...Array(placeholdersToShow)].map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="w-[250px] h-[300px] bg-gray-200 flex items-center justify-center rounded shadow flex-shrink-0"
            >
              <span className="text-gray-500">Image {i + 1}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollGallery(id, 300)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#800000] text-white p-2 rounded-r z-10"
        >
          ›
        </button>
      </div>
    )
  }

  const sectionContent = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Established in 1984, Falcon Grammar School has been a cornerstone of quality education for over four decades. We take immense pride in serving a diverse student body from all walks of life, offering a nurturing environment where academic excellence meets character building — all at a highly affordable fee structure.

At Falcon, education goes beyond textbooks. Our activity-based learning approach fuels curiosity and creativity in students across all three core levels: Montessori, Primary, and Secondary. We are proudly affiliated with the Board of Secondary Education Karachi and Ziauddin Board, ensuring that our curriculum remains recognized, credible, and forward-focused.

As a testament to our academic standards and integrity, we have served as an official examination center for the Karachi Board for the last five years — a rare distinction among private institutions.

Whether it's cultivating young minds in early years or preparing teenagers for board examinations, Falcon Grammar School stands as a beacon of knowledge, discipline, and opportunity.`,
    },
    {
      id: 'montessori',
      title: 'Montessori Section',
      content: `At Falcon Grammar School, our Montessori program nurtures the natural curiosity of young learners through a warm, playful, and interactive environment. With a focus on hands-on exploration, sensory activities, and structured freedom, we help children develop independence, focus, motor skills, and early literacy and numeracy — all while instilling values of kindness, respect, and confidence.

Every classroom is designed to feel like a second home — bright, colorful, and full of purpose — where each child is encouraged to explore at their own pace under the careful guidance of our trained Montessori staff.

`,
    },
    {
      id: 'primary',
      title: 'Primary Section',
      content: `Our Primary Section bridges playful learning with foundational academics. With a balanced blend of subject mastery and personal development, we ensure that students build strong reading, writing, math, and communication skills while also engaging in co-curricular and team-based activities that shape their emotional and social growth.

The curriculum is designed to spark curiosity and imagination, with a focus on conceptual clarity rather than rote learning. Here, students are not just taught — they are inspired to learn.`,
    },
    {
      id: 'secondary',
      title: 'Secondary Section',
      content: `The Secondary Section at Falcon Grammar School is where potential turns into performance. We prepare students for board examinations with a sharp academic focus while still supporting creativity, discipline, and individuality.

Our experienced subject-specialist teachers guide students through all science, arts, and commerce subjects in a rigorous yet supportive environment. Special exam strategies, career counseling, and board-paper drills ensure students are confident, capable, and board-ready.

`,
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      content: `Our fully equipped Science Lab offers students an immersive environment to explore, experiment, and truly understand the laws of nature. From hands-on experiments in physics and chemistry to biological observations under modern microscopes, students develop practical scientific thinking that goes beyond theory.

Safety is always a top priority, and each lab session is supervised by qualified instructors to ensure responsible and meaningful learning. We believe in learning by doing — and our lab proves it every day.`,
    },
    {
      id: 'library',
      title: 'Library',
      content: `Our school library is more than just shelves of books — it’s a quiet sanctuary where imagination thrives and minds expand. Stocked with a rich collection of academic texts, storybooks, reference materials, and general knowledge resources, the library nurtures a lifelong love for reading and research.

Students are encouraged to explore beyond their syllabus, develop independent learning habits, and sharpen their comprehension and critical thinking skills in a calm, supervised environment. Regular reading hours and library activities foster literacy and self-confidence in every student.`,
    },
    {
      id: 'computer-lab',
      title: 'Computer Lab',
      content: `Falcon Grammar School’s Computer Lab empowers students with digital literacy skills that are essential for the modern world. Equipped with up-to-date systems and internet access, the lab provides hands-on experience in basic computing, coding fundamentals, and academic research.

Our trained instructors guide students through interactive lessons in typing, programming logic, presentation design, and safe internet use — preparing them to thrive in a tech-driven future. We ensure that every student gets a head start in navigating the digital landscape with confidence and creativity.`,
    },
    {
      id: 'sports-day',
      title: 'Sports Day',
      content: `At Falcon Grammar School, we believe in the power of physical activity to shape well-rounded individuals. Sports Day is a highly anticipated event, where students showcase their athletic skills, teamwork, and school spirit. It is not only a day for competition but also for building discipline, leadership, and resilience.

This event allows students to step out of the classroom and demonstrate their abilities in various sports, fostering a sense of pride and accomplishment. More than just physical development, Sports Day teaches valuable life skills like perseverance, goal-setting, and time management.

Why Falcon Grammar School Values Sports Day:
At Falcon Grammar, we emphasize holistic student development. Sports Day provides an opportunity for students to embrace challenges, work together, and cultivate a healthy lifestyle. Success is measured not just by winning but by developing confidence, learning from setbacks, and building strong relationships with peers.

By prioritizing events like Sports Day, we encourage students to grow both physically and mentally, equipping them with the skills needed to excel in all areas of life.`,
    },
    {
      id: 'cricket-tournament',
      title: 'Cricket Tournament',
      content: `At Falcon Grammar School, we recognize the importance of sports in fostering personal growth and teamwork. Our Cricket Tournament is one of the most exciting events, where students come together to showcase their skills, strategy, and sportsmanship. It’s not just about competition, but about creating lasting memories and building character.

The tournament provides an excellent platform for students to develop leadership qualities, teamwork, and discipline. It encourages students to work collaboratively towards a common goal, enhancing their ability to communicate and problem-solve under pressure. Whether playing on the field or supporting their teammates, students learn the value of perseverance and resilience.`,
    },
    {
      id: 'ptm',
      title: 'PTM (Parent Teacher Meeting)',
      content: `At Falcon Grammar School, we believe that education is a shared journey between students, teachers, and parents. Our Parent-Teacher Meetings (PTM) play a crucial role in creating a strong partnership that supports the academic and personal growth of our students.

PTMs provide a valuable opportunity for parents to connect with teachers, discuss their child’s progress, and gain insight into their strengths and areas for improvement. These meetings foster open communication, ensuring that both parents and teachers are aligned in their efforts to help each student thrive.

Why Falcon Grammar School Values PTM:
We understand that the best outcomes are achieved when parents and teachers work together. PTMs allow us to address any concerns, celebrate achievements, and set future goals for each student. At Falcon Grammar, we prioritize individualized attention and tailored support, and PTMs are a key part of ensuring that every student receives the guidance they need to succeed academically and socially.

Through PTMs, we reinforce the importance of collaboration, creating a community where students can flourish in a supportive and nurturing environment.`,
    },
  ]

  const normalSections = sectionContent.slice(0, 7)
  const eventSections = sectionContent.slice(7)

  return (
    <main className="bg-white text-gray-800">
      {/* Top Section */}
      <section className="flex items-center p-6 bg-[#800000] text-white">
        <Image
          src="/falconlogo.jpg"
          alt="Falcon Grammar School Logo"
          width={80}
          height={80}
          className="mr-4 rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Falcon Grammar School</h1>
          <p className="text-sm italic">Building Better Personalities Since 1984</p>
        </div>
      </section>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md p-3 flex gap-4 justify-center text-[#800000] font-semibold">
        {normalSections.map(({ id }) => (
          <button
            key={id}
            className="hover:text-black transition"
            onClick={() => scrollToSection(id)}
          >
            {id.replace(/-/g, ' ').toUpperCase()}
          </button>
        ))}
        <div className="relative group">
          <button className="hover:text-black transition">
            EVENTS ▼
          </button>
          <div className="absolute hidden group-hover:block bg-white border shadow mt-1 text-sm w-40">
            {eventSections.map(({ id }) => (
              <button
                key={id}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => scrollToSection(id)}
              >
                {id.replace(/-/g, ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="space-y-12 p-6 max-w-5xl mx-auto">
        {[...normalSections, ...eventSections].map(({ id, title, content }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl shadow-lg border border-gray-200 bg-white"
          >
            <h2 className="text-2xl font-bold text-[#800000] mb-2">{title}</h2>
            <p className="text-black whitespace-pre-line">{content}</p>
            {imageGallery(id)}
          </motion.section>
        ))}
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#800000] text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition"
        >
          ↑
        </button>
      )}
    </main>
  )
}
