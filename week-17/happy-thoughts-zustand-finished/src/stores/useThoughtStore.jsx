import { create } from 'zustand'

const initialState = {
  thoughts: [
    {
      id: 1,
      message: "My first message",
      likes: 0
    }
  ]
}

export const useThoughtStore = create(set => ({
  ...initialState,
  createThought: (message) => {
    const newThought = {
      id: Date.now(), // or nanoid
      message,
      likes: 0
    }
    set(state => ({ thoughts: [newThought, ...state.thoughts] }))
  },
  removeThought: (id) => {
    set(state => ({
      thoughts: state.thoughts.filter(thought => thought.id !== id)
    }))
  },
  likeThought: (id) => {
    set(state => ({
      thoughts: state.thoughts.map(thought =>
        thought.id === id
          ? { ...thought, likes: thought.likes + 1 }
          : thought
      )
    }))
  },
  removeAllThoughts: () => {
    set({ thoughts: [] })
  },
  resetThoughts: () => set(initialState)
}))
