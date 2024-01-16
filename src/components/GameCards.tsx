import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
interface props {
  game: Game;
}

const GameCards = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
<HStack justifyContent='space-between' padding={2} borderRadius='4px'>
<PlatformIconLIst
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}/>
</HStack>
        
      </CardBody>
    </Card>
  );
};

export default GameCards;
