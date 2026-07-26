// src/components/ConditionalGreeting_mp.tsx

type TimeOfDay = 'morning' | 'afternoon' | 'evening'

interface ConditionalGreeting_mpProps {
  isLoggedIn: boolean
  userName?: string
  timeOfDay?: TimeOfDay
}

export default function ConditionalGreeting_mp({
  isLoggedIn,
  userName = 'Estudiante',
  timeOfDay = 'morning',
}: ConditionalGreeting_mpProps) {
  const greetings: Record<TimeOfDay, string> = {
    morning:   'Buenos días',
    afternoon: 'Buenas tardes',
    evening:   'Buenas noches',
  }

  if (!isLoggedIn) {
    return (
      <p style={{ color: '#e00' }}>
        Por favor inicia sesión en el portal académico para continuar.
      </p>
    )
  }

  return (
    <p style={{ color: '#333' }}>
      {greetings[timeOfDay]}, <strong>{userName}</strong>. Bienvenido al sistema de gestión educativa.
    </p>
  )
}
