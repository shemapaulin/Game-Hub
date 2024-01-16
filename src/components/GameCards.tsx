import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconLIst from "./PlatformIconLIst"
interface props{
    game: Game
}

const GameCards = ({game}:props) => {
  return (
   <Card borderRadius={10} overflow={"hidden"}>
    <Image src={game.background_image}/>
    <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
       
        <PlatformIconLIst platforms={game.parent_platforms.map(p=>p.platform)}/>
    </CardBody>
   </Card>
  )
}

export default GameCards