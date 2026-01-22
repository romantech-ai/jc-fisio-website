import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { SYSTEM_PROMPT } from './systemPrompt'

// ================================================
// RESPUESTAS DE FALLBACK (sin OpenAI)
// ================================================

const FALLBACK_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes'],
    response: 'Hola! Bienvenido a Clinica JC Fisio. Puedo ayudarte a reservar cita, informarte sobre nuestros servicios o resolver tus dudas. Que necesitas?',
  },
  {
    keywords: ['reservar', 'cita', 'pedir cita', 'hora'],
    response: 'Para reservar cita tienes varias opciones:\n\n1. **WhatsApp**: Escríbenos al 744 62 41 98 (respuesta inmediata)\n2. **Teléfono**: Llámanos al 744 62 41 98\n3. **Presencial**: Paseo San Isidro 19, local 2, Tomelloso\n\nNuestro horario es de Lunes a Viernes de 8:00 a 14:00 y de 16:00 a 21:00.',
  },
  {
    keywords: ['servicios', 'tratamientos', 'que haceis', 'que ofreceis'],
    response: 'En Clinica JC Fisio ofrecemos:\n\n• **Fisioterapia** - Traumatología, deportiva, rehabilitación\n• **Nutrición** - Planes personalizados\n• **Pilates** - Clases individuales y grupales\n• **Presoterapia** - Mejora de circulación\n• **Gimnasia Pasiva** - Electroestimulación\n• **Entrenamiento Personal**\n\nQuieres más información sobre alguno?',
  },
  {
    keywords: ['horario', 'horarios', 'abierto', 'cuando'],
    response: 'Nuestro horario es:\n\n**Lunes a Viernes**: 8:00 - 14:00 y 16:00 - 21:00\n**Sábados y Domingos**: Cerrado\n\nPuedes llamarnos o escribirnos por WhatsApp al 744 62 41 98 para reservar tu cita.',
  },
  {
    keywords: ['donde', 'direccion', 'ubicacion', 'llegar', 'mapa'],
    response: 'Estamos en:\n\n**Paseo San Isidro 19, local 2**\n**13700 Tomelloso, Ciudad Real**\n\nPuedes encontrarnos fácilmente en Google Maps buscando "Clinica JC Fisio Tomelloso".',
  },
  {
    keywords: ['precio', 'precios', 'cuanto', 'cuesta', 'tarifa'],
    response: 'Los precios varían según el servicio y tratamiento. Te recomiendo contactarnos para darte información detallada:\n\n• **WhatsApp/Teléfono**: 744 62 41 98\n\nLa primera consulta incluye valoración completa.',
  },
  {
    keywords: ['seguro', 'aseguradora', 'mutua', 'sanitas', 'adeslas', 'mapfre', 'asisa'],
    response: 'Trabajamos con las principales aseguradoras:\n\n• Sanitas\n• Asisa\n• Mapfre\n• Adeslas\n• DKV\n• Divina Seguros\n• Y más...\n\nConsúltanos tu caso concreto al 744 62 41 98.',
  },
  {
    keywords: ['dolor', 'duele', 'molestia', 'lesion', 'espalda', 'cuello', 'rodilla'],
    response: 'Entiendo que tienes molestias. Nuestros fisioterapeutas pueden ayudarte con una valoración personalizada.\n\nTe recomiendo pedir cita para que podamos evaluar tu caso:\n\n• **WhatsApp**: 744 62 41 98 (respuesta rápida)\n• **Teléfono**: 744 62 41 98\n\nCuanto antes empecemos, mejor!',
  },
  {
    keywords: ['fisio', 'fisioterapia', 'fisioterapeuta'],
    response: 'Nuestro equipo de fisioterapeutas está especializado en:\n\n• Fisioterapia traumatológica\n• Fisioterapia deportiva\n• Dolor de espalda y columna\n• Rehabilitación postoperatoria\n• Punción seca\n• Ecografía musculoesquelética\n\nReserva tu cita al 744 62 41 98.',
  },
  {
    keywords: ['nutricion', 'nutricionista', 'dieta', 'adelgazar', 'peso'],
    response: 'Nuestra nutricionista Cristina puede ayudarte con:\n\n• Planes nutricionales personalizados\n• Pérdida de peso saludable\n• Nutrición deportiva\n• Intolerancias alimentarias\n\nPide cita al 744 62 41 98.',
  },
  {
    keywords: ['pilates'],
    response: 'Ofrecemos clases de Pilates con Rosa, nuestra instructora certificada:\n\n• **Clases individuales** - Atención personalizada\n• **Clases grupales** - Máximo 6 personas\n\nIdeal para mejorar postura, flexibilidad y fortalecer el core. Reserva al 744 62 41 98.',
  },
  {
    keywords: ['equipo', 'profesionales', 'quien', 'doctores'],
    response: 'Nuestro equipo de 8 profesionales:\n\n• **Javier** - Fisioterapeuta, Director\n• **Verónica** - Fisioterapeuta\n• **Selene** - Fisioterapeuta deportiva\n• **Bea** - Fisioterapeuta\n• **Cristina** - Nutricionista\n• **Rosa** - Instructora de Pilates\n• **Belén** - Administración\n• **Esteban** - Entrenador Personal',
  },
  {
    keywords: ['gracias', 'vale', 'ok', 'perfecto'],
    response: 'De nada! Si necesitas algo más, aquí estoy. Recuerda que puedes reservar cita al 744 62 41 98 o por WhatsApp.',
  },
]

function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase()

  for (const item of FALLBACK_RESPONSES) {
    if (item.keywords.some(keyword => lower.includes(keyword))) {
      return item.response
    }
  }

  // Respuesta por defecto
  return 'Gracias por tu mensaje. Para darte la mejor atención, te recomiendo:\n\n• **WhatsApp**: 744 62 41 98 (respuesta inmediata)\n• **Teléfono**: 744 62 41 98\n\nO pregúntame sobre nuestros servicios, horarios o cómo reservar cita.'
}

export async function POST(req: Request) {
  let userMessage = ''

  try {
    const { message, history } = await req.json()
    userMessage = message || ''

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Si no hay API key, usar respuestas de fallback
    if (!process.env.OPENAI_API_KEY) {
      const reply = getFallbackResponse(message)
      return NextResponse.json({ reply })
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Build messages array with history (last 20 messages max)
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ]

    // Add conversation history if provided
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-20)
      for (const msg of recentHistory) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({
            role: msg.role,
            content: msg.content,
          })
        }
      }
    }

    // Add current user message
    messages.push({ role: 'user', content: message })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 250,
    })

    const reply = completion.choices[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje. ¿Puedes intentarlo de nuevo?'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)

    // En caso de error, usar fallback con el mensaje guardado
    if (userMessage) {
      const reply = getFallbackResponse(userMessage)
      return NextResponse.json({ reply })
    }

    return NextResponse.json({
      reply: 'Disculpa, hubo un problema. Puedes contactarnos directamente al 744 62 41 98 o por WhatsApp.',
    })
  }
}
