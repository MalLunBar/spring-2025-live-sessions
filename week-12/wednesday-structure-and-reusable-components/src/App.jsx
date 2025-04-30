import birds from "./data/birds.json"
import fish from "./data/fish.json"

import "./App.css"
import AnimalSection from "./sections/AnimalSection"
import Header from "./sections/Header"

console.log(birds)

const App = () => {
  return (
    <>
      <Header />
      <AnimalSection
        animals={birds.birds}
        title="Birds"  
      />
      <AnimalSection
        animals={fish.fish}  
        title="Fish"
      />
    </>
  )
}

export default App
