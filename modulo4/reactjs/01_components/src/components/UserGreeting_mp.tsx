// src/components/UserGreeting_mp.tsx

interface UserGreeting_mpProps {
  name: string
  role?: string // e.g., 'Profesor', 'Estudiante', 'Director'
}

export default function UserGreeting_mp({ name, role }: UserGreeting_mpProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: '#10b981', // Verde educativo
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
        }}
      >
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontWeight: 600 }}>Hola, {name}</p>
        {role && (
          <p style={{ margin: 0, fontSize: 13, color: '#888' }}>{role}</p>
        )}
      </div>
    </div>
  )
}
