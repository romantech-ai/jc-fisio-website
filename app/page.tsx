import dynamic from 'next/dynamic'
import { Navbar } from '@/components/shared/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'

// Lazy load secciones below the fold para mejor rendimiento
const About = dynamic(() => import('@/components/sections/About').then(mod => ({ default: mod.About })))
const Team = dynamic(() => import('@/components/sections/Team').then(mod => ({ default: mod.Team })))
const Gallery = dynamic(() => import('@/components/sections/Gallery').then(mod => ({ default: mod.Gallery })))
const Insurance = dynamic(() => import('@/components/sections/Insurance').then(mod => ({ default: mod.Insurance })))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })))
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })))
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })))
const Footer = dynamic(() => import('@/components/shared/Footer').then(mod => ({ default: mod.Footer })))
const WhatsAppButton = dynamic(() => import('@/components/shared/WhatsAppButton').then(mod => ({ default: mod.WhatsAppButton })))
const CookieBanner = dynamic(() => import('@/components/shared/CookieBanner').then(mod => ({ default: mod.CookieBanner })))
const Chatbot = dynamic(() => import('@/components/shared/Chatbot').then(mod => ({ default: mod.Chatbot })))

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Insurance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <Chatbot />
    </main>
  )
}
