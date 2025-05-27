import { Count } from "./components/Count"
import { CountProvider } from "./contexts/CountContext"

import "./App.css"

export const App = () => { 
  return (
    <CountProvider>
      <Count />
    </CountProvider>
  )
}
