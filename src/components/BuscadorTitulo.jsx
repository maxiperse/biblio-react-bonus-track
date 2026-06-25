import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    marginBottom: 16,
  },
  label: {
    display: 'block',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 500,
    color: '#333',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    padding: '8px 12px',
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: 14,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto',
  },
}

function BuscadorTitulo({ valor, onBusquedaChange }) {
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
        Buscar por título:
      </label>
      <input
        id="busqueda"
        type="text"
        style={styles.input}
        placeholder="Ej: React, Soledad..."
        value={valor}
        onChange={handleChange}
        aria-describedby="busqueda-ayuda"
      />
      <small id="busqueda-ayuda" style={{ color: '#666', fontSize: 12 }}>
        Escribe el título del libro para filtrar
      </small>
    </div>
  )
}

BuscadorTitulo.propTypes = {
  valor: PropTypes.string.isRequired,
  onBusquedaChange: PropTypes.func.isRequired,
}

export default BuscadorTitulo
