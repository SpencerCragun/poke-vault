import './App.css'
import CardDetails from './components/CardDetails'
import AllCards from './components/AllCards'
import AllSets from './components/AllSets'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SetDetails from './components/SetDetails'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllCards />} />
        <Route path="/cards" element={<AllCards />} />
        <Route path='/cards/:id' element={<CardDetails />} />
        <Route path='/sets' element={<AllSets />} />
        <Route path='/sets/:id' element={<SetDetails />} />
      </Routes>
    </>
  )
}

export default App
