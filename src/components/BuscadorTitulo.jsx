import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    marginBottom: 16,
  },
  label: {
    display: 'block',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 600,
    color: '#2d3748',
  },
  input: {
    width: '100%',
    maxWidth: 500,
    padding: '10px 14px',
    borderRadius: 8,
    border: '2px solid #e2e8f0',
    fontSize: 14,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  },
  inputFocus: {
    width: '100%',
    maxWidth: 500,
    padding: '10px 14px',
    borderRadius: 8,
    border: '2px solid #667eea',
    fontSize: 14,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto',
    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    boxSizing: 'border-box',
  },
  hint: {
    color: '#718096',
    fontSize: 12,
    marginTop: 6,
    display: 'block',
  },
}

function BuscadorTitulo({ valor, onBusquedaChange }) {
  const [isFocused, setIsFocused] = React.useState(false)

  const handleChange = (e) => {
    // Validación y normalización segura: recorta espacios y limita el largo
    let texto = e.target.value
    texto = texto.trim()
    if (texto.length > 100) {
      texto = texto.slice(0, 100)
    }
    onBusquedaChange(texto)
  }

  return (
    <div style={styles.container}>
      <label htmlFor="busqueda" style={styles.label}>
        🔍 Buscar por título o autor:
      </label>
      <input
        id="busqueda"
        type="text"
        style={isFocused ? styles.inputFocus : styles.input}
        placeholder="Ej: React, García Márquez, Cortázar..."
        value={valor}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-describedby="busqueda-ayuda"
      />
      <small id="busqueda-ayuda" style={styles.hint}>
        Escribe para filtrar instantáneamente
      </small>
    </div>
  )
}

BuscadorTitulo.propTypes = {
  valor: PropTypes.string.isRequired,
  onBusquedaChange: PropTypes.func.isRequired,
}

export default BuscadorTitulo
