'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  const getLinkStyle = (href: string) =>
    pathname === href
      ? 'text-yellow-400 font-semibold'
      : 'text-white hover:text-yellow-400 transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#001a33] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h1 className="text-2xl font-bold text-yellow-400">AFES</h1>

        <nav className="flex flex-wrap gap-4">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-wrap gap-4">
          {entityNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkStyle(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
