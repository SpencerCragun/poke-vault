import './App.css'
import useFetch from './hooks/useFetch'
import CardDetails from './components/CardDetails'
import AllCards from './components/AllCards'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/cards" element={<AllCards />} />
        <Route path='/cards/:id' element={<CardDetails />} />
      </Routes>
      
    </>
  )
}

export default App
