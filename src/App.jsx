import './App.css'
import CardDetails from './components/CardDetails'
import AllCards from './components/AllCards'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element/>
        <Route path="/cards" element={<AllCards />} />
        <Route path='/cards/:id' element={<CardDetails />} />
      </Routes>
      
    </>
  )
}

export default App
