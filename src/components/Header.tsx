'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react' // Lucide for icons, or use your own

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const entityNav = [
  { name: 'Falcon Grammar School', href: '/falcon-grammar' },
  { name: 'School 2', href: '/schools/school2' },
  { name: 'Adamjee Coaching Center-Campus24', href: '/adamjee-24' },
  { name: 'Coaching 2', href: '/coaching/center2' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getLinkStyle = (href: string) =>
    pathname === href
      ? 'text-yellow-400 font-semibold'
      : 'text-white hover:text-yellow-400 transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#001a33] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl font-bold text-yellow-400">AFES</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap gap-4">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap gap-4">
          {entityNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4">
            {[...mainNav, ...entityNav].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkStyle(link.href)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
