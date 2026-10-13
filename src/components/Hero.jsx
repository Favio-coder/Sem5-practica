import styles from './Hero.module.css'

/**
 * Sección hero para ofertas destacadas.
 */
function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>Oferta destacada</span>
        <h1 id="hero-title" className={styles.heroTitle}>
          Cyber Week: Hasta 50% dto.
        </h1>
        <p className={styles.heroDescription}>
          Los mejores títulos para PC, PlayStation, Xbox y Nintendo Switch
          con descuentos exclusivos por tiempo limitado.
        </p>
        <div className={styles.heroActions}>
          <a href="/catalogo" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>
            Ver catálogo
          </a>
          <a href="/ofertas" className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>
            Ver todas las ofertas
          </a>
        </div>
        <div className={styles.heroFeatures}>
          <span className={styles.heroFeature}>
            <svg className={styles.heroFeatureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Pago seguro
          </span>
          <span className={styles.heroFeature}>
            <svg className={styles.heroFeatureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12V7H5v5"></path><path d="M7 7l5 5 5-5"></path><path d="M17 19v-7"></path></svg>
            Descarga inmediata
          </span>
          <span className={styles.heroFeature}>
            <svg className={styles.heroFeatureIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Soporte 24/7
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero