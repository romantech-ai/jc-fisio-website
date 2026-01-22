'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Phone, Loader2, Calendar, Clock, MapPin, Sparkles } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { siteConfig } from '@/lib/config'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ConversationData {
  zonaCorporal: string | null
  problema: string | null
  especialista: string | null
  diaPreferido: string | null
  horarioPreferido: string | null
}

const STORAGE_KEY = 'jcfisio-chat'

// ================================================
// EXTRACCION CONTEXTUAL DE DATOS
// ================================================

const ZONAS_CORPORALES = [
  { keywords: ['espalda', 'lumbar', 'lumbares', 'columna'], value: 'Zona lumbar/espalda' },
  { keywords: ['cuello', 'cervical', 'cervicales', 'nuca'], value: 'Zona cervical/cuello' },
  { keywords: ['rodilla', 'rodillas'], value: 'Rodilla' },
  { keywords: ['hombro', 'hombros'], value: 'Hombro' },
  { keywords: ['tobillo', 'tobillos', 'pie', 'pies'], value: 'Tobillo/pie' },
  { keywords: ['cadera', 'caderas'], value: 'Cadera' },
  { keywords: ['muneca', 'mano', 'manos', 'dedos'], value: 'Mano/muneca' },
  { keywords: ['codo', 'codos', 'brazo', 'brazos'], value: 'Codo/brazo' },
]

const PROBLEMAS = [
  { keywords: ['dolor', 'duele', 'molestia', 'molesta'], value: 'Dolor' },
  { keywords: ['contractura', 'contracturas', 'tension', 'rigidez'], value: 'Contractura/tension' },
  { keywords: ['esguince', 'torcedura'], value: 'Esguince' },
  { keywords: ['lesion', 'lesionado', 'lesione'], value: 'Lesion' },
  { keywords: ['operacion', 'operado', 'cirugia', 'postoperatorio'], value: 'Rehabilitacion postoperatoria' },
  { keywords: ['deportiva', 'deporte', 'entrenando', 'gimnasio'], value: 'Lesion deportiva' },
]

const DIAS = [
  { keywords: ['lunes'], value: 'Lunes' },
  { keywords: ['martes'], value: 'Martes' },
  { keywords: ['miercoles'], value: 'Miercoles' },
  { keywords: ['jueves'], value: 'Jueves' },
  { keywords: ['viernes'], value: 'Viernes' },
  { keywords: ['manana', 'siguiente'], value: 'Lo antes posible' },
]

const HORARIOS = [
  { keywords: ['manana', 'temprano', 'primera hora'], value: 'Por la manana' },
  { keywords: ['tarde', 'despues de comer'], value: 'Por la tarde' },
  { keywords: ['mediodia'], value: 'A mediodia' },
]

function extractData(messages: Message[]): ConversationData {
  const userMessages = messages.filter(m => m.role === 'user').map(m => m.content.toLowerCase())
  const allText = userMessages.join(' ')

  const findMatch = (patterns: { keywords: string[], value: string }[]): string | null => {
    for (const pattern of patterns) {
      if (pattern.keywords.some(k => allText.includes(k))) {
        return pattern.value
      }
    }
    return null
  }

  return {
    zonaCorporal: findMatch(ZONAS_CORPORALES),
    problema: findMatch(PROBLEMAS),
    especialista: allText.includes('nutricion') ? 'Nutricionista' :
                  allText.includes('pilates') ? 'Pilates' :
                  allText.includes('entrenador') || allText.includes('entrenamiento') ? 'Entrenador Personal' :
                  allText.includes('fisio') ? 'Fisioterapeuta' : null,
    diaPreferido: findMatch(DIAS),
    horarioPreferido: findMatch(HORARIOS),
  }
}

// ================================================
// GENERADOR DE MENSAJE WHATSAPP
// ================================================

function generateWhatsAppMessage(messages: Message[]): string {
  const data = extractData(messages)
  const hasData = Object.values(data).some(v => v !== null)

  if (!hasData) {
    // Sin datos extraidos, usar resumen simple
    const summary = messages
      .filter(m => m.role === 'user')
      .map(m => m.content)
      .slice(-3)
      .join(' | ')

    return summary
      ? `Hola! Vengo del chat de la web. Consultaba sobre: ${summary.slice(0, 150)}`
      : siteConfig.whatsappMessage
  }

  // Con datos extraidos, mensaje estructurado
  const parts = ['-- SOLICITUD DE CITA --']

  if (data.problema && data.zonaCorporal) {
    parts.push(`MOTIVO: ${data.problema} en ${data.zonaCorporal}`)
  } else if (data.problema) {
    parts.push(`MOTIVO: ${data.problema}`)
  } else if (data.zonaCorporal) {
    parts.push(`ZONA: ${data.zonaCorporal}`)
  }

  if (data.especialista) {
    parts.push(`SERVICIO: ${data.especialista}`)
  }

  if (data.diaPreferido || data.horarioPreferido) {
    const pref = [data.diaPreferido, data.horarioPreferido].filter(Boolean).join(' ')
    parts.push(`PREFERENCIA: ${pref}`)
  }

  parts.push('--')
  parts.push('Quedo a la espera de confirmacion. Gracias!')

  return parts.join('\n')
}

// ================================================
// DETECTAR SI MOSTRAR CTA WHATSAPP
// ================================================

const WHATSAPP_TRIGGERS = [
  'cita', 'reservar', 'reserva', 'pedir cita', 'hora',
  'cuando', 'disponibilidad', 'hueco', 'urgente',
  'llamar', 'contactar', 'telefono'
]

function shouldShowWhatsAppCTA(content: string): boolean {
  const lower = content.toLowerCase()
  return WHATSAPP_TRIGGERS.some(trigger => lower.includes(trigger))
}

// Convert phone numbers to WhatsApp links
function processMessageContent(content: string): string {
  return content.replace(
    /(?:\+?34)?[\s]?(\d{3})[\s]?(\d{2})[\s]?(\d{2})[\s]?(\d{2})/g,
    (match) => {
      const cleanNumber = match.replace(/[\s+]/g, '')
      const fullNumber = cleanNumber.startsWith('34') ? cleanNumber : `34${cleanNumber}`
      return `[${match}](https://wa.me/${fullNumber})`
    }
  )
}

const initialMessage: Message = {
  id: '1',
  role: 'assistant',
  content: siteConfig.chatbot.welcomeMessage,
}

const quickReplies = [
  { label: 'Reservar cita', icon: Calendar },
  { label: 'Ver servicios', icon: Sparkles },
  { label: 'Horarios', icon: Clock },
  { label: 'Ubicacion', icon: MapPin },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Extraer datos de la conversacion
  const conversationData = useMemo(() => extractData(messages), [messages])
  const hasConversationData = useMemo(
    () => Object.values(conversationData).some(v => v !== null),
    [conversationData]
  )

  // Load messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
          setShowQuickReplies(false)
        }
      } catch {
        // Invalid data, use default
      }
    }
  }, [])

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setShowQuickReplies(false)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history: messages,
        }),
      })

      const data = await response.json()

      if (data.reply) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply,
        }
        setMessages(prev => [...prev, assistantMessage])
      }
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Ups, hubo un problema. Puedes contactarnos por WhatsApp o llamar al ${siteConfig.phone}`,
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleQuickReply = (label: string) => {
    sendMessage(label)
  }

  const openWhatsApp = useCallback(() => {
    const message = generateWhatsAppMessage(messages)
    const whatsappNumber = siteConfig.whatsapp.replace('+', '')
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }, [messages])

  const clearChat = () => {
    setMessages([initialMessage])
    setShowQuickReplies(true)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-600/25 flex items-center justify-center text-white"
            aria-label="Abrir chat"
          >
            <MessageSquare className="w-6 h-6" />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-white shadow-2xl border border-gray-200 flex flex-col overflow-hidden
              bottom-0 right-0 w-full h-[100dvh] rounded-none
              sm:bottom-6 sm:right-6 sm:w-[380px] sm:max-w-[calc(100vw-48px)] sm:h-[520px] sm:max-h-[calc(100vh-100px)] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden p-2 -ml-2 hover:bg-white/10 transition-colors rounded-lg"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Asistente {siteConfig.shortName}</p>
                  <p className="text-xs text-primary-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online ahora
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-white/10 transition-colors text-xs rounded-lg"
                  title="Limpiar chat"
                >
                  Limpiar
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hidden sm:block p-2 hover:bg-white/10 transition-colors rounded-lg"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Datos extraidos (si hay) */}
            {hasConversationData && (
              <div className="px-4 py-2 bg-primary-50 border-b border-primary-100">
                <p className="text-xs text-primary-700 font-medium mb-1">Datos detectados:</p>
                <div className="flex flex-wrap gap-1">
                  {conversationData.problema && (
                    <span className="text-xs bg-white px-2 py-0.5 rounded-full text-primary-600">
                      {conversationData.problema}
                    </span>
                  )}
                  {conversationData.zonaCorporal && (
                    <span className="text-xs bg-white px-2 py-0.5 rounded-full text-primary-600">
                      {conversationData.zonaCorporal}
                    </span>
                  )}
                  {conversationData.especialista && (
                    <span className="text-xs bg-white px-2 py-0.5 rounded-full text-primary-600">
                      {conversationData.especialista}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-primary-100'
                      : 'bg-primary-600'
                  }`}>
                    {message.role === 'user'
                      ? <User className="w-4 h-4 text-primary-600" />
                      : <Bot className="w-4 h-4 text-white" />
                    }
                  </div>
                  <div className="flex flex-col gap-2 max-w-[75%]">
                    <div className={`rounded-2xl px-4 py-2.5 text-sm ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white rounded-tr-sm'
                        : 'bg-white text-gray-700 rounded-tl-sm shadow-sm border border-gray-100'
                    }`}>
                      {message.role === 'assistant' ? (
                        <ReactMarkdown
                          components={{
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors"
                              >
                                {children}
                              </a>
                            ),
                            p: ({ children }) => <span>{children}</span>,
                          }}
                        >
                          {processMessageContent(message.content)}
                        </ReactMarkdown>
                      ) : (
                        message.content
                      )}
                    </div>

                    {/* CTA WhatsApp contextual en respuestas del asistente */}
                    {message.role === 'assistant' && index > 0 && shouldShowWhatsAppCTA(message.content) && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={openWhatsApp}
                        className="self-start flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        Confirmar por WhatsApp
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <AnimatePresence>
              {showQuickReplies && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-2 bg-gray-50"
                >
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply.label}
                        onClick={() => handleQuickReply(reply.label)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-full text-xs text-gray-600 hover:text-primary-600 transition-all"
                      >
                        <reply.icon className="w-3 h-3" />
                        {reply.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp CTA */}
            <div className="px-4 pb-2 bg-white">
              <button
                onClick={openWhatsApp}
                className="w-full py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl text-[#25D366] text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {hasConversationData ? 'Reservar cita por WhatsApp' : 'Continuar por WhatsApp'}
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 pt-2 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 sm:py-2.5 text-base sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 disabled:opacity-50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-600/25 transition-all flex-shrink-0"
                  aria-label="Enviar mensaje"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 sm:w-4 sm:h-4 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
