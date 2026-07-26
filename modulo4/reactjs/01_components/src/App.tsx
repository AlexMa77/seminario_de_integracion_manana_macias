// src/App.tsx

import WelcomeBanner_mp from './components/WelcomeBanner_mp'
import UserGreeting_mp from './components/UserGreeting_mp'
import CurrentDateDisplay_mp from './components/CurrentDateDisplay_mp'
import StatusBadge_mp from './components/StatusBadge_mp'
import ProductCatalogList_mp from './components/ProductCatalogList_mp'
import SimpleInfoTable_mp from './components/SimpleInfoTable_mp'
import MiniProfileCard_mp from './components/MiniProfileCard_mp'

const catalog = [
  { id: 1, name: 'Matemáticas Discretas', price: 150.00 },
  { id: 2, name: 'Programación Web React', price: 200.00 },
  { id: 3, name: 'Bases de Datos Avanzadas', price: 180.00, outOfStock: true },
  { id: 4, name: 'Inglés Nivel III', price: 120.00 },
]

export default function App() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Banner de Bienvenida */}
      <WelcomeBanner_mp />
      
      {/* Saludo y Fecha */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
        <UserGreeting_mp name="Estudiante" role="Alumno de 4to Semestre" />
        <CurrentDateDisplay_mp />
      </div>

      {/* Tarjeta de Perfil y Estados */}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <MiniProfileCard_mp
          fullName="Carlos Mendoza"
          role="Estudiante"
          department="Ingeniería en Sistemas"
          status="active"
          joinedYear={2023}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>Estados del Sistema:</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <StatusBadge_mp status="active" />
            <StatusBadge_mp status="pending" />
            <StatusBadge_mp status="error" />
            <StatusBadge_mp status="inactive" />
          </div>
        </div>
      </div>

      {/* Tablas y Catálogos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Catálogo de Asignaturas */}
        <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px' }}>
          <ProductCatalogList_mp products={catalog} title="Inscripción de Asignaturas" />
        </div>
        
        {/* Tabla de Resumen */}
        <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px' }}>
          <SimpleInfoTable_mp
            title="Resumen de Matrícula"
            rows={[
              { label: 'Créditos Disponibles', value: '25' },
              { label: 'Créditos Inscritos', value: '18' },
              { label: 'Costo Total Estimado', value: '$470.00', highlight: true },
              { label: 'Fecha Límite Pago', value: '15 de Agosto' },
            ]}
          />
        </div>

      </div>
    </main>
  )
}