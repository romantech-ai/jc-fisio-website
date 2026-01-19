'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Africa Alcolea Martinez',
    content: 'Una maravilla, llegue estresada y el masaje me ha encantado, no tengo palabras. Volvere pronto y lo recomiendo.',
    rating: 5,
    date: 'Hace 6 meses'
  },
  {
    id: 2,
    name: 'Kevin Lara',
    content: 'Sin duda la mejor masajista que yo haya probado, una excelente profesional y un ambiente en sintonia con la calidad del masaje. Volvere sin atisbo de duda.',
    rating: 5,
    date: 'Hace 10 meses'
  },
  {
    id: 3,
    name: 'Juli Buitrago',
    content: 'Grandes profesionales, muy puntuales con la cita y muy bien de precio, y una gran calidad humana!',
    rating: 5,
    date: 'Hace 11 meses'
  },
  {
    id: 4,
    name: 'Claudia Sanchez',
    content: 'Masaje relajante para mi hija, con mucho mimo y calidez. Buen sitio y atencion.',
    rating: 5,
    date: 'Hace 10 meses'
  },
  {
    id: 5,
    name: 'Israel Rp',
    content: 'Profesional, honesto y calidad humana. Trato, precio y por lo pronto resultados. Gracias Javi.',
    rating: 5,
    date: 'Hace un ano'
  },
  {
    id: 6,
    name: 'Nur RH',
    content: 'Muy buenos profesionales, puntuales y super amables.',
    rating: 5,
    date: 'Hace 11 meses'
  },
  {
    id: 7,
    name: 'Rosmery Barrionuevo',
    content: 'Javi es un excelente profesional y muy amable, bonito ambiente, recomendable al 100%',
    rating: 5,
    date: 'Hace 3 anos'
  },
  {
    id: 8,
    name: 'Joaquina Mendoza',
    content: 'Una consulta de psicologia muy cercana y comprometida.',
    rating: 5,
    date: 'Hace 10 meses'
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  }

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-primary-600 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-primary-100 text-lg">
            Mas de 500 pacientes confian en nosotros
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative h-[350px] lg:h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={testimonials[current].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${i < testimonials[current].rating ? 'text-yellow-400' : 'text-white/20'}`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 flex-grow">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonials[current].name}</p>
                      <p className="text-primary-200">Resena de Google - {testimonials[current].date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-white w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-400 text-xl">&#9733;</span>
              ))}
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <p className="font-bold">5.0 de 5</p>
                <p className="text-sm text-primary-200">8 resenas en Google</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
