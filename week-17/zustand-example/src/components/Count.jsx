import { useCountStore } from "../stores/useCountStore"

export const Count = () => {
  // const { count, increment, decrement } = useCountStore()
  const count = useCountStore(state => state.count)
  const increment = useCountStore(state => state.increment)
  const decrement = useCountStore(state => state.decrement)
  const doubleIfEven = useCountStore(state => state.doubleIfEven)

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
