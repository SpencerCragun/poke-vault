import './App.css'
import CardDetails from './components/CardDetails'
import AllCards from './components/AllCards'
import AllSets from './components/AllSets'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllCards />} />
        <Route path="/cards" element={<AllCards />} />
        <Route path='/cards/:id' element={<CardDetails />} />
        <Route path='/sets' element={<AllSets />} />
      </Routes>
    </>
  )
}

export default App
