import { useState } from "react"

import { Question } from "./components/Question"

import "./App.css"

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleDouble = () => {
    setCount(count * 2)
  }

  const checkIfOverFive = () => {
    if (count > 5) {
      return true
    }
  }

  return (
    <>
      <h1>React State</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button 
        disabled={count === 0}
        onClick={handleReset}>Reset</button>
      <button onClick={handleDouble}>Double</button>
      {count > 5 && <p>You hit over 5</p>}{/* Using Logical AND - this will show the p if the condition is true*/}
      {count > 5 ? <p>You hit over 5 in count!</p> : <p>You are below 5</p>} {/* Using ternary expression - this will show one of the two p's depending on condition*/}
      <p>{checkIfOverFive() ? 'Yes' : 'No'}</p> {/*Using ternary expression and if statement broken out into a function. This will show one of the two p's depending on what the function returns*/}

      <Question />
    </>
  )
}

export default App
