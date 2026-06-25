import React from 'react'
import PropTypes from 'prop-types'
import LibroCard from './LibroCard'

const styles = {
  container: {
    display: 'grid',
    gap: 12,
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  },
  empty: {
    textAlign: 'center',
    padding: 24,
    color: '#666',
    fontSize: 16,
  },
}

function ListaLibros({ libros }) {
  if (!Array.isArray(libros) || libros.length === 0) {
    return <div style={styles.empty}>No hay libros que mostrar.</div>
  }

  return (
    <div style={styles.container}>
      {libros.map((libro) => (
        <LibroCard
          key={libro.id}
          titulo={libro.titulo}
          editorial={libro.editorial}
          anio={libro.anio}
          estado={libro.estado}
          resumen={libro.resumen}
          autores={libro.autores}
          esNovedad={libro.esNovedad}
        />
      ))}
    </div>
  )
}

ListaLibros.propTypes = {
  libros: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string,
      editorial: PropTypes.string,
      anio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      estado: PropTypes.string,
      resumen: PropTypes.string,
      autores: PropTypes.arrayOf(PropTypes.string),
      esNovedad: PropTypes.bool,
    })
  ),
}

ListaLibros.defaultProps = {
  libros: [],
}

export default ListaLibros
