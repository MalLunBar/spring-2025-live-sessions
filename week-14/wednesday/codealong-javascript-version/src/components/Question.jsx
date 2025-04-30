import { useState } from "react"

export const Question = () => {
  const [answer, setAnswer] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What is the capital of Sweden?
        <input
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      </label>
    </form>
  )
}