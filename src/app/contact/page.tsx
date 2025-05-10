'use client';

// import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  // const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1128] text-white py-16 px-4 md:px-24">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 mb-12">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4 animate__animated animate__fadeInUp">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">{`
          We’d love to hear from you! Whether you’re a student, parent, or visitor — reach out and we’ll respond shortly.`}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form className="bg-gray-100 rounded-2xl shadow-2xl p-8 text-gray-900 space-y-5 transition-all transform hover:scale-105 animate__animated animate__fadeInUp">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-yellow-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 w-full rounded-xl hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-8 transition-all transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s shadow-2xl p-8 bg-gray-800 rounded-2xl">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" size={24} />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-300">C-4, F.B.Area Block 18, main Gulberg Chorangi, Karachi</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-yellow-400 mt-1" size={24} />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-300">+92 0335 6364436</p>
              <p className="text-gray-300">+92 0331 6369904</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-400 mt-1" size={24} />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-300">adamjeegulbergcampus24@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-yellow-400 mt-1" size={24} />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-gray-300">Mon – Sat: 9:00 AM – 8:00 PM</p>
            </div>
          </div>
          {/* Google Map Section */}
<section className="py-12 px-4 bg-[#001a33]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Our Location</h2>
    <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-400/30 hover:shadow-yellow-400/40">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.732812031251!2d67.0706008!3d24.9427544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5e2be3addf%3A0xa38d9d26198e9af9!2sAdamjee%20Coaching%20Centre%20Gulberg%20Campus%20Number%3A24!5e0!3m2!1sen!2s!4v1714823286245!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  </div>
</section>


          {/* Social Media Links */}
          <div className="flex gap-6 pt-2">
            <a href="#" aria-label="Facebook" className="text-yellow-400 hover:text-yellow-300 text-3xl">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram" className="text-yellow-400 hover:text-yellow-300 text-3xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-yellow-400 hover:text-yellow-300 text-3xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
