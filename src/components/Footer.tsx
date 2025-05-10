import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#001a33] text-white py-8 mt-12 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-yellow-400 text-xl font-semibold">AFES</h2>
          <p className="mt-2 text-sm text-gray-300">
            AFES provides quality education through two schools and two coaching centers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/falcon-grammar" className="hover:text-yellow-400">Falcon Grammar School</Link></li>
            <li><Link href="/adamjee-24" className="hover:text-yellow-400">Adamjee Coaching Center-Campus24</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info & Map Card */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <div className="text-sm text-gray-300 space-y-2">
            <p>📍 C4 F.B. Area Block-18, Near Gulberg Chowrangi, Karachi, Sindh</p>
            <p>📞 +92 0335 6364436</p>
            <p>📞 +92 0331 6369904</p>
            <p>✉️ adamjeegulbergcampus24@gmail.com</p>
          </div>

          {/* Map Card */}
          <div className="mt-6 p-4 bg-[#00264d] rounded-lg border border-yellow-400/30 shadow-lg">
            <h4 className="text-yellow-400 text-base font-semibold mb-2">Find Us on the Map</h4>
            <div className="rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.732812031251!2d67.0706008!3d24.9427544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5e2be3addf%3A0xa38d9d26198e9af9!2sAdamjee%20Coaching%20Centre%20Gulberg%20Campus%20Number%3A24!5e0!3m2!1sen!2s!4v1714823286245!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <Link href="https://www.facebook.com" target="_blank">
          <i className="fab fa-facebook-f text-2xl hover:text-yellow-400 transition-all"></i>
        </Link>
        <Link href="https://wa.me/" target="_blank">
          <i className="fab fa-whatsapp text-2xl hover:text-yellow-400 transition-all"></i>
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <i className="fab fa-instagram text-2xl hover:text-yellow-400 transition-all"></i>
        </Link>
        <Link href="mailto:your-email@example.com" target="_blank">
          <i className="fas fa-envelope text-2xl hover:text-yellow-400 transition-all"></i>
        </Link>
      </div>

      {/* License Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} AFES. All rights reserved.
      </div>

      {/* Site Attribution */}
      <div className="absolute bottom-4 right-4 text-sm text-gray-400">
        <span>Site by: </span>
        <Link
          href="https://www.bitcraftinstitute.com"
          target="_blank"
          className="text-yellow-400 hover:text-white transition-all"
        >
          Bitcraft Institute
        </Link>
      </div>
    </footer>
  )
}
