// src/components/ColoredBox_mp.tsx

interface ColoredBox_mpProps {
  color: string
  width?: number
  height?: number
  label?: string
}

export default function ColoredBox_mp({
  color,
  width = 80,
  height = 80,
  label, // e.g., 'Aula 101', 'Laboratorio de Física'
}: ColoredBox_mpProps) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: 8,
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666', textAlign: 'center' }}>{label}</span>}
    </div>
  )
}
