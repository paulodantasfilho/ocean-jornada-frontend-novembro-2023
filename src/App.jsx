import './App.css'
import Card from './components/Card/Card';

function App() {
  const item1 = {
    nome:"Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }

  const item2 = {
    name: "Morte Saith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }
    return (
    <>      
      <br />
      <Card item={item1} />
      <Card item={item2} />
    </>
  )
}

export default App
