/**
 * Agrupa contenido bajo un título.
 * @param {Object} props
 * @param {string} props.title
 * @param {import('react').ReactNode} props.children
 */
function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}

export default Section