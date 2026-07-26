// src/components/ProductCard_mp.tsx

interface ProductCard_mpProps {
  title: string
  description?: string
  highlighted?: boolean
}

export default function ProductCard_mp({
  title,
  description = 'Sin descripción de la asignatura',
  highlighted = false,
}: ProductCard_mpProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid #3b82f6' : '1px solid #ccc', // Blue border for highlight
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#eff6ff' : '#fff', // Light blue background
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: '#1e3a8a' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  )
}
