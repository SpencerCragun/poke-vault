import './App.css';
import CardDetails from './pages/CardDetails';
import AllCards from './pages/AllCards';
import AllSets from './pages/AllSets';
import SetDetails from './pages/SetDetails';
import SearchResults from './pages/SearchResults';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

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
        <Route path='/search' element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;