import Navbar from './Components/Navbar'
import { ThemeProvider } from './Context/themeContext'
import Developers from './Pages/Developers'
import GameDetails from './Pages/GameDetails'
import GenreDetails from './Pages/GenreDetails'
import Genres from './Pages/Genres'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game/:id' element={<GameDetails />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/genre/:id' element={<GenreDetails />} />
          <Route path='/developers' element={<Developers />} />

          <Route path='*' element={<h1>Not Found</h1>} />

        </Routes>

      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
