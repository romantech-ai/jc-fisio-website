'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      setAtTop(scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        role="navigation"
        aria-label="Navegacion principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo-sin-fondo.png"
                alt="JC Fisio"
                width={120}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative ${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'} transition-colors font-medium group`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:744624198"
                className={`flex items-center gap-2 ${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-white'} transition-colors`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">744 62 41 98</span>
              </a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
              >
                Reservar Cita
              </motion.a>
            </div>

            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: mobileOpen ? 45 : 0,
                    y: mobileOpen ? 9 : 0
                  }}
                  className={`w-full h-0.5 ${scrolled || mobileOpen ? 'bg-gray-900' : 'bg-white'} origin-left`}
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  className={`w-full h-0.5 ${scrolled || mobileOpen ? 'bg-gray-900' : 'bg-white'}`}
                />
                <motion.span
                  animate={{
                    rotate: mobileOpen ? -45 : 0,
                    y: mobileOpen ? -9 : 0
                  }}
                  className={`w-full h-0.5 ${scrolled || mobileOpen ? 'bg-gray-900' : 'bg-white'} origin-left`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 text-lg text-gray-600 hover:text-primary-600 transition-colors border-b border-gray-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto space-y-4">
                  <a
                    href="tel:744624198"
                    className="flex items-center justify-center gap-2 py-3 text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    744 62 41 98
                  </a>
                  <a
                    href="#contacto"
                    className="block w-full bg-primary-600 text-white py-4 rounded-full font-semibold shadow-lg text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Reservar Cita
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
