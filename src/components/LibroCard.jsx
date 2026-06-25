import React from 'react'
import PropTypes from 'prop-types'

const STATUS_COLORS = {
  Disponible: '#1e7e34',
  Prestado: '#bd2130',
  Reservado: '#ff8c00',
}

const styles = {
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: 20,
    maxWidth: 480,
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    border: '1px solid #cbd5e0',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)',
  },
  cardNovedad: {
    border: '2px solid #ff6b35',
    borderRadius: 12,
    padding: 20,
    maxWidth: 480,
    background: '#fffbf7',
    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.15)',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  cardNovedadHover: {
    border: '2px solid #ff6b35',
    boxShadow: '0 6px 16px rgba(255, 107, 53, 0.25)',
    transform: 'translateY(-2px)',
  },
  badgeNovedad: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#ff6b35',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 4px rgba(255, 107, 53, 0.3)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    margin: 0,
    lineHeight: 1.3,
    color: '#1a202c',
    fontWeight: 700,
    flex: 1,
  },
  badge: {
    padding: '5px 10px',
    borderRadius: 6,
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  meta: {
    fontSize: 13,
    color: '#4a5568',
    margin: '8px 0',
    lineHeight: 1.5,
  },
  metaLabel: {
    fontWeight: 600,
    color: '#2d3748',
  },
  resumen: {
    marginTop: 12,
    fontSize: 13.5,
    color: '#2d3748',
    lineHeight: 1.6,
    margin: 0,
  },
}

function LibroCard({ titulo, editorial, anio, estado, resumen, autores, esNovedad }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const badgeColor = STATUS_COLORS[estado] || '#6c757d'
  const baseStyle = esNovedad ? styles.cardNovedad : styles.card
  const hoverStyle = isHovered
    ? esNovedad
      ? styles.cardNovedadHover
      : styles.cardHover
    : {}
  const cardStyle = { ...baseStyle, ...hoverStyle }

  return (
    <article
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Libro: ${titulo || 'sin título'}`}
    >
      {esNovedad && <span style={styles.badgeNovedad}>⭐ Nuevo</span>}
      <div style={styles.header}>
        <h2 style={styles.title}>{titulo || 'Título desconocido'}</h2>
        <span style={{ ...styles.badge, backgroundColor: badgeColor }} aria-live="polite">
          {estado || 'Desconocido'}
        </span>
      </div>

      <div style={styles.meta}>
        <span style={styles.metaLabel}>Autores:</span>{' '}
        {Array.isArray(autores) && autores.length ? autores.join(', ') : 'No especificado'}
      </div>

      <div style={styles.meta}>
        <span style={styles.metaLabel}>Editorial:</span> {editorial || 'No especificada'} · <span style={styles.metaLabel}>Año:</span>{' '}
        {anio || 's/f'}
      </div>

      <p style={styles.resumen}>{resumen || 'Resumen no disponible.'}</p>
    </article>
  )
}

LibroCard.propTypes = {
  titulo: PropTypes.string,
  editorial: PropTypes.string,
  anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
  resumen: PropTypes.string,
  autores: PropTypes.arrayOf(PropTypes.string),
  esNovedad: PropTypes.bool,
}

LibroCard.defaultProps = {
  titulo: 'Título desconocido',
  editorial: 'No especificada',
  anio: 's/f',
  estado: 'Desconocido',
  resumen: 'Resumen no disponible.',
  autores: [],
  esNovedad: false,
}

export default LibroCard
