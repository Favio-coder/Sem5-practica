import styles from './Navbar.module.css'

/**
 * Barra de navegación principal.
 * @param {Object} props
 * @param {string} props.activePage - Página activa para resaltar el enlace
 */
function Navbar({ activePage = 'catalogo' }) {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Navegación principal">
      <a href="/" className={styles.logo} aria-label="GameStore - Inicio">
        GameStore
      </a>
      <ul className={styles.navLinks}>
        <li>
          <a
            href="/"
            className={`${styles.navLink} ${activePage === 'catalogo' ? styles.active : ''}`}
            aria-current={activePage === 'catalogo' ? 'page' : undefined}
          >
            Catálogo
          </a>
        </li>
        <li>
          <a
            href="/dashboard"
            className={`${styles.navLink} ${activePage === 'dashboard' ? styles.active : ''}`}
            aria-current={activePage === 'dashboard' ? 'page' : undefined}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/ofertas"
            className={`${styles.navLink} ${activePage === 'ofertas' ? styles.active : ''}`}
            aria-current={activePage === 'ofertas' ? 'page' : undefined}
          >
            Ofertas
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar