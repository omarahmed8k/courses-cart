import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'
import Cart from './pages/Cart/Cart'
import Header from './components/Header/Header'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
