import React from 'react'
import PropTypes from 'prop-types'

const STATUS_COLORS = {
  Disponible: '#1e7e34',
  Prestado: '#bd2130',
  Reservado: '#ff8c00',
}

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    padding: 16,
    maxWidth: 480,
    background: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    margin: 0,
    lineHeight: 1.2,
    color: '#111',
  },
  badge: {
    padding: '4px 8px',
    borderRadius: 12,
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  meta: {
    fontSize: 13,
    color: '#444',
    margin: '6px 0',
  },
  resumen: {
    marginTop: 10,
    fontSize: 14,
    color: '#222',
  },
}

function LibroCard({ titulo, editorial, anio, estado, resumen, autores }) {
  const badgeColor = STATUS_COLORS[estado] || '#6c757d'

  return (
    <article style={styles.card} aria-label={`Libro: ${titulo || 'sin título'}`}>
      <div style={styles.header}>
        <h2 style={styles.title}>{titulo || 'Título desconocido'}</h2>
        <span
          style={{ ...styles.badge, backgroundColor: badgeColor }}
          aria-live="polite"
        >
          {estado || 'Desconocido'}
        </span>
      </div>

      <div style={styles.meta}>
        <strong>Autores:</strong>{' '}
        {Array.isArray(autores) && autores.length ? autores.join(', ') : 'No especificado'}
      </div>

      <div style={styles.meta}>
        <strong>Editorial:</strong> {editorial || 'No especificada'} · <strong>Año:</strong>{' '}
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
}

LibroCard.defaultProps = {
  titulo: 'Título desconocido',
  editorial: 'No especificada',
  anio: 's/f',
  estado: 'Desconocido',
  resumen: 'Resumen no disponible.',
  autores: [],
}

export default LibroCard
