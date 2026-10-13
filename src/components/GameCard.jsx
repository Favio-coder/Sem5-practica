import styles from './GameCard.module.css'

/**
 * Muestra un videojuego del catálogo.
 * @param {Object} props
 * @param {{id: number, title: string, platform: string,
 * genre: string, price: number, available: boolean, image: string}} props.game
 */
function GameCard({ game }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={game.image}
          alt={game.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{game.title}</h2>
        <div className={styles.meta}>
          <p>Plataforma: {game.platform}</p>
          <p>Género: {game.genre}</p>
        </div>
        <p className={styles.price}>
          Precio: S/ {game.price.toFixed(2)}
        </p>
        <p className={game.available ? styles.available : styles.unavailable}>
          {game.available ? 'Disponible' : 'Agotado'}
        </p>
      </div>
    </article>
  )
}

export default GameCard