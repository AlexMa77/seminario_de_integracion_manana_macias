// src/components/SimpleInfoTable_mp.tsx

interface TableRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface SimpleInfoTable_mpProps {
  title?: string
  rows: TableRow[]
}

export default function SimpleInfoTable_mp({ title, rows }: SimpleInfoTable_mpProps) {
  return (
    <div style={{ maxWidth: 400 }}>
      {title && <h3 style={{ marginBottom: 8, fontSize: 15 }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              style={{
                backgroundColor: row.highlight ? '#dbeafe' : 'transparent', // Light blue highlight
              }}
            >
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#4b5563',
                  width: '45%',
                  fontWeight: 500,
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '8px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: row.highlight ? 600 : 400,
                }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
