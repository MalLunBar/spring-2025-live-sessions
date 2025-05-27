import { createContext, useState } from "react"

export const CountContext = createContext()

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const doubleIfEven = () => {
    if (count % 2 === 0) {
      setCount(count * 2)
    } else {
      console.log("This is odd, so not doubling")
    }
  }

  return (
    <CountContext.Provider value={{ count, increment, decrement, doubleIfEven }}>
      {children}
    </CountContext.Provider>
  )
}
