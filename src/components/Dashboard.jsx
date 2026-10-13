import MetricCard from './MetricCard'

/**
 * Organiza las métricas y el contenido complementario.
 * @param {Object} props
 * @param {{totalGames: number, totalPlatforms: number,
 * averagePrice: number}} props.metrics
 * @param {import('react').ReactNode} props.children
 */
function Dashboard({ metrics, children }) {
  return (
    <section>
      <h2>Resumen del catálogo</h2>

      <div className="grid">
        <MetricCard
          label="Videojuegos"
          value={metrics.totalGames}
          accent="#a78bfa"
        />

        <MetricCard
          label="Plataformas"
          value={metrics.totalPlatforms}
          accent="#22d3ee"
        />

        <MetricCard
          label="Precio promedio"
          value={`S/ ${metrics.averagePrice.toFixed(2)}`}
          accent="#4ade80"
        />
      </div>

      {children}
    </section>
  )
}

export default Dashboard