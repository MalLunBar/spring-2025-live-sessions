import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const res = await fetch(URL)
        if (res.ok) {
          const data = await res.json("http://localhost:8080/flowers")
          setFlowers(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchFlowers()
  }, [])

  return (
    <>
      <h1>FlowerPOWER</h1>
    </>
  )
}

export default App
