// src/components/MiniProfileCard_mp.tsx

import StatusBadge_mp from './StatusBadge_mp'

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error'

interface MiniProfileCard_mpProps {
  fullName: string
  role: string // e.g. 'Estudiante', 'Docente'
  department?: string // e.g. 'Ciencias Básicas'
  status: BadgeStatus
  joinedYear: number
}

export default function MiniProfileCard_mp({
  fullName,
  role,
  department,
  status,
  joinedYear,
}: MiniProfileCard_mpProps) {
  const initials = fullName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const yearsInInstitution = new Date().getFullYear() - joinedYear

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        padding: 16,
        maxWidth: 280,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#3b82f6', // Azul institucional
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 15 }}>{fullName}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>{role}</p>
        </div>
      </div>

      {department && (
        <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
          🏫 Facultad/Área: {department}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBadge_mp status={status} />
        <span style={{ fontSize: 12, color: '#9ca3af' }}>
          {yearsInInstitution === 0
            ? 'Nuevo ingreso'
            : `${yearsInInstitution} año${yearsInInstitution > 1 ? 's' : ''} en la institución`}
        </span>
      </div>
    </div>
  )
}
