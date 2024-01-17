import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
interface props {
  game: Game;
}

const GameCards = ({ game }: props) => {
  return (
    <Card borderRadius={10} width="100%" overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        
<HStack justifyContent='space-between' marginBottom={3} padding={2} borderRadius='4px'>
<PlatformIconLIst
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}/>
</HStack>
<Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
