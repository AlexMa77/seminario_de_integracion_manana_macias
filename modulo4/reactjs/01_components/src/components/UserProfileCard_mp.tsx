// src/components/UserProfileCard_mp.tsx

interface UserProfileCard_mpProps {
  fullName: string
  email: string
  role: 'admin' | 'docente' | 'estudiante'
  isActive: boolean
  skills: string[] // Representing asignaturas o especialidades
  bio?: string
}

export default function UserProfileCard_mp({
  fullName,
  email,
  role,
  isActive,
  skills,
  bio,
}: UserProfileCard_mpProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#1e40af' }}>{fullName}</h2>
        <span
          style={{
            backgroundColor: isActive ? '#dcfce7' : '#fee2e2',
            color: isActive ? '#166534' : '#991b1b',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {isActive ? 'Activo' : 'Baja'}
        </span>
      </div>

      <p style={{ margin: '8px 0 4px', color: '#555' }}>Correo Institucional: {email}</p>
      <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
        Rol Institucional: <strong>{role.toUpperCase()}</strong>
      </p>

      {bio && <p style={{ fontStyle: 'italic', color: '#444' }}>"{bio}"</p>}

      <div style={{ marginTop: 14 }}>
        <strong style={{ fontSize: 14, color: '#333' }}>Especialidades / Asignaturas:</strong>
        <ul style={{ paddingLeft: 18, margin: '6px 0 0' }}>
          {skills.map((skill) => (
            <li key={skill} style={{ fontSize: 14, color: '#4b5563' }}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
