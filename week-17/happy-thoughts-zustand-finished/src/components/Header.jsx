import { useThoughtStore } from "../stores/useThoughtStore"

export const Header = () => {
  const thoughts = useThoughtStore(state => state.thoughts)
  const removeAllThoughts = useThoughtStore(state => state.removeAllThoughts)
  const resetThoughts = useThoughtStore(state => state.resetThoughts)
  
  return (
    <header className="dark">
      <p>Happy thoughts: {thoughts.length}</p>
      <button onClick={removeAllThoughts}>Remove all</button>
      <button onClick={resetThoughts}>Reset</button>
    </header>
  )
}
