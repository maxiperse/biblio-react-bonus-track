import { useState } from 'react'
import './App.css'
import ListaLibros from './components/ListaLibros'
import FiltroEstado from './components/FiltroEstado'
import BuscadorTitulo from './components/BuscadorTitulo'
import { libros } from './Libros'

function App() {
  const [filtroEstado, setFiltroEstado] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  // Lógica de filtrado segura
  const librosFiltrados = libros.filter((libro) => {
    // Filtro por estado
    const cumpleEstado =
      filtroEstado === 'Todos' || libro.estado === filtroEstado

    // Filtro por búsqueda: normaliza y compara case-insensitive
    const termino = busqueda.toLowerCase()
    const cumpleBusqueda =
      libro.titulo.toLowerCase().includes(termino) ||
      (Array.isArray(libro.autores) &&
        libro.autores.some((autor) =>
          autor.toLowerCase().includes(termino)
        ))

    return cumpleEstado && cumpleBusqueda
  })

  // Contar las novedades
  const contNovedades = libros.filter((libro) => libro.esNovedad).length

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 Catálogo Digital</h1>
        <p className="subtitle">Biblioteca Comunitaria</p>
      </header>

      <main className="app-main">
        <div className="catalogo-wrapper">
          <div className="catalogo-controls">
            <div className="controls-top">
              <h2 id="catalogo-title" className="catalogo-title">
                Nuestros Libros
              </h2>
              {contNovedades > 0 && (
                <span className="badge-novedades">
                  ✨ {contNovedades} {contNovedades === 1 ? 'novedad' : 'novedades'}
                </span>
              )}
            </div>
            <BuscadorTitulo valor={busqueda} onBusquedaChange={setBusqueda} />
            <FiltroEstado
              estadoSeleccionado={filtroEstado}
              onFiltroChange={setFiltroEstado}
            />
          </div>

          {librosFiltrados.length === 0 ? (
            <div className="empty-state">
              <p>📖 No hay libros que coincidan con tu búsqueda.</p>
              <p className="empty-state-hint">Intenta con otros términos o cambia el filtro.</p>
            </div>
          ) : (
            <ListaLibros libros={librosFiltrados} />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Biblioteca Comunitaria — Catálogo Digital</p>
      </footer>
    </div>
  )
}

export default App
