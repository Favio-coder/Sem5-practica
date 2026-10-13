import GameCard from './GameCard'

/**
 * Muestra los videojuegos recibidos.
 * @param {Object} props
 * @param {Array<{id: number, title: string, platform: string,
 * genre: string, price: number, available: boolean}>} props.games
 */
function GameCatalog({ games }) {
  return (
    <section>
      <h2>Catálogo de videojuegos</h2>

      <div className="grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}

export default GameCatalog