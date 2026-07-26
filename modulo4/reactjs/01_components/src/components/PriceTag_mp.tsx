// src/components/PriceTag_mp.tsx

type Currency = 'USD' | 'EUR' | 'COP' | 'MXN'

interface PriceTag_mpProps {
  amount: number
  currency?: Currency
  discountPercent?: number // Para becas o descuentos
}

export default function PriceTag_mp({
  amount,
  currency = 'USD',
  discountPercent = 0,
}: PriceTag_mpProps) {
  const hasDiscount = discountPercent > 0
  const finalPrice  = hasDiscount ? amount * (1 - discountPercent / 100) : amount

  const symbols: Record<Currency, string> = {
    USD: '$',
    EUR: '€',
    COP: '$',
    MXN: '$',
  }

  const symbol = symbols[currency]

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {hasDiscount && (
        <span style={{ fontSize: 13, color: '#aaa', textDecoration: 'line-through' }}>
          Matrícula regular: {symbol}{amount.toFixed(2)} {currency}
        </span>
      )}
      <span style={{ fontSize: 20, fontWeight: 700, color: hasDiscount ? '#2563eb' : '#333' }}>
        Total a pagar: {symbol}{finalPrice.toFixed(2)} {currency}
      </span>
      {hasDiscount && (
        <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 500 }}>
          Beca o descuento aplicado: {discountPercent}%
        </span>
      )}
    </div>
  )
}
