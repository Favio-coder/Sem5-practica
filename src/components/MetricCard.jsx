import styles from './MetricCard.module.css'

/**
 * Presenta una métrica.
 * @param {Object} props
 * @param {string} props.label
 * @param {string | number} props.value
 * @param {string} [props.accent]
 */
function MetricCard({ label, value, accent = '#a78bfa' }) {
  return (
    <article
      className={styles.card}
      style={{ borderLeftColor: accent }}
    >
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.value}>{value}</p>
    </article>
  )
}

export default MetricCard