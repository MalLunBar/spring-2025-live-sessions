import Card from './components/Card'
import './App.css'

const App = () => {

  return (
    <main className="app">
      <div className="card-container">
        <Card
          title="Ice Cream"
          description="A sweet treat for a hot day. Fantastic!"
          icon="/images/ice-cream.svg"
          color="purple"
        />
        <Card
          title="Donut"
          description="A sweet treat for a sweet tooth. Yum!"
          icon="/images/donut.svg"
          color="teal"
        />
        <Card
          title="Croissant"
          description="A hot pastry for a cold day. Delicious!"
          icon="/images/croissant.svg"
          color="coral"
        />
      </div>
    </main>
  )
}

export default App
