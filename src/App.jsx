import './App.css'
import Filter from './components/Filter'
import Books from './components/Books'
import { Route, Routes } from 'react-router-dom'
import BookDetail from './components/BookDetail'


function App() {

  return (
  <div>
    <Filter />
    <Routes>
      <Route path='/' element={<Books />}/> 
      <Route path='/book-detail/:bookId' element={<BookDetail/>}/>
    </Routes>
  </div>
  )
}

export default App
