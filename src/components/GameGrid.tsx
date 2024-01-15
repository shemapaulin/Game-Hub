
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/useGames";
import GameCards from "./GameCards";


const GameGrid = () => {
 const {games,error}=UseGames();
  return (
    <>
    {error && <Text>{error}</Text>}
   <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>
    {games.map((game)=>(<GameCards key={game.id} game={game}/>))}
   </SimpleGrid> 
   </>
  )
}

export default GameGrid


