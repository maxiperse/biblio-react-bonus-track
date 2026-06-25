import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListaLibros from './components/ListaLibros'
import FiltroEstado from './components/FiltroEstado'
import BuscadorTitulo from './components/BuscadorTitulo'
import { libros } from './Libros'

function App() {
  const [count, setCount] = useState(0)
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

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="catalogo" aria-labelledby="catalogo-title">
        <h2 id="catalogo-title">Catálogo Digital</h2>
        <BuscadorTitulo valor={busqueda} onBusquedaChange={setBusqueda} />
        <FiltroEstado
          estadoSeleccionado={filtroEstado}
          onFiltroChange={setFiltroEstado}
        />
        {librosFiltrados.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 24, color: '#666' }}>
            <p>No hay libros que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <ListaLibros libros={librosFiltrados} />
        )}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
