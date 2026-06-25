import React from 'react'
import PropTypes from 'prop-types'

const ESTADOS = ['Todos', 'Disponible', 'Prestado', 'Reservado']

const styles = {
  container: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginTop: 12,
  },
  button: {
    padding: '8px 16px',
    borderRadius: 8,
    border: '2px solid #e2e8f0',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.2s ease',
    color: '#4a5568',
  },
  buttonHover: {
    borderColor: '#cbd5e0',
    backgroundColor: '#f7fafc',
  },
  buttonActive: {
    padding: '8px 16px',
    borderRadius: 8,
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  },
}

function FiltroEstado({ estadoSeleccionado, onFiltroChange }) {
  const [hoveredButton, setHoveredButton] = React.useState(null)

  return (
    <div style={styles.container} role="group" aria-label="Filtrar por estado">
      {ESTADOS.map((estado) => (
        <button
          key={estado}
          style={
            estadoSeleccionado === estado
              ? styles.buttonActive
              : hoveredButton === estado
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
          }
          onClick={() => onFiltroChange(estado)}
          onMouseEnter={() => setHoveredButton(estado)}
          onMouseLeave={() => setHoveredButton(null)}
          aria-pressed={estadoSeleccionado === estado}
        >
          {estado === 'Todos' && '📚 '}
          {estado === 'Disponible' && '✅ '}
          {estado === 'Prestado' && '📤 '}
          {estado === 'Reservado' && '🔖 '}
          {estado}
        </button>
      ))}
    </div>
  )
}

FiltroEstado.propTypes = {
  estadoSeleccionado: PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired,
}

export default FiltroEstado
