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
    <div className='w-full bg-black h-screen text-white '>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/add' element={<CreatePage></CreatePage>}></Route>
          <Route path='/notes/:id' element={<NoteDetailPage></NoteDetailPage>}></Route>
        </Routes>
        <div className='px-[10%] pt-6'>
          <ListCard></ListCard>
        </div>
        <div className='flex items-center justify-center'>
          <Pagition></Pagition>
        </div>
    </div>
  )
}

export default App
