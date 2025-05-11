'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'



export default function Adamjee24() {
  const [showScroll, setShowScroll] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    introduction: ['a-g2.png'],
    courses: ['c1.jpg','c2.jpg','c3.jpg'],
    admissions: ['a-g1.jpg'],
    faculty: ['fcl2.jpg'],
    ptm: ['a-ptm1.jpg','a-exm1.jpg','a-exm2.jpg','a-exm3.jpg','a-exm4.jpg'],
    'cricket-tournament': ['adcric1.jpg'],
    'annual-function': ['frl1.jpeg','frl2.jpg','frl3.jpg','frl4.jpg','frl5.jpg'],
  }

  const sectionContent = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Adamjee Coaching Centre is a prominent educational institution in Karachi, Pakistan, known for preparing students for board examinations. It operates as a large network of coaching centers, with multiple campuses across the city. Established 32 years ago, it aims to provide effective education and prepare students for the challenges of the modern world, focusing on methodical teaching strategies. The center is recognized for the strong performance of its students, with many achieving high grades and maintaining positions in their classes.
    
    Adamjee Coaching Center – Campus 24 has proudly served as a part of the esteemed Adamjee Coaching Group for the past 10 years. This campus follows the same high standards of education and academic discipline as recommended by the Head Office.
    
    Conveniently located in the central hub of Federal B. Area, Campus 24 is easily reachable via all major public transport routes, making it highly accessible for students across Karachi.
    
    Campus 24 offers the following features and facilities:
    
    • Well-furnished, spacious, and airy classrooms  
    • Prime location in F.B. Area with easy access  
    • Located on the route of multiple public transport lines  
    • CCTV surveillance and professional security guards  
    • Student ID card scanning system for attendance tracking  
    • Clean drinking water available across campus  
    • Well-maintained food canteen  
    • Separate classrooms for boys and girls  
    • Dedicated party area for events and student celebrations  
    
    In addition to these facilities, Campus 24 is known for:
    
    • Highly experienced and qualified faculty  
    • Friendly and interactive classroom environment  
    • Emphasis on student participation and conceptual clarity  
    `
    },
    
    {
      id: 'courses',
      title: 'Courses Offered',
      content: `Adamjee Coaching Center – Campus 24 offers a comprehensive range of academic programs designed to support students at every stage of their educational journey. Our structured courses cater to various academic levels, ensuring quality guidance and subject-specific instruction from experienced faculty members.
    
    We provide group coaching for students from Grade 1 to 8, focusing on foundational learning and concept-building in all core subjects.
    
    For higher classes, we offer specialized coaching in the following academic streams:
    
    • Classes 9th and 10th:
      – Science Group  
      – Commerce Group  
      – Arts Group
    
    • Intermediate (11th and 12th):
      – Pre-Medical  
      – Pre-Engineering  
      – Commerce  
      – Humanities / Arts
    
    • Undergraduate Programs:
      – B.A / B.Sc  
      – B.Com  
      – BBA / BS Programs
    
    • Master’s Level Coaching:
      – M.A / M.Sc  
      – M.Com  
      – MBA and other postgraduate disciplines
    
    Each course is tailored to match the curriculum standards of respective educational boards and universities, ensuring exam-focused preparation and conceptual clarity. With experienced subject specialists, modern teaching methods, and regular assessments, Campus 24 maintains its reputation for academic excellence across all levels.`
    },

    {
      id: 'admissions',
      title: 'Admission Policy',
      content: `At Adamjee Coaching Center – Campus 24, our admission policy is designed to be inclusive, fair, and merit-based, allowing every student the opportunity to benefit from quality education.
    
    • Admissions are open to all students without any discrimination.  
    • The fee structure is kept reasonable and affordable to ensure accessibility for all socio-economic groups.  
    • Every applicant is required to appear for an admission test. The test helps evaluate the student's current academic standing and determines the level of support and attention they may require.  
    • Based on the test results, students are guided appropriately to ensure they receive the focus needed to excel.
    
    We also offer scholarship opportunities to encourage high achievers and deserving students:
    
    • Students who have secured **80% or above marks** in their previous examinations are eligible for **merit-based scholarships**.  
    • Special scholarships are also available for **Hafiz-e-Quran** students as a token of respect and encouragement for their dedication.
    
    Our goal is to make quality education attainable for all, while recognizing and supporting academic excellence and religious commitment.`
    },

    {
      id: 'faculty',
      title: 'Our Faculty',
      content: `At Adamjee Coaching Center – Campus 24, our strength lies in our exceptional faculty team. Every department is led by highly qualified and experienced educators who are committed to nurturing academic excellence across all levels and disciplines.
    
    We provide specialized and focused instruction across the following sections:
    
    • **Junior Section (Group Tuition – Classes 1 to 8):**  
      Our junior section offers group tuition for students from Class 1 to 8, focusing on strong concept-building in Mathematics, English, Science, and Urdu. Our experienced teachers use engaging and age-appropriate methods to lay a solid academic foundation in a friendly and supportive environment.
    
    • **Science Section:**  
      Staffed with expert instructors in Physics, Chemistry, Biology, and Mathematics, the science section prepares students of Classes 9 to 12 for board exams through concept-based learning, practical examples, and regular assessments.
    
    • **Commerce Section:**  
      Our commerce faculty includes specialists in Accounting, Business Math, Economics, and Principles of Commerce. With practical teaching approaches and exam-focused guidance, we ensure our students are fully prepared for success in board and professional exams.
    
    • **Arts Section:**  
      Adamjee Coaching Center – Campus 24 is the **pioneer and leading branch** among all Adamjee centers—and across Karachi—in delivering **top-quality Arts faculty education**. We have set a benchmark with expert teachers in subjects such as Civics, Education, Islamic Studies, Pakistan Studies, and Urdu Literature. Our focus is on critical thinking, structured writing, and complete exam readiness.
    
    Key features of our faculty include:
    
    • Highly experienced teachers with deep subject expertise  
    • Strong alignment with board syllabi and examination trends  
    • Student-centric teaching with regular feedback and guidance  
    • Use of modern instructional tools, visual aids, and revision techniques  
    • A supportive, disciplined, and motivating classroom atmosphere
    
    Campus 24 continues to uphold the tradition of excellence in all streams of education while setting new standards, particularly in the field of Arts education. Our faculty remains at the heart of our students’ consistent success.`
    }
    ,
    {
      id: 'ptm',
      title: 'Parent-Teacher Meetings (PTM)',
      content: `At Adamjee Coaching Center – Campus 24, we strongly believe in building a collaborative relationship between parents, teachers, and students. Regular Parent-Teacher Meetings (PTMs) are an integral part of our academic system.
    
    These meetings provide an opportunity for:
    
    • Discussing each student’s academic performance, behavior, and progress  
    • Identifying areas that require improvement or special attention  
    • Sharing feedback from teachers and suggestions for at-home support  
    • Addressing parental concerns or questions directly with faculty  
    • Strengthening trust and communication between home and school
    
    PTMs are held at regular intervals throughout the academic session. We also encourage parents to schedule individual meetings with teachers whenever needed to stay actively involved in their child’s educational journey.
    
    Our goal is to create a transparent, supportive, and engaging environment that fosters the all-round development of every student through joint efforts from both educators and parents.`
    },

    {
      id: 'cricket-tournament',
      title: 'Cricket Tournament',
      content: `At Adamjee Coaching Center – Campus 24, we believe in the holistic development of our students—both academically and physically. Our annual Cricket Tournament is one of the most anticipated events of the year, bringing excitement, teamwork, and sportsmanship into action.
    
    The tournament is organized to:
    
    • Promote physical fitness, healthy competition, and team spirit  
    • Encourage leadership and strategic thinking among students  
    • Provide a recreational break from academic routine  
    • Build camaraderie and a sense of belonging within the campus community
    
    The event includes:
    
    • Team registrations from all classes (Junior to Senior Levels)  
    • Professional umpires and well-maintained sports equipment  
    • A knockout format with league matches leading to semi-finals and finals  
    • Trophies, medals, and certificates for winning teams and best performers  
    • Special cheer zones and student-hosted commentary for added excitement
    
    Our Cricket Tournament is more than just a game—it’s a celebration of energy, unity, and the balanced approach to student life that Campus 24 proudly upholds.`
    },

    {
      id: 'annual-function',
      title: 'The Annual Function',
      content: `The **Annual Function** at Adamjee Coaching Center – Campus 24 is our biggest and most celebrated event of the year, bringing together students, parents, teachers, and the wider community for an unforgettable evening of performances, awards, and celebration.
    
    This grand event is designed to:
    
    • Showcase the talents and achievements of our students across various disciplines  
    • Celebrate academic and extracurricular excellence in a festive atmosphere  
    • Strengthen the bond between students, parents, and faculty  
    • Recognize outstanding student performance with awards and certificates  
    • Provide a platform for cultural expression, including music, drama, and dance performances
    
    The **Annual Function** includes:
    
    • **Dramatic Performances & Skits** – Students display their acting, scripting, and creative skills in a series of engaging performances.  
    • **Cultural Dance & Music** – A vibrant celebration of local and international cultures through music and dance routines.  
    • **Awards Ceremony** – Top achievers in academics, sports, and extracurricular activities are honored with medals, trophies, and certificates.  
    • **Teacher-Student Appreciation** – The relationship between teachers and students is further strengthened during this event, as students express their gratitude by giving **titles and gifts** to their teachers. This gesture symbolizes the respect and admiration that students have for their educators.  
    • **Teacher Recognition** – The management also acknowledges and celebrates the relentless efforts and dedication of our faculty members, recognizing them for their invaluable contribution to student success.  
    • **Bright Student Awards** – The brightest students from each faculty—Science, Commerce, and Arts—receive special **awards and gifts** from both teachers and the management as a token of appreciation for their hard work, discipline, and excellence in their respective subjects.  
    • **Guest Speeches & Acknowledgements** – Prominent personalities and guests from the education and local community address the gathering.  
    • **Refreshments & Party Area** – A fun-filled social gathering with food, drinks, and entertainment for everyone involved.
    
    This much-awaited event marks the culmination of a year’s hard work, creativity, and dedication, fostering a sense of pride and accomplishment within the entire Adamjee Coaching Center community. It’s an occasion where memories are made, achievements are celebrated, and the spirit of unity is strengthened.`
    }
    
  ]

  const imageGallery = (id: string) => {
    const images = imageSources[id] || []
    const placeholdersToShow = images.length ? 0 : 4

    return (
      <div className="relative mt-4">
        <button
          onClick={() => scrollGallery(id, -300)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#040651] text-white p-2 rounded-l z-10"
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
              className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[280px] md:h-[300px] flex-shrink-0 rounded shadow overflow-hidden"
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#040651] text-white p-2 rounded-r z-10"
        >
          ›
        </button>
      </div>
    )
  }

  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row items-center gap-4 p-4 sm:p-6 bg-[#040651] text-[#fff500] text-center md:text-left">
        <Image
          src="/a-logo.jfif"
          alt="Adamjee Logo"
          width={80}
          height={80}
          className="mr-4 rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Adamjee Coaching Center</h1>
          <p className="text-sm italic">Best in Coaching</p>
        </div>
      </section>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-500 shadow-md p-3 text-white font-semibold">
  <div className="flex justify-between items-center">
    {/* Burger Icon */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setMobileMenuOpen(prev => !prev)}
    >
      ☰
    </button>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-4 justify-center flex-grow">
      {sectionContent.map(({ id }) => (
        <button
          key={id}
          className="hover:text-yellow-500 transition"
          onClick={() => scrollToSection(id)}
        >
          {id.replace(/-/g, ' ').toUpperCase()}
        </button>
      ))}
    </div>
  </div>

  {/* Mobile Dropdown */}
  {mobileMenuOpen && (
    <div className="flex flex-col mt-2 md:hidden gap-2">
      {sectionContent.map(({ id }) => (
        <button
          key={id}
          className="hover:text-yellow-400 px-2 text-left"
          onClick={() => {
            scrollToSection(id)
            setMobileMenuOpen(false)
          }}
        >
          {id.replace(/-/g, ' ').toUpperCase()}
        </button>
      ))}
    </div>
  )}
</nav>


      {/* Sections */}
      <div className="space-y-12 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto">
      {sectionContent.map(({ id, title, content }) => (

          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 bg-white"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#040651] mb-2">{title}</h2>
            <p className="text-sm sm:text-base text-black whitespace-pre-line">{content}</p>
            {imageGallery(id)}
          </motion.section>
        ))}
      </div>
      {/* Scroll to Top */}
      {showScroll && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-6 right-6 bg-[#040651] text-white p-3 rounded-full shadow-md hover:bg-[#292c78] transition"
  >
    ↑
  </button>
)}

    </main>
  )
}