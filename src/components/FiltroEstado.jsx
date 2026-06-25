import React from 'react'
import PropTypes from 'prop-types'

const ESTADOS = ['Todos', 'Disponible', 'Prestado', 'Reservado']

const styles = {
  container: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  button: {
    padding: '6px 12px',
    borderRadius: 4,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
  buttonActive: {
    padding: '6px 12px',
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#0066cc',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
}

function FiltroEstado({ estadoSeleccionado, onFiltroChange }) {
  return (
    <div style={styles.container} role="group" aria-label="Filtrar por estado">
      {ESTADOS.map((estado) => (
        <button
          key={estado}
          style={
            estadoSeleccionado === estado ? styles.buttonActive : styles.button
          }
          onClick={() => onFiltroChange(estado)}
          aria-pressed={estadoSeleccionado === estado}
        >
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
