import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading, error } = useFetch("https://api.pokemontcg.io/v2/cards")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data)
  return (
    <>
      <h1>Test</h1>
      {data.map((card) => (
        <div key={card.id}>
          <p>{card.name}</p>
        </div>
      ))}
    </>
  )
}

export default App
