import Card from "./components/Card"
import birds from "./data/birds.json"

import "./App.css"

console.log(birds)

const App = () => {
  return (
    <>
      <h1>Vite project</h1>
      <Card
        title="My first card"
        text="My first text"
      />
      <Card
        title="My second card"
        text="My second text"
      />
      {birds.birds.map((bird) => {
        return (
          <Card
            key={bird.name}
            title={bird.name}
            text={bird.tags.join(", ")}
          />
        )
      })}
    </>
  )
}

export default App
