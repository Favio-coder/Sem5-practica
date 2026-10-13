import styles from './Footer.module.css'

/**
 * Pie de página de la aplicación.
 */
function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>GameStore</span>
          <p className={styles.footerTagline}>Tu tienda de videojuegos de confianza</p>
        </div>
        <div className={styles.footerInfo}>
          <span className={styles.footerInfoItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            Desarrollo de aplicaciones web
          </span>
          <span className={styles.footerInfoItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Richard Favio Asturimac Medina
          </span>
        </div>
        <nav className={styles.footerLinks} aria-label="Enlaces legales">
          <a href="/terminos" className={styles.footerLink}>Términos</a>
          <a href="/privacidad" className={styles.footerLink}>Privacidad</a>
          <a href="/cookies" className={styles.footerLink}>Cookies</a>
          <a href="/contacto" className={styles.footerLink}>Contacto</a>
        </nav>
      </div>
      <p className={styles.footerCopyright}>
        © {new Date().getFullYear()} GameStore. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer