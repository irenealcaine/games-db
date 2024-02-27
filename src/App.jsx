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
import NotFound from './Pages/NotFound'
import MainLayout from './Components/MainLayout'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
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

            <Route path='*' element={<NotFound />} />
          </Routes>
        </MainLayout>

      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
