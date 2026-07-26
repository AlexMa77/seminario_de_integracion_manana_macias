// src/components/CurrentDateDisplay_mp.tsx

export default function CurrentDateDisplay_mp() {
  const now = new Date()

  const fecha = now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hora = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div style={{ fontSize: 14, color: '#555' }}>
      <span style={{ textTransform: 'capitalize' }}>Fecha de ciclo escolar: {fecha}</span>
      <span style={{ marginLeft: 12, color: '#999' }}>Hora de acceso: {hora}</span>
    </div>
  )
}
