import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/navBar"
const App = () => {
  return <Grid templateAreas={{
    base:`" nav"  " main"`,
    lg:`"nav nav" "aside main"`
  }}>
<GridItem area='nav' bg=''>
  <NavBar/>
</GridItem>
<Show above="lg">
<GridItem area='aside' bg=''>Aside</GridItem>
</Show>
<GridItem area='main' bg=''>main</GridItem>
  </Grid>
}

export default App