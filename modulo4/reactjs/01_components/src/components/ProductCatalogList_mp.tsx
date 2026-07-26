// src/components/ProductCatalogList_mp.tsx

interface Course {
  id: number
  name: string
  price: number // Credits or tuition
  outOfStock?: boolean // e.g. Cupos agotados
}

interface ProductCatalogList_mpProps {
  products: Course[] // Let's keep it named products to match but they represent courses
  title?: string
}

export default function ProductCatalogList_mp({
  products,
  title = 'Oferta Académica',
}: ProductCatalogList_mpProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {products.length === 0 && (
        <p style={{ color: '#999' }}>No hay asignaturas disponibles para inscripción.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((course) => (
          <li
            key={course.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: course.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {course.name}
              {course.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Cupos agotados
                </em>
              )}
            </span>
            <strong>Créditos/Costo: ${course.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
