import { games } from './data/games'
import GameCatalog from './components/GameCatalog'
import Section from './components/Section'
import Dashboard from './components/Dashboard'
import { calculateCatalogMetrics } from './utils/catalogMetrics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const metrics = calculateCatalogMetrics(games)

  return (
    <>
      <Navbar activePage="catalogo" />
      <main>
        <Hero />
        <Dashboard metrics={metrics}>
          <p>Las métricas se calculan a partir del catálogo completo.</p>
        </Dashboard>
        <GameCatalog games={games} />
        <Section title="Sobre GameStore">
          <p>Explora videojuegos para distintas plataformas.</p>
          <p>Este catálogo utiliza datos y precios ficticios.</p>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App