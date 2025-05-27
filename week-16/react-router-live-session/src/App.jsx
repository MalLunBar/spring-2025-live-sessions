import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header'
import Movies from './pages/Movies'
import About from './pages/About'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

// The Header component will show in all "pages" It is outside of the routing scope.

export const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:movieId" exact element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
