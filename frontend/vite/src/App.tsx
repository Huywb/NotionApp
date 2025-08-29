import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
import Header from './components/Header'
import ListCard from './components/ListCard'
import Pagition from './components/Pagition'
const App = () => {
  return (
    <div className='w-full bg-black text-white min-h-screen '>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/add' element={<CreatePage></CreatePage>}></Route>
          <Route path='/notes/:id' element={<NoteDetailPage></NoteDetailPage>}></Route>
        </Routes>
    </div>
  )
}

export default App
