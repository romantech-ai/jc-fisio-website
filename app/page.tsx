import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Team } from '@/components/sections/Team'
import { Insurance } from '@/components/sections/Insurance'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Insurance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
