/**
 * Calcula métricas del catálogo.
 * @param {Array<{platform: string, price: number}>} games
 * @returns {{totalGames: number, totalPlatforms: number, averagePrice: number}}
 */
export function calculateCatalogMetrics(games) {
  const totalGames = games.length
  const totalPlatforms = new Set(
    games.map((game) => game.platform)
  ).size

  const totalPrice = games.reduce(
    (total, game) => total + game.price,
    0
  )

  const averagePrice = totalGames > 0
    ? totalPrice / totalGames
    : 0

  return { totalGames, totalPlatforms, averagePrice }
}