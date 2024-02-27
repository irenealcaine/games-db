import Navbar from './Components/Navbar'
import { ThemeProvider } from './Context/themeContext'
import DeveloperDetails from './Pages/DeveloperDetails'
import Developers from './Pages/Developers'
import GameDetails from './Pages/GameDetails'
import GenreDetails from './Pages/GenreDetails'
import Genres from './Pages/Genres'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tags from './Pages/Tags'
import TagDetails from './Pages/TagDetails'
import BestGames from './Pages/BestGames'
import LastGames from './Pages/LastGames'
import NextGames from './Pages/NextGames'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/best' element={<BestGames />} />
          <Route path='/last' element={<LastGames />} />
          <Route path='/next' element={<NextGames />} />
          <Route path='/game/:id' element={<GameDetails />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/genre/:id' element={<GenreDetails />} />
          <Route path='/developers' element={<Developers />} />
          <Route path='/developer/:id' element={<DeveloperDetails />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tag/:id' element={<TagDetails />} />

          <Route path='*' element={<h1>Not Found</h1>} />

        </Routes>

      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
