// src/components/FruitList_mp.tsx
import React from 'react'

interface SchoolMenuItem {
  name: string
  emoji: string
  calories: number
}

interface FruitList_mpProps {
  items: SchoolMenuItem[]
  title?: string
}

export default function FruitList_mp({ items, title = 'Menú de Cafetería Escolar' }: FruitList_mpProps) {
  if (items.length === 0) {
    return <p style={{ color: '#999' }}>No hay opciones disponibles en la cafetería escolar.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{item.emoji} {item.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{item.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
