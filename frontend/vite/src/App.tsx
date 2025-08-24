import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
const App = () => {
  return (
    <div>
      {toast.success("HEllo")}
      TTest
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/add' element={<CreatePage></CreatePage>}></Route>
          <Route path='/notes/:id' element={<NoteDetailPage></NoteDetailPage>}></Route>
        </Routes>
    </div>
  )
}

export default App
