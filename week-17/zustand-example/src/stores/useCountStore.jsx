import { create } from "zustand"

export const useCountStore = create((set, get) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  doubleIfEven: () => {
    const currentCount = get().count

    if (currentCount % 2 === 0) {
      set({ count: currentCount * 2 })
    } else {
      console.log("This is an odd number, so we're not doubling")
    }
  }
}))
