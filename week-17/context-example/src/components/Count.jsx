import { useContext } from "react"

import { CountContext } from "../contexts/CountContext"

export const Count = () => {
  const { count, increment, decrement, doubleIfEven } = useContext(CountContext)

  return (
    <section className="light">
      <h2>Count</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={doubleIfEven}>Double if even</button>
    </section>
  )
}
