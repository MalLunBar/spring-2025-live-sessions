import { ThemeProvider } from "styled-components"

import birds from "./data/birds.json"
import fish from "./data/fish.json"
import AnimalSection from "./sections/AnimalSection"
import Header from "./sections/Header"
import { GlobalStyle } from "./styles/GlobalStyle"
import { theme } from "./styles/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AnimalSection
        animals={birds.birds}
        title="Birds"  
      />
      <AnimalSection
        animals={fish.fish}  
        title="Fish"
      />
    </ThemeProvider>
  )
}

export default App
