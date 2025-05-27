import { useThoughtStore } from "../stores/useThoughtStore"

export const Thought = ({ id, message, likes }) => {
  const removeThought = useThoughtStore(state => state.removeThought)
  const likeThought = useThoughtStore(state => state.likeThought)

  return (
    <div className="thought">
      <p>{message}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => removeThought(id)}>Delete</button>
      <button onClick={() => likeThought(id)}>Like</button>
    </div>
  )
}
